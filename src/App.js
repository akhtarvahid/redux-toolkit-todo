import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/form';
import NavBar from './components/navbar';
import Listing from './components/listing';
import Edit from './components/Edit';

function App() {


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/todos' element={<Listing />} />
          <Route exact path='/todos/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
