import React, { useState } from 'react';
import axios from 'axios';

import Item from './Item';
import './style.css';

export default function Card() {

    const [inputName, setInputName] = useState("");
    const [inputRepository, setInputRepository] = useState("");

    const [membersCards, setMembersCards] = useState([]);

    const [userInfo, setUserInfo] = useState();
    const [repoInfo, setRepoInfo] = useState();


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

        const dataProfile = {
            avatar: responseProfile.data.avatar_url,
            name: responseProfile.data.name,
            bio: responseProfile.data.bio,
            location: responseProfile.data.location,
            followers: responseProfile.data.followers,
            following: responseProfile.data.following,
        }
        
        // const updateState = (dataProfile) => {
        //     setUserInfo(dataProfile)
        // }
        setUserInfo(dataProfile)
        //         Ou
        // setUserInfo( () => {return dataProfile})
        

        // Response of Axios Get Method (repository)
        
        const responseRepository = await axios.get(urlRepository)

        const listRepos = responseRepository.data;

        for (let eachRepo of listRepos) {
            let currentRepo = eachRepo.name.toLowerCase()
            let mainRepo = inputRepository.toLowerCase()

            if (currentRepo === mainRepo) {
                
                const repositoryData = {
                    nameRepo: eachRepo.name,
                    createAtRepo: eachRepo.created_at,
                    urlRepo: eachRepo.html_url,
                }
                setRepoInfo(repositoryData)
            }
        }
        
        
        // Structure to add one more object member to list of members
        const newMemberData = {
            key: Math.random(), 
            avatar: userInfo.avatar, name: userInfo.name, location: userInfo.location, bio: userInfo.bio, following: userInfo.following, followers: userInfo.followers, 
            repoName: repoInfo.nameRepo ,repoDate: repoInfo.createAtRepo.slice(0, 10)
            , repoUrl: repoInfo.urlRepo,
        }

        // Add one more object to list of members
        setMembersCards( (prevState) => {
            return [...prevState, newMemberData]
        })

        // Setting placeholder again
        setInputName("");
        setInputRepository("");

        // setUserInfo( () => {
        //     return null;
        // });
        // setRepoInfo( () => {
        //     return null;
        // });
        

    }

    function renderProfiles() {
        return membersCards.map( (currentProfile) => {
            return <Item name={currentProfile.name} avatar={currentProfile.avatar} location={currentProfile.location} bio={currentProfile.bio} following={currentProfile.following} followers={currentProfile.followers}
            repoName={currentProfile.repoName} repoDate={currentProfile.repoDate} repoUrl={currentProfile.repoUrl} />
        })
    }

    return (
        <div className="main">
            <div className="card">
                <div className="card-titulo">
                    <h1>Git Repositorios</h1>
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