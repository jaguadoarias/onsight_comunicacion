import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import "./styles/reset.css";
import "./styles/variables.css";
import GlobalStyles from "./styles/GlobalStyles";
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
