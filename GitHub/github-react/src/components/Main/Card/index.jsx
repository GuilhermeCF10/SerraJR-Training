import React, { useState } from 'react';
import axios from 'axios';

import Item from './Item';
import './style.css';

export default function Card() {

    const [inputName, setInputName] = useState("");
    const [inputRepository, setInputRepository] = useState("");

    const [membersCards, setMembersCards] = useState([]);

    function writeInputName(e) {
        setInputName(e.target.value);
    }

    function writeInputRepository(e) {
        setInputRepository(e.target.value);
    }

    async function searchOwner() {

        // Check if inputs are done
        if (!inputName || !inputRepository) {
            return alert("Preencha os campos necessários!")
        }
        
        // Url of Github API
        const urlProfile = `https://api.github.com/users/${inputName}`
        const urlRepository = `https://api.github.com/users/${inputName}/repos`

        
        // Response of Axios Get Method (profile)
        const responseProfile = await axios.get(urlProfile)

        // Response of Axios Get Method (repository)
        const responseRepository = await axios.get(urlRepository)

        // Store the object of responseRepository in a list
        const listRepos = responseRepository.data;

        // Go to list of Repos to get the main Repo (inputRepo)
        const item = listRepos.filter ( (eachRepo) => {
            return eachRepo.name.toLowerCase() === inputRepository.toLowerCase()
        })

        // Structure to add one more object member to list of members
        const newMemberData = {
            id: item[0].id,
            avatar: responseProfile.data.avatar_url, name: responseProfile.data.name, bio: responseProfile.data.bio,
            location: responseProfile.data.location, followers: responseProfile.data.followers, following: responseProfile.data.following,
            repoName: item[0].name, repoDate: item[0].created_at.slice(0, 10), repoUrl: item[0].html_url,
        }

        // Add one more object to list of members
        setMembersCards( (prevState) => {
            return [...prevState, newMemberData]
        })
               

        // Setting placeholder again
        setInputName("");
        setInputRepository("");
    }

    function renderProfiles() {
        return membersCards.map( (currentProfile) => {
            return <Item id={currentProfile.id} name={currentProfile.name} avatar={currentProfile.avatar} location={currentProfile.location} bio={currentProfile.bio} following={currentProfile.following} followers={currentProfile.followers}
            repoName={currentProfile.repoName} repoDate={currentProfile.repoDate} repoUrl={currentProfile.repoUrl} />
        })
    }

    return (
        <div className="main">
            <div className="card">

                <div className="card-titulo">
                    <h1>Git Repositórios</h1>
                </div>
                <div className="card-inputs">
                    <input placeholder="Nome de usuário" type="text" value={inputName} onChange={writeInputName} required/>
                </div>
                <div className="card-inputs">
                    <input placeholder="Nome do repositório" type="text" value={inputRepository} onChange={writeInputRepository} required/>
                </div>
                <div className="card-button">
                    <button onClick={searchOwner}>Adicionar</button>
                </div>

            </div>

            <div className="boxes">
                <ul>
                    {renderProfiles()}
                </ul>
            </div>
        </div>
        
    );
}