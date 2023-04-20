import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import "./App.css";
import { SessionProvider } from "next-auth/react";



function App() {
  return (
    <div className="App">
      <Dashboard />
      <SignIn />
      <SessionProvider />
     
    </div>
  );
}

export default App;
