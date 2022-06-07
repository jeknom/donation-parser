const {google} = require('googleapis');

const sheetId = process.env.SHEET_ID;
const tableName = process.env.TABLE_NAME;
const googleAPIKey = process.env.GOOGLE_API_KEY;

const sheets = google.sheets({
    version: 'v4',
    auth: googleAPIKey
});

async function fetchAndPrintDonations() {
    const request = {
        spreadsheetId: sheetId,
        range: tableName,
    }
    
    try {
        const response = (await sheets.spreadsheets.values.get(request)).data;
        
        const entries = [];
        for (let i = 1; i < response.values.length; i++) {
            const [nickname, amount, date] = response.values[i];
            const existingEntryIdx = entries.findIndex(e => e.key === nickname);
            if (existingEntryIdx !== -1) {
                entries[existingEntryIdx].value += parseInt(amount);
            } else {
                entries.push({ key: nickname, value: parseInt(amount) })
            }
        }

        const grouped = [];
        for (let i = 0; i < entries.length; i++) {
            const { value } = entries[i];
            const priceGroup = entries.filter(e => e.value === value);

            if (!grouped[value]) {
                grouped[value] = priceGroup.map(e => e.key).join(', ');
            }
        }
   
        
        const groupedEntries = Object.entries(grouped);
        groupedEntries.sort((a, b) => parseInt(a[0]) < parseInt(b[0]) ? 1 : -1);
        for (let i = 0; i < groupedEntries.length; i++) {
            switch (i) {
                case 0:
                    console.info('🙏 GOD TIER\n--------------------')
                    break;
                case 1:
                    console.info('\n💛 Gold\n--------------------');
                    break;
                case 2:
                    console.info('\n🤍 Silver\n--------------------');
                    break;
                case 3:
                    console.info('\n🤎 Bronze\n--------------------');
                    break;
                case 4:
                    console.info('\n🙇 Special thanks to\n--------------------')
                    break;
            }
            const [key, value] = groupedEntries[i];
            console.info(`${value} (${key}€)`);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchAndPrintDonations();