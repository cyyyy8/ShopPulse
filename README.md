# ShopPulse — Computer Shop Sales Analytics

A beginner-friendly, premium-looking data analysis dashboard using PHP, MySQL, Excel and Chart.js. All 180 transactions are **fictional sample data** for academic use.

## What's inside
- `index.php`, `style.css`, `charts.js` — read-only sales dashboard, searchable transaction table, responsive charts and dynamic insights.
- `config.php` — MySQL connection settings (edit before uploading).
- `database.sql` — creates `sales` table and imports 180 sample transactions.
- `ShopPulse_Analysis.xlsx` — Excel data, formula-driven summary, and charts.
- `sales_data.csv` — portable dataset for Google Sheets.
- `INTERPRETATION.md` — written findings, recommendations, limitations.

## Publish on InfinityFree
1. Create a free hosting account and open its Control Panel.
2. Create a MySQL database. Copy the **MySQL host**, **database name**, **database username** and **password** displayed by InfinityFree (the host is NOT `localhost`).
3. Open **phpMyAdmin** for that database, select **Import**, and upload `database.sql`.
4. Open `config.php` in a text editor and replace the four example connection values with your actual credentials.
5. In File Manager, open the `htdocs` folder of your domain. Upload `index.php`, `config.php`, `style.css`, `charts.js`. Do not upload the SQL or Excel files to public hosting.
6. Visit your domain. You should see charts, KPIs and transaction records. If you see a database connection error, check the MySQL credentials and import.

**Important:** PHP requires hosting; do not use GitHub Pages for the dynamic dashboard. The dashboard is intentionally read-only and does not need login, because this assignment is about data analysis rather than CRUD. The Chart.js library and optional Google font use public CDNs, so charts/fonts need internet access.

## How to explain it in class
1. The data was collected as a *simulated* computer shop sales dataset with dates, products, categories, quantities and prices.
2. MySQL stores the transactions. PHP uses SQL `SUM`, `COUNT`, `GROUP BY` and `ORDER BY` to calculate live totals.
3. Chart.js visualizes revenue by month and category. Excel independently demonstrates spreadsheet formulas and charts.
4. The interpretation file explains which categories/months performed best and what the business could improve.
5. Revenue is **not** profit; without costs, the system cannot calculate margins.

## Excel / Google Sheets
Open `ShopPulse_Analysis.xlsx` in Excel or upload it to Google Sheets. You can also import `sales_data.csv` into Sheets. The Excel workbook includes raw data, summary formulas, and charts. When adding more rows, expand the analysis formula ranges so they include the new rows.

## SQL examples
```sql
SELECT category, SUM(quantity * unit_price) AS revenue
FROM sales GROUP BY category ORDER BY revenue DESC;

SELECT DATE_FORMAT(sale_date,'%Y-%m') AS month,
SUM(quantity * unit_price) AS revenue
FROM sales GROUP BY month ORDER BY month;
```
