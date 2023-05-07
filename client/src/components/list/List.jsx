import {  ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import './list.scss'
import ListItem from '../listItem/ListItem'
import { useRef } from 'react'

export default function List() {

const listRef = useRef()

const handleClick= (direction )=>{
  if(direction === 'left'){
    listRef.current.style.transform = `translateX(230px)`
  }
}

  return (
    <div className='list'>
      <span className="listTitle">Trending Now</span>
      
        <div className="wrapper">
        <ArrowBackIosOutlined className='arrowIcon left' onClick={ ()=>handleClick('left') } />
        <div className="container" ref={listRef}  >
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/> 
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        </div>
        <ArrowForwardIosOutlined className='arrowIcon right' onClick={ ()=>handleClick('right') }/>
        </div>
   
   
    </div>
  )
}
