import config
import pandas as pd
import psycopg2
import psycopg2.extras

connection = psycopg2.connect(host=config.DB_HOST, database=config.DB_NAME,
                              user=config.DB_USER, password=config.DB_PASS)

cursor = connection.cursor(cursor_factory=psycopg2.extras.DictCursor)

# Import CSV
data = pd.read_csv(r'C:\Users\Ron\Desktop\Test\People.csv')
df = pd.DataFrame(data, columns=['Name', 'Country', 'Age'])


# Insert DataFrame to Table
for row in df.itertuples():
    cursor.execute('''
                INSERT INTO TestDB.dbo.people_info (Name, Country, Age)
                VALUES (?,?,?)
                ''',
                   row.Name,
                   row.Country,
                   row.Age
                   )
conn.commit()
