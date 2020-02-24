# A lambda function to interact with AWS RDS MySQL

import pymysql
import sys
import time
import datetime

ts = time.time()
timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

REGION = 'us-east-2'

rds_host  = "receipttrack.cfsltilpm94e.us-east-2.rds.amazonaws.com"
name = "appychip"
password = "appychip"
db_name = "receiptTrack"

def save_events(event):
    """
    This function fetches content from mysql RDS instance
    """
    result = []
    conn = pymysql.connect(rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
    with conn.cursor() as cur:
        cur.execute("""insert into receipts (user_id, created_at, image_id, image_url, success_id) values( %s, %s, %s, %s, %s)""" % (event['uid'], timestamp, event['image_id'], event['image_url'], event['success_id']))
        cur.execute("""select * from receipts""")
        conn.commit()
        cur.close()
        for row in cur:
            result.append(list(row))
        print("Data from RDS...")
        print(result)
    
def main(event, context):
    save_events(event)
        

