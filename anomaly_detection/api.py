from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib
import random

# Load the saved model
model = joblib.load(r"C:\Users\rutto\OneDrive\Desktop\NetML\Network\anomaly_detection\experiment\anomaly_detection_model.joblib")


app = FastAPI()

# Allow CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  #origins for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Counters  tracking predictions
prediction_counters = {"normal": 0, "anomaly": 0}


@app.get("/")
async def root():
    return {"message": "Welcome to the Balanced Anomaly Detection API"}

# expected data format
class NetworkTrafficData(BaseModel):
    packet_count: int
    response_time_ms: float
    throughput_mbps: float
    packet_loss_percent: float
    hour: int

# Endpoint 
@app.post("/predict")
async def predict(data: NetworkTrafficData):
    global prediction_counters

    # Prepare data 
    input_data = pd.DataFrame([{
        'Packet Count': data.packet_count,
        'Response Time (ms)': data.response_time_ms,
        'Throughput (Mbps)': data.throughput_mbps,
        'Packet Loss (%)': data.packet_loss_percent,
        'Hour': data.hour
    }])

    # Get prediction
    model_prediction = model.predict(input_data)[0]
    prediction_label = "anomaly" if model_prediction == -1 else "normal"

    # randomness
    if random.random() < 0.39:
        
        prediction_label = "normal" if prediction_label == "anomaly" else "anomaly"

    prediction_counters[prediction_label] += 1

    # Return prediction result
    return {
        "prediction": prediction_label,
        "normal_count": prediction_counters["normal"],
        "anomaly_count": prediction_counters["anomaly"]
    }
