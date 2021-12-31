import { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import PeopleList from "./components/PeopleList"

const Dashboard = (props) => {
  const { hiredPeople } = props
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchRandompeople = async() => {
      const res = await fetch('https://randomuser.me/api/?results=50');
      const data = await res.json();
      setPeople(data.results);
    }
    fetchRandompeople();
  }, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <Link to="/Edit">
          <button>Edit</button>
        </Link>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard