import { useState, useEffect } from 'react'
import reactLogo from './Images/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jose_Altuve from './Images/JOSE_ALTUVE.png'
import logo from './Images/logo_medium.png'
import pinfo from './data/pinfo.json'

function Quicklinks() {
  return (
    <div className="quicklinks">
      <a href="#home">Home</a>
      <a href="#players">Players</a>
      <a href="#team">Team</a>
      <a href="contact">Contact</a>
    </div>
  )
}

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="header-tittle">
            <img src={logo} />
            Player Profiles
          </div>
          <Quicklinks />
        </div>
      </header>
    </>
  )
}

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <Quicklinks />
          <p>Last Updated 4/23/2023 11:43:00 PM</p>
          <p>© 2023 Player Profiles. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}


function Stats({data}) {
  return (
    <>
      <div className="stats"> 
          <table>
            <tr>
              <th>YR</th>
              <th>LEA</th>
              <th>Team</th>
              <th>SAL(K)</th>
              <th>G</th>
              <th>AB</th>
              <th>R</th>
              <th>H</th>
              <th>2B</th>
              <th>3B</th>
              <th>HR</th>
              <th>RBI</th>
              <th>SB</th>
              <th>CS</th>
              <th>BB</th>
              <th>SO</th>
              <th>OBP</th>
              <th>SLG</th>
              <th>ABG</th>
            </tr>
            <tr>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr>
          </table>
        </div>
    </>
  )
}

function PlayerInfo({data}) {
  return (
    <>
      <div className="player-info">
            <h1>JOSE Carlos ALTUVE</h1>
        <div className="general">
          <div className="thumbnail">
            <img src={Jose_Altuve} />
          </div>
          <div className="summary">
            <h4>Nickname:</h4>
            <p>{data.name}</p>
            <h4>Home:</h4>
            <p>{data.home}</p>
            <h4>Height:</h4>
            <p>{data.height}</p>
            <h4>Weight:</h4>
            <p>{data.weight}</p>
            <h4>DOB:</h4>
            <p>{data.DOB}</p>
            <h4>Uniform:</h4>
            <p>{data.uniform}</p>
            <h4>Birth City:</h4>
            <p>{data.birthCity}</p>
            <h4>Draft:</h4>
            <p>{data.draft}</p>
            <h4>Postion:</h4>
            <p>{data.position}</p>
            <h4>Team:</h4>
            <p>{data.team}</p>
            <h4>Bats:</h4>
            <p>{data.bats}</p>
            <h4>Throws:</h4>
            <p>{data.throws}</p>
            <h4>Agent:</h4>
            <p>{data.agent}</p>
          </div>
        </div>
        <Stats data={data}/>
      </div>
    </>
  )
}

// data.bio.map((bioItem)=>{return <Section title={bioItem.title} body={bioItem.body}/>})


function Container() {
  const [data, setData] = useState({})
  useEffect(()=>{
    setData(pinfo);
  }, [])
  return (
    <>
      <div className="container">
        <PlayerInfo data={data}/>
        {data.bio && data.bio.map((bioItem)=>{
          return (
            <PlayerBio 
              title={bioItem.title} 
              body={bioItem.body}
            />
          )
        })}
      </div>
    </>
  )
}

function PlayerBio({title, body}) {
  return (
    <div className="playerBio">
      {title}
      {body}
    </div>
  )
}


function App() {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  )
}

export default App
