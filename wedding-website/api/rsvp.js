export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GOOGLE_SCRIPT_URL = (process.env.GOOGLE_SCRIPT_URL || '').trim();

  if (!GOOGLE_SCRIPT_URL) {
    console.error('Missing GOOGLE_SCRIPT_URL env var. Available env keys:',
      Object.keys(process.env).filter(k => k.includes('GOOGLE')));
    return res.status(500).json({
      error: 'Server configuration error: Google Script URL not found. Set GOOGLE_SCRIPT_URL in Vercel environment variables.',
    });
  }

  try {
    const { name, email, phone, guestCount, event, message, side, groupName } = req.body;

    if (!name || !email || !phone || !event) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, phone, and event are required.',
      });
    }

    const payload = {
      name,
      email,
      phone,
      guestCount: parseInt(guestCount) || 1,
      event,
      side: side || '',
      groupName: groupName || '',
      message: (message && message.trim()) || '',
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    // Google Apps Script redirects on POST — fetch with redirect: 'follow' handles it.
    // A 200 with any body means the script executed.
    if (!response.ok) {
      console.error('Google Apps Script error:', {
        status: response.status,
        statusText: response.statusText,
      });
      return res.status(502).json({
        error: `Google Sheets error (${response.status}). Check that your Apps Script is deployed correctly.`,
      });
    }

    let data;
    try {
      data = await response.json();
    } catch {
      // Some Apps Script responses may not parse cleanly — treat 200 as success
      data = { success: true };
    }

    if (data.success === false) {
      console.error('Google Apps Script returned error:', data.error);
      return res.status(502).json({
        error: `Google Sheets write failed: ${data.error || 'Unknown error'}`,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('RSVP API error:', error);
    return res.status(500).json({
      error: 'Failed to submit RSVP. Please try again.',
    });
  }
}
