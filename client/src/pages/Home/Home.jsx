import './home.scss'

import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { use } from '../../../../server/routes/lsits'

function  Home({type}) {

  const[List,setList] = useState([])
  
useEffect(()=>{
  const getRandomList = async () =>{
    try {
     const res = await axios.get(
      `lists${ type ? "?type" + type : "" } ${genre ? "&genre=" + genre: "" } `
      )
    } catch (error) {
      console.log(error);
    }
  }  
})

  return (
    <div className='home'>
      
      <Navbar/>
      <Featured type ={type}/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>

    </div>
  )
}

export default Home