import requests
import json

# URL to fetch the CO2 data
url = "https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_mlo.txt"

# Fetching the data
response = requests.get(url)

# Checking if the request was successful
if response.status_code == 200:
    # Splitting the content into lines
    lines = response.text.splitlines()

    # Preparing a list to hold the processed data
    co2_data = []

    # Process the lines
    for line in lines:
        # Skip header lines
        if line.startswith('#') or line.strip() == '':
            continue
        
        # Split the line by whitespace and extract relevant fields
        parts = line.split()
        year = int(parts[0])
        month = int(parts[1])
        co2_level = float(parts[2])
        
        # Append the data as a dictionary
        co2_data.append({
            "year": year,
            "month": month,
            "co2_level": co2_level
        })

    # Writing the data to a JSON file
    with open('co2_data.json', 'w') as json_file:
        json.dump(co2_data, json_file, indent=4)
    
    print("Data has been written to co2_data.json")
else:
    print("Failed to fetch data. Status code:", response.status_code)
