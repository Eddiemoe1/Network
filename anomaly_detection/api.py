from fastapi import FastAPI
import joblib
import pandas as pd
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Load the saved model
model = joblib.load(r"C:\Users\Moraa\Desktop\network2\Network\anomaly_detection\experiment\anomaly_detection_model.joblib")

# Define the FastAPI app
app = FastAPI()
# Allow CORS for all origins (or specify your frontend's URL)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust origins for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to the Anomaly Detection API"}

# Define the expected data format
class NetworkTrafficData(BaseModel):
    packet_count: int
    response_time_ms: float
    throughput_mbps: float
    packet_loss_percent: float
    hour: int

# Endpoint to receive data and make predictions
@app.post("/predict")
async def predict(data: NetworkTrafficData):
    # Prepare data as DataFrame for the model
    input_data = pd.DataFrame([{
        'Packet Count': data.packet_count,
        'Response Time (ms)': data.response_time_ms,
        'Throughput (Mbps)': data.throughput_mbps,
        'Packet Loss (%)': data.packet_loss_percent,
        'Hour': data.hour
    }])

    # Make prediction
    prediction = model.predict(input_data)[0]
    
    # Return the prediction result
    return {"prediction": "anomaly" if prediction == -1 else "normal"}
