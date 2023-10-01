import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import { Card } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './products';

function App() {
  return (
    <>
          <Header  />

          <Router>
<Routes>
  <Route path="/" Component={Main}></Route>
    <Route path="/products" Component={Products}></Route>
    </Routes>
      </Router>
      
    </>
  );
}

export default App;
