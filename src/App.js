import Nav from './component/Nav';
import './App.css';
import Table3 from './component/Table3';
import Blg from './component/Blg';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <Nav/>
      <br/><br/><br/><br/><br/>
      <Routes>
        <Route path='/' element={<Table3/>}/>
        <Route path='/Blg' element={<Blg/>}/>
      </Routes>
    </div>
  );
}

export default App;
