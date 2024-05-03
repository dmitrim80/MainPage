/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  getDocs,
  where,
  deleteDoc,
  query,
  doc,
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig.js";

const ViewIP = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ipDetails, setIpDetails] = useState({});
  const [referenceToIP, setReferenceToIP] = useState("");

  async function deleteIP(ip) {
    const queryInactive = query(
      collection(db, "ip_visits"),
      where("ip", "==", ip)
    );

    try {
      const querySnapshot = await getDocs(queryInactive);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  }

  const getData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "ip_visits"));
      const documents = [];
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        documents.push({
          id: doc.id,
          ip: docData.ip,
          timestamp: docData.timestamp,
        });
      });
      setData(documents);
    } catch (error) {
      console.error(error.message);
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const groupedByIP = () => {
    const grouped = new Map();
    if (data && Array.isArray(data)) {
      data.forEach((item) => {
        if (!grouped.has(item.ip)) {
          grouped.set(item.ip, []);
        }
        grouped.get(item.ip).push(item);
      });
    }
    return grouped;
  };

  const renderGroupedData = () => {
    const grouped = groupedByIP();
    const elements = [];
    grouped.forEach((value, key) => {
      elements.push(
        <div key={key}>
          <div className="ip-description-row">
            <h5>IP: {key}</h5>
            <button onClick={() => deleteIP(key)}>Delete</button>
          </div>
          {value.map((item) => (
            <p className="ip-data-p" key={item.id}>
              Time: {Date(item.timestamp)}
            </p>
          ))}
        </div>
      );
    });
    return elements;
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      setUser(userCredential);
      setError("");
    } catch (error) {
      console.error(error.message);
      setError("Incorrect password");
    }
  };

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
    setData([]);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Clean up the subscription
  }, []);

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  return (
    <div>
      {!user && (
        <>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={login}>Login</button>
        </>
      )}
      <br />
      {error && !user && <h4 className="h4-login-msg">Incorrect password</h4>}
      <h4>{user ? `User Logged in: ${user.email}` : `Please login...`}</h4>
      {user && (
        <>
          <button onClick={logOut}>Log Out</button>

          <br />

          <button onClick={getData} disabled={loading}>
            {loading ? "Loading..." : "Get Data"}
          </button>

          <div>User Data: </div>
          {renderGroupedData()}
        </>
      )}
    </div>
  );
};

export default ViewIP;
