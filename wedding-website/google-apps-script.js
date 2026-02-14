/**
 * Google Apps Script — RSVP Web App
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet (https://sheets.google.com)
 * 2. Name it "Wedding RSVP"
 * 3. In Sheet1, add these headers in Row 1:
 *      A1: Timestamp
 *      B1: RSVP_Status
 *      C1: Name
 *      D1: Email
 *      E1: Phone
 *      F1: Guest_Count
 *      G1: Event
 *      H1: Side
 *      I1: Group_Name
 *      J1: Message
 *
 * 4. Go to Extensions > Apps Script
 * 5. Delete any existing code and paste this ENTIRE file
 * 6. Click Deploy > New deployment
 * 7. Choose type: "Web app"
 * 8. Set "Execute as": Me
 * 9. Set "Who has access": Anyone
 * 10. Click Deploy and authorize when prompted
 * 11. Copy the Web App URL (looks like https://script.google.com/macros/s/XXXX/exec)
 * 12. Add that URL as GOOGLE_SCRIPT_URL in your Vercel environment variables
 * 13. Redeploy on Vercel
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),                        // Timestamp
      data.rsvpStatus || 'Attending',    // RSVP_Status
      data.name || '',
      data.email || '',
      data.phone || '',
      data.guestCount || 0,
      data.event || '',
      data.side || '',
      data.groupName || '',
      data.message || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'RSVP endpoint is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
