/**
 * Google Apps Script — RSVP Web App
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet (https://sheets.google.com)
 * 2. Name it "Wedding RSVP"
 * 3. In Sheet1, add these headers in Row 1:
 *      A1: Timestamp
 *      B1: Name
 *      C1: Email
 *      D1: Phone
 *      E1: Guest_Count
 *      F1: Event
 *      G1: Side
 *      H1: Group_Name
 *      I1: Message
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
      new Date(),          // Timestamp
      data.name || '',
      data.email || '',
      data.phone || '',
      data.guestCount || 1,
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
