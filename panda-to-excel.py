import pandas as pd
import json
import os
# Read the JSON file
json_file = 'lista.json'
with open(json_file) as f:
    data = json.load(f)

# Extract the "submissions" array
submissions = data["submissions"]

# Flatten the JSON data
flattened_data = pd.json_normalize(submissions)

# Create an Excel writer using Pandas
excel_file = 'excel.xlsx'
writer = pd.ExcelWriter(excel_file, engine='xlsxwriter')

# Convert the flattened data to an Excel sheet
flattened_data.to_excel(writer, sheet_name='Sheet1', index=False)

# Save the Excel file
writer._save()
filepath = 'excel.xlsx'
os.startfile(filepath)
