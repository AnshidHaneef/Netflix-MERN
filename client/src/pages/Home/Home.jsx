import './home.scss'

import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { use } from '../../../../server/routes/lsits'

function  Home({type}) {


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