// src/App.jsx
import { use } from 'react';
import './App.css'
import { useState } from 'react';
const App = () => {

const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
const [totalStrength,setTotalStrength] = useState(0);
const [totalAgility,setTotalAgility] = useState(0);
const [zombieFighters, setFighters] = useState(
  [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://loremflickr.com/320/240/dog',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://loremflickr.com/320/240?random=14343443',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://loremflickr.com/320/240?random=277',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://loremflickr.com/320/240?random=34343',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://loremflickr.com/320/240?random=4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://loremflickr.com/320/240?random=5',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://loremflickr.com/320/240?random=6',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://loremflickr.com/320/240?random=7',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://loremflickr.com/320/240?random=8',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://loremflickr.com/320/240?random=4324 ',
    },
  ])


const handleAddFighter = (fighter) => {


if (money>=fighter.price){
let newMoney = money - fighter.price;
setMoney(newMoney)
setTotalAgility(totalAgility+fighter.agility)
setTotalStrength(totalStrength+fighter.strength)
setTeam([...team, fighter])
} else {
console.log('you dont have enough money');

}
}
const handleRemoveFighter = (fighter) => {
let newTeam = [...team];
newTeam= team.filter(member=>


member.name!=fighter.name

)

  setTeam(newTeam)
setMoney(money+fighter.price)
setTotalAgility(totalAgility-fighter.agility)
setTotalStrength(totalStrength-fighter.strength)





}



  return (
    
 <>





<h1>Money: {money}</h1>
<h2>Team Strength: {totalStrength}</h2>
<h2>Team Agility: {totalAgility}</h2>
<h2>Team</h2>

{team.length===0? "Pick some team members!" : 

team.map((member) => (

<div>
  <img src={member.img}></img>
<li>{member.name}</li>
<li>PRICE: ${member.price}</li>
<li>STRENGTH: {member.strength}</li>
<li>AGILITY: {member.agility}</li>
<button onClick={()=>handleRemoveFighter(member)}>Remove</button>
  </div>



))


}

<hr/>

   <ul>
{
  zombieFighters.map(fighter => (
    

<ul>
<img src={fighter.img}></img>
<li>{fighter.name}</li>
<li>PRICE: ${fighter.price}</li>
<li>STRENGTH: {fighter.strength}</li>
<li>AGILITY: {fighter.agility}</li>
<button onClick={()=> handleAddFighter(fighter)}>Add</button>
  </ul>


  ))
}
 </ul>
 
 </>
 
  );
}

export default App