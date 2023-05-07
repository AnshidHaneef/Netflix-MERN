import {  ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import './list.scss'
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react'

export default function List() {
const [slideNumber,setSlideNumber] = useState(0)
const listRef = useRef()

const handleClick= (direction )=>{
  let distance = listRef.current.getBoundingClientRect().x - 50
  if(direction === 'left' && slideNumber > 0){
    listRef.current.style.transform = `translateX( ${230+ distance }px)`
    setSlideNumber(slideNumber - 1)
  }
  if(direction === 'right' && slideNumber <5 ){
    listRef.current.style.transform = `translateX( ${-230+ distance }px)`
    setSlideNumber(slideNumber + 1)

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
