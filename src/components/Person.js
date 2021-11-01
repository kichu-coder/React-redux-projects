import React from 'react'

const Person = (props) => {

    const {img , role , name , id} = props.person;

    const children = props.children;

    return (
      <div className="person">
          <img src={`https://randomuser.me/api/portraits/thumb/men/${id}.jpg`}/>
          <div>
              <h4>{name}</h4>
              <h4>{role}</h4>
              {children}
          </div>
      </div>
    )
}

export default Person
