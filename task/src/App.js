import HeaderSection from "../src/components/HeaderPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../src/components/LoginPage';
import Tasks from './components/Tasks';
import SignUp from '../src/components/SignUp';
import FrontPage from "./components/FrontPage";

function App() {

  return (
    <Router>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tasks" element={<Tasks />} /> 
        <Route path="/signUp" element={<SignUp />} />

      </Routes>
    </Router>

  );
}

export default App;
