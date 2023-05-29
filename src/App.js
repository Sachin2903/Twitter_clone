
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {SignInUp} from "./components/pages/register/register";
function App() {
  return (
    <Routes>
        <Route path="/" element={<SignInUp/>} />
      

    </Routes>
  );
}

export default App;
