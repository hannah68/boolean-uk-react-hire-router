import React from 'react'
import {useNavigate} from 'react-router';

const EditPage = (props) => {
    const { hiredPeople, setHiredPeople} = props;
    const navigate = useNavigate();

    const handleDelete = (e) => {
        const personId = e.target.id;
        const arr = hiredPeople.filter(el => {
            if(hiredPeople.indexOf(el) !== Number(personId)){
                return el
            }
            return false;
        })
        setHiredPeople(arr);
        navigate('/');
    }
   
    return ( 
        <section>
            <h2>Hired People</h2>
            <ul>
                {hiredPeople.map((person,index) => {
                    return(
                        <div key={index}>
                            <li>
                                {person.name.first} {person.name.last}
                            </li>
                            <button id={index} onClick={handleDelete}>Delete</button>
                        </div>
                    )
                })}
                
            </ul>
      </section>
    )
}

export default EditPage
