import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import VideoRoom from './pages/videoroom'; // assuming you have this file/component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<VideoRoom />} />
    </Routes>
  );
}

export default App;

