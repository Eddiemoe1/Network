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
        packet_count: 9200, // Abnormal packet count
        response_time_ms: 2400, // High response time
        throughput_mbps: 1.9, // Low throughput
        packet_loss_percent: 20.0, // High packet loss
        hour: new Date().getHours(), // Use the current hour for prediction
      };

      // Send POST request to FastAPI /predict endpoint
      const response = await axios.post('http://127.0.0.1:8000/predict', data);

      // Handle successful response
      if (response.status === 200) {
        setPrediction(response.data); // Set prediction result
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
    color: 'blue', // Change header color to blue
  },
  loading: {
    fontSize: '1.5rem',
    color: '#ff9800',
  },
  error: {
    fontSize: '1.5rem',
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
  },
  footer: {
    marginTop: '50px',
    fontSize: '1rem',
    color: '#777',
    textAlign: 'center',
  },
};
