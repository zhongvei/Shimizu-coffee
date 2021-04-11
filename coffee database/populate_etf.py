import config
import csv
import psycopg2
import psycopg2.extras

connection = psycopg2.connect(host=config.DB_HOST, database=config.DB_NAME,
                              user=config.DB_USER, password=config.DB_PASS)

cursor = connection.cursor(cursor_factory=psycopg2.extras.DictCursor)

cursor.execute('select * from stock where is_etf = TRUE')

etfs = cursor.fetchall()

# dates = ['02-10-2021', '02-11-2021', '02-12-2021', '02-16-2021', '02-17-2021', '02-19-2021', '02-22-2021',
#         '02-23-2021', '02-24-2021', '02-25-2021', '02-26-2021', '03-01-2021', '03-02-2021', '03-03-2021',
#         '03-04-2021', '03-05-2021', '03-08-2021', '03-09-2021', '03-11-2021', '03-15-2021', '03-16-2021', '03-17-2021',
#         '03-23-2021', '03-24-2021', '03-26-2021', '03-30-2021']

#dates = ['03-31-2021']

dates = ['04-01-2021']


for current_date in dates:
    for etf in etfs:
        print(etf['symbol'])
        with open(f"data/{current_date}/{etf['symbol']}.csv") as f:
            reader = csv.reader(f)
            for row in reader:
                ticker = row[3]

                if ticker:
                    shares = row[5]
                    weight = row[7]
                    cursor .execute("""
                        SELECT * FROM stock WHERE symbol = %s
                    """, (ticker,))
                    stock = cursor.fetchone()
                    if stock:
                        cursor.execute("""
                        INSERT INTO etf_holding (etf_id, etf_symbol, holding_id, holding_name, dt, shares, weight)
                        VALUES (%s, %s, %s, %s, %s, %s, %s)
                        """, (etf['id'], etf['symbol'], stock['id'], stock['name'], current_date, shares, weight))
connection.commit()
