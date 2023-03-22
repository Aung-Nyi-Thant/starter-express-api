import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import MovieDetail from './Pages/MovieDetailPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/:pageId' element={<HomePage/>}>
            </Route>
            <Route path='/detail/:MovieId' element={<MovieDetail/>}>

            </Route>
            <Route path='/detail/:MovieId/0' element={<HomePage/>}>

            </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
