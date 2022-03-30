from flask import Flask, request
import requests

app = Flask(__name__)

# API routes:

# returns breezeometer aqi index
@app.route('/breezeometer-aqi', methods=['GET'])
def breezometer_aqi():
  response = requests.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=49.416445994186226&lon=-123.08999098662949&key=71bb1e267fc449ba9e6563ccfdee0784&features=breezometer_aqi')
  # convert data response to json
  json_obj = response.json()
  return json_obj

# returns local aqi index
@app.route('/local-aqi', methods=['GET'])
def local_aqi():
  response = requests.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=49.416445994186226&lon=-123.08999098662949&key=71bb1e267fc449ba9e6563ccfdee0784&features=local_aqi')
  json_obj = response.json()
  return json_obj

# returns health recommendations
@app.route('/health-recommendations', methods=['GET'])
def health_recommendations():
  response = requests.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=49.416445994186226&lon=-123.08999098662949&key=71bb1e267fc449ba9e6563ccfdee0784&features=health_recommendations')
  json_obj = response.json()
  return json_obj

# returns pollutants info
@app.route('/pollutants', methods=['GET'])
def pollutant_info():
  response = requests.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=49.416445994186226&lon=-123.08999098662949&key=71bb1e267fc449ba9e6563ccfdee0784&features=pollutants_concentrations')
  json_obj = response.json()
  return json_obj



if __name__ == "__main__":
  app.run(debug=True)