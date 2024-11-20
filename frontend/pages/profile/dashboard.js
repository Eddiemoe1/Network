import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [prediction, setPrediction] = useState(null); // Prediction result
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error message
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'; // API URL with fallback

  // Function to fetch prediction data from FastAPI
  const fetchPrediction = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = {
        packet_count: 500,
        response_time_ms: 120.5,
        throughput_mbps: 50.0,
        packet_loss_percent: 0.5,
        hour: new Date().getHours(),
      };

      const response = await axios.post(`${API_URL}/predict`, data);

      if (response.status === 200) {
        setPrediction(response.data.prediction); // Update prediction
      } else {
        setError('Failed to fetch prediction. Please try again.');
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'An error occurred. Check your network or server.';
      setError(errorMsg); // Handle errors gracefully
    } finally {
      setLoading(false); // Always stop the loading state
    }
  };

  // Use effect for polling the FastAPI endpoint every 5 seconds
  useEffect(() => {
    fetchPrediction(); // Initial fetch

    const interval = setInterval(() => {
      fetchPrediction();
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Anomaly Detection Dashboard</h1>

      {/* Loading state */}
      {loading && <p style={styles.loading}>Fetching prediction...</p>}

      {/* Error state */}
      {error && <p style={styles.error}>{error}</p>}

      {/* Prediction result */}
      {!loading && !error && (
        <div style={styles.resultContainer}>
          <h2 style={styles.resultHeader}>Prediction Result:</h2>
          <p style={styles.predictionText}>
            {prediction ? prediction : 'No prediction available yet.'}
          </p>
        </div>
      )}

      <footer style={styles.footer}>
        <p>Real-time predictions powered by FastAPI. Updates every 5 seconds.</p>
      </footer>
    </div>
  );
}

// Inline styles for simple UI adjustments
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
    fontSize: '1.2rem',
    color: '#007bff',
  },
  error: {
    fontSize: '1.2rem',
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
    fontSize: '1.8rem',
    color: prediction => (prediction === 'Anomaly' ? '#f44336' : '#4caf50'), // Conditional styling
  },
  footer: {
    marginTop: '50px',
    fontSize: '1rem',
    color: '#777',
    textAlign: 'center',
  },
};
