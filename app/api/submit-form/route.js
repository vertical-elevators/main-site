import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Map form types to their corresponding sheet names
const SHEET_NAMES = {
  'cta': 'CTA Form',
  'contact': 'Contact Page',
  'product': 'Product Page',
  'accessory': 'Accessories Page',
  'careers': 'Careers'
};

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
}

export async function POST(request) {
  try {
    // Handle JSON request
    const body = await request.json();
    const { formType, ...formData } = body;

    // Validate form type
    if (!formType || !SHEET_NAMES[formType]) {
      return NextResponse.json(
        { success: false, error: 'Invalid form type' },
        { status: 400 }
      );
    }

    const sheetName = SHEET_NAMES[formType];
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    // Get the current timestamp
    const timestamp = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    // Prepare row data based on form type
    let rowData = [];
    
    switch (formType) {
      case 'product':
        rowData = [
          timestamp,
          formData.name || 'No Name Provided',
          formData.email || 'No Email Provided',
          formData.phone || 'No Phone Provided',
          formData.productName || 'No Product Name Provided',
          formData.message || 'No Message Provided'
        ];
        break;

      case 'accessory':
        rowData = [
          timestamp,
          formData.name || 'No Name Provided',
          formData.email || 'No Email Provided',
          formData.phone || 'No Phone Provided',
          formData.accessoryName || 'No Accessory Name Provided',
          formData.message || 'No Message Provided'
        ];
        break;

      case 'contact':
        rowData = [
          timestamp,
          formData.name || 'No Name Provided',
          formData.email || 'No Email Provided',
          formData.phone || 'No Phone Provided',
          formData.subject || 'No Subject Provided',
          formData.message || 'No Message Provided'
        ];
        break;

      case 'cta':
        rowData = [
          timestamp,
          formData.name || 'No Name Provided',
          formData.email || 'No Email Provided',
          formData.phone || 'No Phone Provided',
          formData.service || 'No Service Selected',
          formData.message || 'No Message Provided'
        ];
        break;

      case 'careers':
        rowData = [
          timestamp,
          formData.name || 'No Name Provided',
          formData.email || 'No Email Provided',
          formData.phone || 'No Phone Provided',
          formData.city || 'No City Provided',
          formData.expectedSalary || 'No Expected Salary Provided',
          formData.applyFor || 'No Position Applied For'
        ];
        break;

      default:
        return NextResponse.json(
          { success: false, error: 'Unknown form type' },
          { status: 400 }
        );
    }

    // Check if sheet has headers, if not add them
    try {
      const headerCheck = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!A1:Z1`,
      });

      // If sheet is empty, add headers
      if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
        let headers = [];
        
        switch (formType) {
          case 'product':
            headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Product Name', 'Message'];
            break;
          case 'accessory':
            headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Accessory Name', 'Message'];
            break;
          case 'contact':
            headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message'];
            break;
          case 'cta':
            headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Service', 'Message'];
            break;
          case 'careers':
            headers = ['Timestamp', 'Name', 'Email', 'Phone', 'City', 'Expected Salary', 'Apply For'];
            break;
        }

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `${sheetName}!A1`,
          valueInputOption: 'RAW',
          resource: {
            values: [headers],
          },
        });
      }
    } catch (error) {
      console.error('Error checking/adding headers:', error);
    }

    // Append the form data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [rowData],
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      data: response.data,
    });

  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit form',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
