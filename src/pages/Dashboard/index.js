import { useState, useEffect } from "react"
import PeopleList from "./components/PeopleList"
import { Link } from "react-router-dom";

function Dashboard(props) {
  const { hiredPeople} = props
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setPeople(data.results);
      })
  }, []);
  

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <Link to={'/edit'}>
          <button>Edit</button>
        </Link>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
