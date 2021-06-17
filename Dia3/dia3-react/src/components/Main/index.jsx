import React, { useState } from 'react'

import './style.css'

import Member from './Member';


export default function Main() {

    const members = [{name:"Guilherme", age: 19, club: "Fluminense", lastName:"Fialho"},
                    {name:"João Matheus", age: 19, club: "Flamengo", lastName:"Ramos"},
                    {name:"Júlya", age: 19, club: "Flamengo", lastName:"Matias"},
                    {name:"Thiago", age: 19, club: "Flamengo", lastName:"Paixão"}]
        
    const itemsRendered = members.map( (eachMember) => {
        return <Member name={eachMember.name} age={eachMember.age} club={eachMember.club} lastName={eachMember.lastName} />
    })
  
    return (

        <div className="main">
            <div className="card">
                {itemsRendered}
            </div>
        </div>
    );
}