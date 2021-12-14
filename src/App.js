import { useState } from "react"
import {Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import EditPage from "./pages/EditPage/EditPage";
import "./styles.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  
  console.log(hiredPeople);
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
        path='/' 
        element={<Dashboard hiredPeople={hiredPeople}/>}
        ></Route>

        <Route 
        path='/view/:id' 
        element={<PersonProfile setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>}
        ></Route>

        <Route 
        path='/edit' 
        element={<EditPage hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}
        ></Route>
      </Routes>
    </>
  )
}
