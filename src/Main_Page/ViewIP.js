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
  addDoc,
  updateDoc
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig.js";
import axios from "axios";

const ViewIP = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ipDetails, setIpDetails] = useState({});
  const [referenceToIP, setReferenceToIP] = useState("");

  const saveIPDetailsToDB = async (ipDetails) => {
    const visitTime = new Date(); // Current time of the visit
    try {
        const docRef = await addDoc(collection(db, "ip_visits"), {
            ip: ipDetails.ip,
            hostname: ipDetails.hostname,
            city: ipDetails.city,
            region: ipDetails.region,
            country: ipDetails.country,
            loc: ipDetails.loc,
            org: ipDetails.org,
            postal: ipDetails.postal,
            timezone: ipDetails.timezone,
            visits: [visitTime] // Initialize with the current visit time
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const updateVisitTimestamps = async (ip, visitTime) => {
  const ipDocsQuery = query(collection(db, "ip_visits"), where("ip", "==", ip));
  const querySnapshot = await getDocs(ipDocsQuery);

  querySnapshot.forEach(async (doc) => {
      const visitsArray = doc.data().visits || [];
      visitsArray.push(visitTime);
      await updateDoc(doc.ref, { visits: visitsArray });
  });
};

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

  const getIPDetails = async (ip) => {
    const token = "d8d81202c96c4f";
    try {
      const response = await fetch(
        `https://ipinfo.io/${ip}/json?token=${token}`
      );
      const data = await response.json();
      setIpDetails((prevDetails) => ({
        ...prevDetails,
        [ip]: data,
      }));
    } catch (error) {
      console.error("Error fetching IP details:", error);
      setIpDetails((prevDetails) => ({
        ...prevDetails,
        [ip]: { error: "Failed to fetch data" },
      }));
    }
  };

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
            <button onClick={() => getIPDetails(key)}>IP Details</button>
          </div>
          <div className="ip-details-box">
            <div className="ip-time-details-box">
              {value.map((item) => (
                <div className="ip-data-p" key={item.id}>
                  <p>Time: {item.timestamp ? (item.timestamp.toDate ? item.timestamp.toDate().toLocaleString() : 'Invalid timestamp format') : 'No timestamp'}</p>
                </div>
              ))}
            </div>
            {ipDetails[key] && (
              <div className="ip-info">
                <p>Hostname: {ipDetails[key].hostname}</p>
                <p>
                  Location: {ipDetails[key].city},
                  {ipDetails[key].region},
                  {ipDetails[key].country},
                  {ipDetails[key].loc}
                </p>
                <p>
                  ISP:{" "}
                  {`${ipDetails[key].org},
                    zip: ${ipDetails[key].postal},
                    timezone: ${ipDetails[key].timezone}`}
                </p>
              </div>
            )}
          </div>
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
