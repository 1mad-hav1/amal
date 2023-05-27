import Navbar from './component/Navbar';
import Tables from './component/Tables';
import Blog from './component/Blog'; 
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <br/>
      <br/>
      <Routes>
        <Route path='/' element={<Tables/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
