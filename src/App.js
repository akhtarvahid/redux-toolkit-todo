import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/form';
import Header from './components/header';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
