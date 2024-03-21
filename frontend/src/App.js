import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Results from './Pages/Results';
import ResultDisplay from './Pages/ResultDisplay';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Results/>}></Route>
        <Route path='/ResultDisplay' element={<ResultDisplay/>} >
          <Route path=':id' element={<ResultDisplay/>}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
