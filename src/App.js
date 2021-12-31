import { useState } from "react"
import {Routes, Route, Link} from "react-router-dom";
import "./styles.css"
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile"
import EditPage from "./pages/EditPage/EditPage";

const App = () => {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>}/>

          <Route path="/view/:id" element={<PersonProfile 
            setHiredPeople={setHiredPeople} 
            hiredPeople={hiredPeople}/>}/>

          <Route path="/Edit" element={<EditPage 
            hiredPeople={hiredPeople}
            setHiredPeople={setHiredPeople}/>}/>
      </Routes>
    </>
  )
}

export default App;