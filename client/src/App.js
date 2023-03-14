import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateUser from './Components/UpdateUser';
import UserDetails from './Components/UserDetails';
import UserNew from './Components/UserNew';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path='/api/users' element = {<Users />}/>
            <Route exact path='/api/user/new' element = {<UserNew />}/>
            <Route exact path='/api/user/:id' element = {<UserDetails />}/>
            <Route exact path='/api/user/:id/edit' element = {<UpdateUser />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
