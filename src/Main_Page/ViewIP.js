import React, { useState, useEffect } from "react";
import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const ViewIP = () => {
  const [visitorData, setVisitorData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    if (user) {
      const fetchVisitorData = async () => {
        const querySnapshot = await getDocs(collection(db, "visitorIPs"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          firstVisit: doc.data().firstVisit ? doc.data().firstVisit.toDate().toString() : 'N/A',
          lastVisit: doc.data().lastVisit ? doc.data().lastVisit.toDate().toString() : 'N/A',
        }));
        setVisitorData(data);
      };

      fetchVisitorData();
    }
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div>
      {!user ? (
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
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
              {visitorData.map((visitor) => (
                <tr key={visitor.id}>
                  <td>{visitor.id}</td>
                  <td>{visitor.visits}</td>
                  <td>{visitor.firstVisit}</td>
                  <td>{visitor.lastVisit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewIP;
