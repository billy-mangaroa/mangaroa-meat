/**
 * Vercel Serverless Function: Bulk Meat Order Form → Airtable
 *
 * POST /api/submit-bulk-order
 * Creates a record in the Bulk Meat Orders table (or Tasks table as fallback).
 */

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || 'app8H6Ok8BVYKYCGz';
const AIRTABLE_TABLE = process.env.BULK_ORDER_TABLE || 'Bulk Meat Orders';

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const data = req.body;

    // Validate required fields
    if (!data.name?.trim() || !data.email?.trim() || !data.phone?.trim()) {
      return res.status(400).json({ error: 'Name, email, and phone are required.' });
    }

    const meatType = data.meatType?.trim();
    if (!meatType) {
      return res.status(400).json({ error: 'Please select at least one meat type.' });
    }

    const fields = {
      'Name': data.name.trim(),
      'Email': data.email.trim(),
      'Phone': data.phone.trim(),
      'Region': data.region?.trim() || '',
      'Meat Type': meatType,
      'Quantity': data.quantity?.trim() || '',
      'Butchering': data.butchering?.trim() || '',
      'Collection': data.collection?.trim() || '',
      'Frequency': data.frequency?.trim() || '',
      'Preferred Timing': data.timing?.trim() || '',
      'Why Interested': data.why?.trim() || '',
      'Notes': data.notes?.trim() || '',
      'Status': 'New',
      'Source': 'meat.mangaroa.org',
      'Created Date': new Date().toISOString().split('T')[0],
    };

    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields, typecast: true }),
      }
    );

    const result = await airtableRes.json();

    if (result.error) {
      console.error('Airtable error:', result.error);
      return res.status(500).json({ error: `Airtable: ${result.error.message || result.error.type}` });
    }

    console.log(`Bulk order interest: ${data.name} (${data.email}) — ${meatType} ${data.quantity || ''} → record ${result.id}`);

    return res.status(200).json({
      success: true,
      recordId: result.id,
      message: 'Interest registered. We will be in touch.',
    });

  } catch (err) {
    console.error('Submit error:', err);
    return res.status(500).json({ error: err.message });
  }
}
