import React , {useState} from 'react'
import Person from './Person'
import axios from 'axios'

const PersonList = () => {

    // const [persons, setPersons] = useState();
    // axios.get("https://randomuser.me/api/")
    //     .then(response => {
    //         // setPersons(data.results)
    //         console.log(response.data.results)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })

    const persons = [
        {id : 1 ,name :"John" , role : "Developer"},
        {id : 2 ,name :"esme" , role : "Lead"},
        {id : 3 ,name :"Billy" , role : "Cloud"}
    ]

    const url = "https://randomuser.me/api/portraits/thumb/men/75.jpg";

    return (
        <div>
            {persons.map((person) => (
                <Person person={person}>
                    Ravi Shankar Raju Bhupatiraju, better known by the stage name Ravi Teja, is an Indian actor who predominantly works in Telugu cinema. Known for his roles in action comedy films, Teja has appeared in over 70 films and is one of the highest paid actors in Telugu film industry
                </Person>
            ))}
        </div>
    )
}

export default PersonList
