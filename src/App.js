
import {Sign} from "./components/organisms/signup/Sign"

import {CreateAccOfTwitter} from "./components/organisms/CreateAcc/createAccount";
import { Home } from "./components/pages/home/home";
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {SignInUp} from "./components/pages/register/register";
import { Page404 } from "./components/pages/page404/page404";

function App() {
  return (
    <Routes>
        <Route path="/" element={<SignInUp/>}/>
        <Route path="/signuppage" element={<Sign/>}/>
        <Route path="/createaccount" element={<CreateAccOfTwitter/>}/>
        <Route path="/home" element={<Home/>}/>
         <Route path="*" element={<Page404/>}/>
      
      

    </Routes>
  );
}

export default App;
