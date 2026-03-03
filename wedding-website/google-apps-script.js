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
 *      K1: Group_ID
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

    var rowData = [
      new Date(),                        // A: Timestamp
      data.rsvpStatus || 'Attending',    // B: RSVP_Status
      data.name || '',                   // C: Name
      data.email || '',                  // D: Email
      data.phone || '',                  // E: Phone
      data.guestCount || 0,              // F: Guest_Count
      data.event || '',                  // G: Event
      data.side || '',                   // H: Side
      data.groupName || '',              // I: Group_Name
      data.message || '',                // J: Message
      data.groupId || '',                // K: Group_ID
    ];

    // If a groupId is present, find and update the existing row instead of appending.
    var existingRow = -1;
    if (data.groupId) {
      var allData = sheet.getDataRange().getValues();
      // Column K is index 10 (0-based); row 0 is the header — start from row 1.
      for (var i = 1; i < allData.length; i++) {
        if (allData[i][10] === data.groupId) {
          existingRow = i + 1; // getRange uses 1-based row indices
          break;
        }
      }
    }

    if (existingRow > 0) {
      // Update the existing row in place (preserve the original timestamp in column A).
      sheet.getRange(existingRow, 1).setValue(new Date());   // A: refresh Timestamp
      sheet.getRange(existingRow, 2).setValue(rowData[1]);   // B: RSVP_Status
      sheet.getRange(existingRow, 3).setValue(rowData[2]);   // C: Name
      sheet.getRange(existingRow, 4).setValue(rowData[3]);   // D: Email
      sheet.getRange(existingRow, 5).setValue(rowData[4]);   // E: Phone
      sheet.getRange(existingRow, 6).setValue(rowData[5]);   // F: Guest_Count
      sheet.getRange(existingRow, 7).setValue(rowData[6]);   // G: Event
      sheet.getRange(existingRow, 8).setValue(rowData[7]);   // H: Side
      sheet.getRange(existingRow, 9).setValue(rowData[8]);   // I: Group_Name
      sheet.getRange(existingRow, 10).setValue(rowData[9]);  // J: Message
      // Column K (Group_ID) stays unchanged — already correct.
    } else {
      sheet.appendRow(rowData);
    }

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
