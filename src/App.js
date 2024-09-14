
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';

//Dashboard
import Dashboard from './Pages/Dashboaed/Dashboard';
//Users
import Users from './Pages/Dashboaed/Users/Users';
import UpdateUser from './Pages/Dashboaed/Users/UpadateUser';
import CraeteUser from './Pages/Dashboaed/Users/CreateUser';
//Website
import Home from './Pages/Website/Home';
//Auth
import SignUp from './Pages/Website/Auth/SignUp';
import LogIn from './Pages/Website/Auth/LogIn';
import RequireAuth from './Pages/Website/Auth/RequireAuth';
import PersistLogin from './Pages/Website/Auth/PersistLogin';



function App() {
  return (
    <div className="App">
    
     <Routes>
     <Route path='/register' element={<SignUp/>}/>
     <Route path='/login' element={<LogIn/>}/>
     <Route path='' element={<Home/>}/>
     {/**protected routs */}
     <Route element={<PersistLogin/>}>
     <Route element={<RequireAuth/>}>
     <Route path='/Dashboard' element={<Dashboard/>}/>
     <Route path='/Dashboard' element={<Dashboard/>}>
       <Route path='Users' element={<Users/>}/>
       <Route path='Users/:id' element={<UpdateUser/>}/>
       <Route path='CreateUser' element={<CraeteUser/>}/>
     </Route>
     </Route>
     </Route>
     </Routes>
    </div>
  );
}

export default App;
