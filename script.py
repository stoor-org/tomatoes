import sys, requests

url = "https://httpdump.app/dumps/58d8f12e-64c2-4a27-8827-67a2749fd4dc/" + sys.argv[1]
#url = "https://httpdump.app/dumps/58d8f12e-64c2-4a27-8827-67a2749fd4dc/ABCD"
response = requests.get(url)
