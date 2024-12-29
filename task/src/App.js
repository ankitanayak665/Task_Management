import HeaderSection from "../src/components/HeaderPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../src/components/LoginPage';
import Tasks from '../src/components/Task';
import SignUp from '../src/components/SignUp';

// import MenuIcon from '@mui/icons-material/Menu';

function App() {

  return (
    <Router>
      <HeaderSection />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tasks" element={<Tasks />} /> 
        <Route path="/signUp" element={<SignUp />} />

      </Routes>
    </Router>

  );
}

export default App;
