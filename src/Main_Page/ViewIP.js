import React, { useState, useEffect } from "react";

const ViewIP = () => {
  const [visitorData, setVisitorData] = useState({});

  useEffect(() => {
    // Retrieve the visitor data from local storage
    const data = localStorage.getItem("visitorIPs");
    if (data) {
      setVisitorData(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <h1>Visitor IP Addresses and Visit Counts</h1>
      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>IP Address</th>
            <th>Number of Visits</th>
            <th>First Visit</th>
            <th>Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(visitorData).map(([ip, details]) => (
            <tr key={ip}>
              <td>{ip}</td>
              <td>{details.count}</td>
              <td>{details.firstVisit}</td>
              <td>{details.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewIP;
