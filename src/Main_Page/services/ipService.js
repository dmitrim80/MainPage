import { db } from "../firebaseConfig";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

export const storeVisit = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const { ip } = await response.json();
    if (!ip) {
      throw new Error("Unable to retrieve IP address");
    }

    const visitsCollectionRef = collection(db, "ip_visits");
    const visitData = {
      ip: ip.trim(),
      timestamp: serverTimestamp(),
    };
    await addDoc(visitsCollectionRef, visitData);
  } catch (error) {
    console.error("Error storing visit:", error);
    throw error;
  }
};