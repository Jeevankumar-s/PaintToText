import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
import Welcomepage from './components/Welcomepage'; // Assuming Login component exists in the same directory

function App() {
  return (
    <Router>
      <Routes>
        {/* Use the "element" prop instead of "component" for rendering components */}
        <Route path="/login" element={<Homepage />} exact />
        <Route path="/welcome" element={<Welcomepage />} exact />
        <Route path="/paint" element={<Chatpage />} />
      </Routes>
    </Router>
  );
}

export default App;
