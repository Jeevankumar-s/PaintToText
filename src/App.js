import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
import Welcomepage from './components/Welcomepage';
import NumComponent from './components/NumComponent';
import ABCDComponent from './components/ABCDComponent';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use the "element" prop instead of "component" for rendering components */}
        <Route path="/" element={<Homepage />} exact />
        <Route path="/welcome" element={<Welcomepage />} exact />
        <Route path="/paint" element={<Chatpage />} />
        <Route path="/num-paint" element={<NumComponent />} />
        <Route path="/abcd-paint" element={<ABCDComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
