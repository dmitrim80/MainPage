import React, { useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const ViewIP = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState("");
  const auth = getAuth();
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      <div>
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
        <br />
        <div>
          <h4>User Logged in: {user?.email}</h4>

          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default ViewIP;
