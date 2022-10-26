import React, {useState, useEffect} from 'react'
import './portfolio.css'
import {BsGithub} from 'react-icons/bs'
import axios from '../../axios'


const Portfolio = () => {

  const [query, setQuery] = useState("");
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [githubBio, setGitHubBio] = useState();
  const [githubLocation, setGitHubLocation] = useState();
  const [githubRepos, setGithubRepos] = useState();
  const [repoData, setRepoData] = useState([]);

  
  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    
  } 
  
  useEffect(() => {
    repos()
  }, [])

  const repos = async () => {
    const response = await fetch('https://api.github.com/users/Alcides-hub/starred');
    setRepoData(await response.json())
    console.log(response)
  }


  
  useEffect(() => {
  fetch("https://api.github.com/users/Alcides-hub")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.name);
          setGitHubBio(result.bio);
          setGitHubLocation(result.location);
          setGithubRepos(result.public_repos);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);


    

  return (
    <section id="portfolio">
    <div className="container portfolio__container">
      <div className="banner">
      <BsGithub className="github-icon"/>
      <h2>Search My Portfolio in Github</h2>
      </div>
            <section className="intro">
              <div className="user-info">
                <figure>
                <img alt="user avatar" src={avatarURL} />
                </figure>
                <div>
                  <p><strong>Name:</strong> {githubUsername}</p>
                  <p><strong>Bio:</strong> {githubBio}</p>
                  <p><strong>Location:</strong> {githubLocation}</p> 
                  <p><strong>Number of public repos:</strong> {githubRepos}</p>
                </div>
              </div>
            </section>
            <section class="repos">
            <input 
              type="text"
              id="repoName"
              name="repository"
              className="filter-repos" 
              placeholder="Search repo"
              value={query}
              onChange={handleQueryInput} />
              <ul class="repo-list" >
                {repoData
                .filter(
                  (data) =>
                    data.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((data) => {
                  return(
                    <li className="repo" key={data.id} >
                    <a target="_blank" href={data.svn_url}><h5>{data.name}</h5>
                    </a>
                    </li>
                  )
                  })}
                  </ul>
                  <div>  
                </div>
            </section>
    </div>
    </section>
  )
}


export default Portfolio
