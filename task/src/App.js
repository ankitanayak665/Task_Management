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
        <Route path="/login" element={<LoginPage />} /> {/* Main/Home route */}
        <Route path="/tasks" element={<Tasks />} /> {/* Tasks route */}
        <Route path="/signUp" element={<SignUp />} /> {/* Tasks route */}

      </Routes>
    </Router>

  );
}

export default App;
