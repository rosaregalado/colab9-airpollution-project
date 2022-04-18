from flask import Flask, request, render_template, redirect, url_for, jsonify
import requests
from geopy.geocoders import Nominatim
import dotenv
import os
dotenv.load_dotenv('/.env')


app = Flask(__name__)

# geopy library (example)
# address_input = input("Enter your adress:")
# geolocator = Nominatim(user_agent="myApp")
# location = geolocator.geocode("175 5th Avenue NYC")

# root route
@app.route('/')
def index():
  return render_template('index.html')

# ignore this route, it only renders a recommendation form 
@app.route('/recommendation-form', methods=['GET', 'POST'])
def recc_form():
  return render_template('partials/recommendation-form.html')


# -----------------------------------------------------------------------------------------------
# API endpoints/routes:

# returns current air quality index
@app.route('/', methods=['POST'])
def breezometer_aqi():
  # request location input from user
  location = request.form['location']
  # geopy library
  geolocator = Nominatim(user_agent="air-pollution")
  geolocation = geolocator.geocode(location)
  latitude = str(geolocation.latitude)
  longitude = str(geolocation.longitude)
  
  api_url = "https://air-quality.p.rapidapi.com/current/airquality"
  # input lat and lon
  querystring = {"lat": latitude, "lon": longitude}
  
  # api headers
  headers = {
    "X-RapidAPI-Host": "air-quality.p.rapidapi.com",
    "X-RapidAPI-Key": os.environ.get("rapid_api_key")
  }

  # convert api data to json
  response = requests.request("GET", api_url, headers=headers, params=querystring)
  json_obj = response.json()
  # request current aqi number
  aqi_data = json_obj['data'][0]['aqi']

  # return data in json format
  return jsonify(aqi_data)  



# returns health recommendations
@app.route('/health_recommendations', methods=['POST'])
def health_recommendations():
  # request user input for location
  location = request.form['location']
  # geopy library converts city name to location coordinates
  geolocator = Nominatim(user_agent="health-recc")
  geolocation = geolocator.geocode(location)
  latitude = str(geolocation.latitude)
  longitude = str(geolocation.longitude)

  # convert data to json
  api_key = os.environ.get('breezometer_api_key')
  api_url = requests.get("https://api.breezometer.com/air-quality/v2/current-conditions?lat=" +latitude+ '&lon=' +longitude+ "&key=" +api_key+ "&features=breezometer_aqi,health_recommendations")
  json_obj = api_url.json()
  
  # api health recommendations
  general_recc = json_obj['data']['health_recommendations']['general_population']
  elderly_recc = json_obj['data']['health_recommendations']['elderly']
  lung_disease_recc = json_obj['data']['health_recommendations']['lung_diseases']
  heart_disease_recc = json_obj['data']['health_recommendations']['heart_diseases']
  pregnant_women_recc = json_obj['data']['health_recommendations']['pregnant_women']
  children_recc = json_obj['data']['health_recommendations']['children']

  # returns recommendations in json
  return jsonify(general_recc, elderly_recc, lung_disease_recc, heart_disease_recc, pregnant_women_recc, children_recc)



# returns aqi forecast (api)
@app.route('/forecast', methods=['GET'])
def forecast():
  # requests user input for location
  location = request.form['location']
  # geopy library converts city name to location coordinates
  geolocator = Nominatim(user_agent="health-recc")
  geolocation = geolocator.geocode(location)
  latitude = str(geolocation.latitude)
  longitude = str(geolocation.longitude)
  
  api_url = "https://air-quality.p.rapidapi.com/forecast/airquality"

  querystring = {"lat": latitude,"lon": longitude,"hours":"72"}

  headers = {
    "X-RapidAPI-Host": "air-quality.p.rapidapi.com",
    "X-RapidAPI-Key": os.environ.get("rapid_api_key")
  }
  # request data from api url
  response = requests.request("GET", api_url, headers=headers, params=querystring)

  json_obj = response.json()
  # 24 hours later (tomorrow):
  aqi_data_24 = json_obj['data'][24]['aqi']
  # 48 hours later (2nd day):
  aqi_data_48 = json_obj['data'][48]['aqi']
  # 71 hours later (3rd day):
  aqi_data_71 = json_obj['data'][71]['aqi']

  # returns aqi for the next 3 days
  return jsonify(aqi_data_24, aqi_data_48, aqi_data_71)


# runs app
if __name__ == "__main__":
  app.run(debug=True)

