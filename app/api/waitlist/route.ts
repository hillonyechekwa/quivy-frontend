import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse, NextRequest } from 'next/server';



export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()
        
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: "Valid email is required" },
                {status: 400}
            )
        }

        const serviceAccount = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        })


        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID as string, serviceAccount)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[0]

        const rows = await sheet.getRows()
        if (rows.length === 0 || !sheet.headerValues || sheet.headerValues.length === 0) {
            await sheet.setHeaderRow(['email'])
        }
        
        await sheet.addRow({email: email})
        
        return NextResponse.json(
            {sucess: true, message: "Successfully added to waitlist"}
        )
    } catch (error) {
        console.error("Error adding email to waitlist", error);
        return NextResponse.json(
            { error: "Failed to add to waitlist" },
            {status: 500}
        )
    }
}