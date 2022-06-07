# Donation Parser

Parse donations from a Google sheet into a nice and readable list.

## Usage

1. Create a spreadsheet on Google Sheets that has the same structure as this one: [https://docs.google.com/spreadsheets/d/1v2WuXNwWI32VcHYUIx4YDok68ZyS7NtQTmmM1KGWUJg](https://docs.google.com/spreadsheets/d/1v2WuXNwWI32VcHYUIx4YDok68ZyS7NtQTmmM1KGWUJg)
2. Clone this repository
3. Run `yarn install`
4. Run `SHEET_ID=<YOUR_SHEET_ID> TABLE_NAME=<YOUR_TABLE_NAME> GOOGLE_API_KEY=<YOUR_GOOGLE_API_KEY> yarn print`
5. The donations should be printed in your console

## Help

### What is sheet ID?

Sheet ID is the ID you can see in the URL when visiting your spreadsheet:
> `https://docs.google.com/spreadsheets/d/<THIS_PART_IS_THE_SHEET_ID>`

### What is table name?

When visiting the spreadsheet, there can be multiple tables. In the current Google UI, you can see all the tables as tabs in the bottom of the page. In the case of the example spreadsheet above, the table name is "donations".

### What is Google API key?

This is an API key you will need to [generate on your GCP dashboard](https://cloud.google.com/docs/authentication/api-keys). You will also need to [enable the API for Google Sheets](https://support.google.com/googleapi/answer/6158841?hl=en) for this to work.

## Example output
```
🙏 GOD TIER
--------------------
Person1 (82€)

💛 Gold
--------------------
Person2 (65€)

🤍 Silver
--------------------
Person3, Person4 (50€)

🤎 Bronze
--------------------
Person5 (35€)

🙇 Special thanks to
--------------------
Person6 (25€)
Person7, Person8 (20€)
```