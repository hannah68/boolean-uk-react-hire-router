import { useState } from "react"
import { useNavigate } from "react-router-dom";

const HireForm = (props)=> {
  const {setHiredPeople, person, hiredPeople} = props;
  const [wage, setWage] = useState(0);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setHiredPeople([...hiredPeople, person]);
    navigate("/",{ replace: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm