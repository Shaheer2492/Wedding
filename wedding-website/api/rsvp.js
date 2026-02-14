export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check both naming conventions (with and without VITE_ prefix)
  const AIRTABLE_API_KEY = (process.env.AIRTABLE_API_KEY || process.env.VITE_AIRTABLE_API_KEY || '').trim();
  const AIRTABLE_BASE_ID = (process.env.AIRTABLE_BASE_ID || process.env.VITE_AIRTABLE_BASE_ID || '').trim();
  const AIRTABLE_TABLE_NAME = (process.env.AIRTABLE_TABLE_NAME || process.env.VITE_AIRTABLE_TABLE_NAME || 'RSVP_Responses').trim();

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.error('Missing Airtable env vars. Available keys with AIRTABLE:',
      Object.keys(process.env).filter(k => k.includes('AIRTABLE')));
    return res.status(500).json({
      error: 'Server configuration error: Airtable credentials not found. Check environment variable names.',
    });
  }

  try {
    const { name, email, phone, guestCount, event, message, side, groupName } = req.body;

    if (!name || !email || !phone || !event) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, phone, and event are required.',
      });
    }

    const fields = {
      Name: name,
      Email: email,
      Phone: phone,
      Guest_Count: parseInt(guestCount) || 1,
      Event: event,
      Side: side || '',
      Group_Name: groupName || '',
    };

    // Only include Message if it has content (avoids UNKNOWN_FIELD_NAME errors
    // if the field hasn't been created in Airtable yet)
    if (message && message.trim()) {
      fields.Message = message.trim();
    }

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Airtable API error:', {
        status: response.status,
        error: data.error,
      });

      // Provide actionable error messages
      if (response.status === 401) {
        const keyPrefix = AIRTABLE_API_KEY.substring(0, 6);
        console.error(`Auth failed. Key starts with: "${keyPrefix}...", Base ID: "${AIRTABLE_BASE_ID}"`);
        return res.status(502).json({
          error: `Airtable authentication failed (key starts with "${keyPrefix}..."). Regenerate your Personal Access Token at airtable.com/create/tokens and update it in Vercel.`,
        });
      }
      if (response.status === 404) {
        return res.status(502).json({
          error: `Airtable base or table not found. Verify AIRTABLE_BASE_ID and table name "${AIRTABLE_TABLE_NAME}" exist.`,
        });
      }
      if (response.status === 422) {
        const fieldError = data.error?.message || 'Unknown field error';
        return res.status(502).json({
          error: `Airtable field error: ${fieldError}. Check that your table has the required fields.`,
        });
      }

      return res.status(502).json({
        error: `Airtable error (${response.status}): ${data.error?.message || 'Unknown error'}`,
      });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('RSVP API error:', error);
    return res.status(500).json({
      error: 'Failed to submit RSVP. Please try again.',
    });
  }
}
