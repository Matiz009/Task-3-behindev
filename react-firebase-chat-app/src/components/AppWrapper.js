import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1> Chat App </h1>{" "}
      </div>{" "}
      <div className="app-container"> {children} </div>{" "}
      {isAuth && (
        <div className="sign-out">
          <button
            onClick={signUserOut}
            style={{
              backgroundColor: "#3498db",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Sign Out{" "}
          </button>{" "}
        </div>
      )}{" "}
    </div>
  );
};
