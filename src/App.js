
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >

         <Routes>
           <Route path="/" exact  element={<HomePage/>}/>
           <Route path="/contact" exact  element={<ContactPage/>}/>
     
         </Routes>
      
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
