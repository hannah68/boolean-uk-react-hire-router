import React from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router';

const EditPage = (props) => {
    const { hiredPeople, setHiredPeople} = props;
    console.log(hiredPeople);
    const navigate = useNavigate();

    const handleDelete = (e) => {
        const personId = e.target.id;
        const me = hiredPeople.filter(el => {
            if(hiredPeople.indexOf(el) !== Number(personId)){
                return el
            }
        })
        setHiredPeople(me)
        navigate('/');
        
    }
    // useEffect(() => {
        
    //     // handleDelete()
    // }, [hiredPeople])
    
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
