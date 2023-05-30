
import {Sign} from "./components/organisms/signup/Sign"

import {CreateAccOfTwitter} from "./components/organisms/CreateAcc/createAccount";

import './App.css';
import { Routes,Route } from 'react-router-dom';
import {SignInUp} from "./components/pages/register/register";

function App() {
  return (
    <Routes>
        <Route path="/" element={<SignInUp/>}/>
        <Route path="/signuppage" element={<Sign/>}/>
        <Route path="/createaccount" element={<CreateAccOfTwitter/>}/>
         
    
      
      

    </Routes>
  );
}

export default App;
