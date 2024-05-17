import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Game } from "./components/game/Game";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import NotFound from './NotFound'; */

/* import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Game } from "./components/game/Game";
import { Navigate } from 'react-router-dom'; // В данном случае используется Navigate вместо Switch */

function App() {
  return (
    <div style={{ backgroundColor: '#262626' }}>
    <Router>
      <div>
        <Routes>
          <Route index element={<Game />} />
          <Route path="/game" element={<Game />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
