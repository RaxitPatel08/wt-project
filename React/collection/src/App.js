import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import Home from './component/Home';
import AddItem from './component/AddItem';
import AddCollection from './component/AddCollection';
import About from './component/About';
import Login from './login';
import SignUp from './signup';
import ShowCollection from './component/ShowCollection';
import Layout from './component/Layout';
import ItemView from './component/ItemView';
import EditItem from './component/EditItem';
import EditCollection from './component/EditCollection';


function App() {
  const [isAuthenticate,setIsAuthenticate] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuthenticate ? <Navigate to="/home"/> : <Login setIsAuthenticated={setIsAuthenticate}/>} />
        <Route path='/signup' element={<SignUp />} />

        {isAuthenticate &&(
          <Route path='/' element={<Layout />} >
            <Route path='/home' element={<Home />} />
            <Route path='/collections' element={<ShowCollection />} />
            <Route path='/collections/add' element={<AddCollection />} />
            <Route path='/collections/:CId/items/:IId' element={<ItemView />} />
            <Route path='/collections/:CId/items/add' element={<AddItem />} />
            <Route path='/collections/:CId/items/:IId/edit' element={<EditItem/>}/>
            <Route path='/collections/:CId/edit' element={<EditCollection/>}/>
            <Route path='/about' element={<About />} />
          </Route>
        )}

      {!isAuthenticate && <Route path="*" element={<Navigate to="/"/>} />}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
