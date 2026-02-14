/**
 * RSVP Submission Service
 *
 * Submits RSVP data to the /api/rsvp serverless function,
 * which securely forwards it to Google Sheets via Apps Script.
 *
 * Required Vercel Environment Variable (set in Vercel dashboard):
 *   GOOGLE_SCRIPT_URL - Web App URL from your deployed Google Apps Script
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
