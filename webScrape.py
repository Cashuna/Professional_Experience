# import libraries
import urllib2
from bs4 import BeautifulSoup
import csv
from datetime import datetime

# specify the url
team_polar = 'https://urlRemoved'

# query the website and return the html to the variable page
page = urllib2.urlopen(team_polar)

# parse the html using the BeautifulSoup and store html of page in variable scrape
scrape = BeautifulSoup(page, 'html.parser')

test = scrape.find('body', attrs={'class': 'fixed-navigation override team-styles coach-base team-report view--has-submenu'})
print test
# use scrape object and the BSoup method .find to query the data by tag name
player_name = scrape.find('span', attrs={'class': 'removed'})
exercise_date = scrape.find('h1', attrs={'id': 'removed'})
report_location = scrape.find('table', attrs={'data': 'removed'})

# use text and strip method to get the text from the report_location object
player = player_name.text.strip()
report_date = exercise_date.text
report = report_location.text.strip()

print report_date
print player
print report_location

# open a csv file with append to keep old data
scrape_date = datetime.now()
#import csv
#with open ('player_report.csv', 'a') as csv_file:
#	writer = csv.writer(csv_file)
#	writer.writerow([report, scrape_date])
