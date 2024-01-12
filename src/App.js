import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/form';
import Header from './components/header';
import Listing from './components/listing';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/todo-list' element={<Listing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
