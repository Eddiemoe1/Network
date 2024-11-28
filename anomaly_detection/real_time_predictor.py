
import requests
import time
from datetime import datetime
import random

# FastAPI endpoint
API_URL = "http://127.0.0.1:8000/predict"

# Simulate network traffic data
def generate_network_data():
    return {
        "packet_count": random.randint(100, 1000),
        "response_time_ms": round(random.uniform(50.0, 500.0), 2),
        "throughput_mbps": round(random.uniform(1.0, 100.0), 2),
        "packet_loss_percent": round(random.uniform(0.0, 5.0), 2),
        "hour": datetime.now().hour
    }

# Send traffic data to the API and get predictions
def send_data_to_api():
    try:
        # Generate simulated data
        data = generate_network_data()
        
        # Send POST request to the API
        response = requests.post(API_URL, json=data)
        
        if response.status_code == 200:
            prediction = response.json()["prediction"]
            print(f"Prediction: {prediction} | Data: {data}")
        else:
            print(f"Error: {response.status_code} | {response.text}")
    
    except Exception as e:
        print(f"An error occurred: {e}")

# Run real-time predict-- loop
def run_real_time_prediction():
    print("Starting real-time network traffic monitoring and prediction...")
    while True:
        send_data_to_api()
        time.sleep(5)  # Adjust time interval

if __name__ == "__main__":
    run_real_time_prediction()
