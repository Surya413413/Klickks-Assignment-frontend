import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Loginpage from "./components/Loginpage"
import Registerpage from "./components/Registerpage"
import Dashboard from "./components/Dashboard";
import Forgotpassword from "./components/Forgotpassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
       <Route path="/" element={<Navigate to="/login" replace />} />
       <Route path="/login" element={<Loginpage />} />
       <Route path="/forgotpassword" element={<Forgotpassword />} />
     <Route path="/register" element={<Registerpage/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
