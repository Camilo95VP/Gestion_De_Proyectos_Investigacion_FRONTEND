
import './App.css';
import Sidebar from "../src/components/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element= { <Sidebar/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
