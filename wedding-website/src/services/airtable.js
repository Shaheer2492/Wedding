/**
 * RSVP Submission Service
 *
 * Submits RSVP data to the /api/rsvp serverless function,
 * which securely forwards it to Airtable server-side.
 *
 * Required Vercel Environment Variables (set in Vercel dashboard):
 *   AIRTABLE_API_KEY  - Personal Access Token from https://airtable.com/create/tokens
 *   AIRTABLE_BASE_ID  - Base ID from your Airtable base URL
 *   AIRTABLE_TABLE_NAME - (optional) defaults to "RSVP_Responses"
 */

export const submitRSVP = async (formData) => {
  const { email, phone, event, attendees, groupName, message, side } = formData;

  // Build the name and guest count from attendees
  let name = '';
  let guestCount = 1;

  if (attendees && attendees.length > 0) {
    name = attendees.map((a) => a.name).join(', ');
    guestCount = attendees.length;
  }

  const payload = {
    name,
    email,
    phone,
    guestCount,
    event,
    message: message || '',
    side: side || '',
    groupName: groupName || '',
  };

  const response = await fetch('/api/rsvp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('RSVP submission failed:', data.error);
    throw new Error(data.error || 'Failed to submit RSVP. Please try again.');
  }

  return data;
};
