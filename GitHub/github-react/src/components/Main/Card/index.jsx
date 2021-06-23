import React, { useState } from 'react';
import axios from 'axios';

import Item from './Item';
import './style.css';

export default function Card() {

    const [inputName, setInputName] = useState("");
    const [inputRepository, setInputRepository] = useState("");
    const [membersCards, setMembersCards] = useState([]);

    const [_userInfo, setUserInfo] = useState();
    const [_repoInfo, setRepoInfo] = useState();


    function writeInputName(e) {
        setInputName(e.target.value);
    }

    function writeInputRepository(e) {
        setInputRepository(e.target.value);
    }

    function getProfileInfo(url) {
        axios.get(url) .then( (res) => {
            const data = {
                avatar: res.data.avatar_url,
                name: res.data.name,
                bio: res.data.bio,
                location: res.data.location,
                followers: res.data.followers,
                following: res.data.following,
            }
            
            setUserInfo(data)
        }) .catch ( (error) => {console.log(error)} )
    }

    function getProfileRepositoryInfo(url) {
        axios.get(url) .then( (res) => {
            const listRepos = res.data;

            for (let eachRepo of listRepos) {
                let currentRepo = eachRepo.name.toLowerCase()
                let mainRepo = inputRepository.toLowerCase()

                if (currentRepo === mainRepo) {
                    const data = {
                        nameRepo: eachRepo.name,
                        createAtRepo: eachRepo.created_at,
                        urlRepo: eachRepo.html_url,
                    }
                    setRepoInfo(data)
                }
            }
        }) .catch ( (error) => {console.log(error)} )
    }

    function searchOwner() {

        if (!inputName || !inputRepository) {
            return alert("Preencha os campos necessários!")
        }
        console.log(inputName, inputRepository)

        const urlProfile = `https://api.github.com/users/${inputName}`
        const urlRepository = `https://api.github.com/users/${inputName}/repos`

        
          
        getProfileInfo(urlProfile)

        getProfileRepositoryInfo(urlRepository)
    
        
        if (!_userInfo || !_repoInfo) {
            return;
        } else {

            setMembersCards( (prevState) => {

                const newPrevState = prevState.filter( (eachPrev) => {
                    alert("Você não pode adicionar dois repositórios iguais!")
                    return eachPrev.repoName !== _repoInfo.nameRepo
                })
    
                if (newPrevState.length === prevState.length) {
                    return [...prevState, {
                        key: Math.random(), 
                        avatar: _userInfo.avatar, name: _userInfo.name, location: _userInfo.location, bio: _userInfo.bio, following: _userInfo.following, followers: _userInfo.followers, 
                        repoName: _repoInfo.nameRepo ,repoDate: _repoInfo.createAtRepo.slice(0, 10), repoUrl: _repoInfo.urlRepo,
                    }];
                } else {
                    return [...newPrevState, {
                        key: Math.random(), 
                        avatar: _userInfo.avatar, name: _userInfo.name, location: _userInfo.location, bio: _userInfo.bio, following: _userInfo.following, followers: _userInfo.followers, 
                        repoName: _repoInfo.nameRepo ,repoDate: _repoInfo.createAtRepo.slice(0, 10), repoUrl: _repoInfo.urlRepo,
        
                    }];
                }
            })
            
            setInputName("");
            setInputRepository("");
            setUserInfo();
            setRepoInfo();
        }
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