import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

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
        setPrediction(response.data.prediction);
      } else {
        setError('Failed to fetch prediction. Please try again.');
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'An error occurred. Check your network or server.';
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrediction();
    const interval = setInterval(fetchPrediction, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Anomaly Detection Dashboard</h1>
      {loading && <p style={styles.loading}>Fetching prediction...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {!loading && !error && (
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
              <td style={styles.tableCell}>500</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Response Time (ms)</td>
              <td style={styles.tableCell}>120.5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Throughput (Mbps)</td>
              <td style={styles.tableCell}>50.0</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Packet Loss (%)</td>
              <td style={styles.tableCell}>0.5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Hour</td>
              <td style={styles.tableCell}>{new Date().getHours()}</td>
            </tr>
            {!loading && !error && prediction && (
              <tr>
                <td style={styles.resultHeader}>Prediction Result:</td>
                <td style={{ ...styles.predictionText, color: prediction === 'Anomaly' ? '#f44336' : '#4caf50' }}>
                  {prediction}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      <footer style={styles.footer}>
        <p>Real-time predictions powered by FastAPI. Updates every 5 seconds.</p>
      </footer>
    </div>
  );
}

const styles = {
  /* Same as the updated styles object above */
};
