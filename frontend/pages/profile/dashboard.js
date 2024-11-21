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

        packet_count: 9200, // Abnormal packet count
        response_time_ms: 2400, // High response time
        throughput_mbps: 1.9, // Low throughput
        packet_loss_percent: 20.0, // High packet loss
        hour: new Date().getHours(), // Use the current hour for prediction

        packet_count: 500,
        response_time_ms: 120.5,
        throughput_mbps: 50.0,
        packet_loss_percent: 0.5,
        hour: new Date().getHours(),

      };

      const response = await axios.post(`${API_URL}/predict`, data);

      if (response.status === 200) {

        setPrediction(response.data); // Set prediction result

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


      {!loading && !error && prediction && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Metric</th>
              <th style={styles.tableHeader}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Packet Count</td>
              <td style={styles.tableCell}>{9200}</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Response Time (ms)</td>
              <td style={styles.tableCell}>{2400}</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Throughput (Mbps)</td>
              <td style={styles.tableCell}>{1.9}</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Packet Loss (%)</td>
              <td style={styles.tableCell}>{20.0}</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Hour</td>
              <td style={styles.tableCell}>{new Date().getHours()}</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Prediction Result</td>
              <td style={styles.tableCell}>{prediction.prediction}</td>
            </tr>
          </tbody>
        </table>

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
        <p>Real-time predictions powered by FastAPI. Updates every 5 seconds in the sysstem.</p>
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
    color: 'blue', // Change header color to blue
  },
  loading: {
    fontSize: '1.2rem',
    color: '#007bff',
  },
  error: {
    fontSize: '1.2rem',
    color: '#f44336',
  },
  table: {
    width: '100%',
    marginTop: '30px',
    borderCollapse: 'collapse',
    border: '2px solid black', // Add black border around the entire table
  },
  tableHeader: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
    border: '2px solid black', // Add black border to headers
  },

  tableCell: {
    border: '2px solid black', // Add thick black border to cells
    padding: '10px',
    textAlign: 'left',

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
