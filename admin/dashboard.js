// Dashboard.js

import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('http://65.0.209.211:5000/collections/coupons_report')
      .then(response => response.json())
      .then(data => {
        setRecords(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>code</th>
            <th>phNumber</th>
            <th>userName</th>
            <th>isValid</th>
            
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.code}>
              <td>{record.code}</td>
              <td>{record.phNumber}</td>
              <td>{record.userName}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
