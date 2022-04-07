from flask import Flask, request, render_template, redirect, url_for
import requests
# from geopy.geocoders import Nominatim

app = Flask(__name__)

# geopy
# address_input = input("Enter your adress:")
# geolocator = Nominatim(user_agent="myApp")
# location = geolocator.geocode("175 5th Avenue NYC")

# root route
@app.route('/')
def index():
  return render_template('index.html')

# -----------------------------------------------------------------------------------------------
# API routes:

# returns breezeometer aqi index
@app.route('/', methods=['POST'])
def breezometer_aqi():
  latitude = request.form['lat']
  longitude = request.form['lon']
  response = requests.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=' +latitude+ '&lon=' +longitude+ '&key=89e152af8d9f4b77872dbdc7b7f602d2&features=breezometer_aqi, pollutants_concentrations, sources_and_effects&breezometer_aqi_color=red_green')
  # convert data response to json
  json_obj = response.json()
  # aqi data
  aqi_category = json_obj['data']['indexes']['baqi']['category']
  aqi_display = json_obj['data']['indexes']['baqi']['aqi_display']
  aqi_color = json_obj['data']['indexes']['baqi']['color']
  # pollutants info
  co = json_obj['data']['pollutants']['co']['display_name']
  co_concentration = json_obj['data']['pollutants']['co']['concentration']['value']
  co_units = json_obj['data']['pollutants']['co']['concentration']['units']

  no2 = json_obj['data']['pollutants']['no2']['display_name']
  no2_concentration = json_obj['data']['pollutants']['no2']['concentration']['value']
  no2_units = json_obj['data']['pollutants']['no2']['concentration']['units']


  return render_template('aqi.html', aqi_category=aqi_category, aqi_display=aqi_display, aqi_color=aqi_color, 
  co=co, co_concentration=co_concentration, co_units=co_units,
  no2=no2, no2_concentration=no2_concentration, no2_units=no2_units)


# returns health recommendations
@app.route('/health_recommendations', methods=['POST'])
def health_recommendations():
  latitude = request.form['lat']
  longitude = request.form['lon']
  response = requests.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=' +latitude+ '&lon=' +longitude+ '&key=89e152af8d9f4b77872dbdc7b7f602d2&features=breezometer_aqi,health_recommendations&breezometer_aqi_color=red_green')
  json_obj = response.json()
  
  # api recommendations
  general_recc = json_obj['data']['health_recommendations']['general_population']
  elderly_recc = json_obj['data']['health_recommendations']['elderly']
  lung_disease_recc = json_obj['data']['health_recommendations']['lung_diseases']
  heart_disease_recc = json_obj['data']['health_recommendations']['heart_diseases']
  active_recc = json_obj['data']['health_recommendations']['active']
  pregnant_women_recc = json_obj['data']['health_recommendations']['pregnant_women']
  children_recc = json_obj['data']['health_recommendations']['children']

  return render_template('health_recommendations.html', 
  general_recc=general_recc, elderly_recc=elderly_recc, 
  lung_disease_recc=lung_disease_recc, heart_disease_recc=heart_disease_recc, 
  active_recc=active_recc, pregnant_women_recc=pregnant_women_recc, 
  children_recc=children_recc)


# render recommendation form
@app.route('/recommendation-form', methods=['GET', 'POST'])
def recc_form():
  return render_template('partials/recommendation-form.html')



# returns pollutants info
@app.route('/pollutants', methods=['GET'])
def pollutant_info():
  response = requests.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=49.416445994186226&lon=-123.08999098662949&key=71bb1e267fc449ba9e6563ccfdee0784&features=pollutants_concentrations')
  json_obj = response.json()
  return json_obj


# returns local aqi index
@app.route('/local-aqi', methods=['GET'])
def local_aqi():
  response = requests.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=49.416445994186226&lon=-123.08999098662949&key=71bb1e267fc449ba9e6563ccfdee0784&features=local_aqi')
  json_obj = response.json()
  return json_obj





if __name__ == "__main__":
  app.run(debug=True)

