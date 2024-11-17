import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [prediction, setPrediction] = useState(null); // State to store the prediction result
  const [loading, setLoading] = useState(false); // State to show loading indicator
  const [error, setError] = useState(null); // State to store any error message

  // Function to fetch prediction data from FastAPI
  const fetchPrediction = async () => {
    setLoading(true);
    setError(null); // Reset any previous errors

    try {
      // Simulated network traffic data for prediction
      const data = {
        packet_count: 500,
        response_time_ms: 120.5,
        throughput_mbps: 50.0,
        packet_loss_percent: 0.5,
        hour: new Date().getHours(), // Use the current hour for prediction
      };

      // Send POST request to FastAPI /predict endpoint
      const response = await axios.post('http://127.0.0.1:8000/predict', data);

      // Handle successful response
      if (response.status === 200) {
        setPrediction(response.data.prediction); // Set prediction result (normal or anomaly)
      } else {
        setError('Failed to fetch prediction');
      }
    } catch (err) {
      // Handle any errors
      setError(`Error: ${err.message}`);
    }

    setLoading(false); // Stop the loading state
  };

  // Polling: fetch prediction every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchPrediction();
    }, 5000); // 5 seconds interval for real-time fetching

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Anomaly Detection Dashboard</h1>

      {loading && <p style={styles.loading}>Loading prediction...</p>}

      {error && <p style={styles.error}>{error}</p>}

      {!loading && !error && (
        <div style={styles.resultContainer}>
          <h2 style={styles.resultHeader}>Prediction Result:</h2>
          <p style={styles.predictionText}>
            {prediction ? prediction : 'No prediction available yet'}
          </p>
        </div>
      )}

      <footer style={styles.footer}>
        <p>Real-time predictions from FastAPI. Refreshes every 5 seconds.</p>
      </footer>
    </div>
  );
}

// Simple inline styles for the dashboard
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    color: '#333',
  },
  loading: {
    fontSize: '1.5rem',
    color: '#ff9800',
  },
  error: {
    fontSize: '1.5rem',
    color: '#f44336',
  },
  resultContainer: {
    marginTop: '30px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  resultHeader: {
    fontSize: '1.5rem',
    color: '#333',
  },
  predictionText: {
    fontSize: '2rem',
    color: '#4caf50',
  },
  footer: {
    marginTop: '50px',
    fontSize: '1rem',
    color: '#777',
    textAlign: 'center',
  },
};
