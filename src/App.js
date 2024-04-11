import './App.css'
import Login from './componant/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './componant/signup/Signup';
import Users from './componant/signup/users/Users';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;