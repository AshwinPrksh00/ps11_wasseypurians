import logo from "./logo.svg";
import "./chatapp.css";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import { auth } from "./fire.js";
import { useAuthState } from "react-firebase-hooks/auth";
import ImageUpload from "./components/ImageUpload";

function ChatApp() {
  const [user] = useAuthState(auth);
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default ChatApp;
