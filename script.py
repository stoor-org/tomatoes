import sys

url = "https://httpdump.app/dumps/58d8f12e-64c2-4a27-8827-67a2749fd4dc/" + sys.argv[1]
response = requests.get(url)
