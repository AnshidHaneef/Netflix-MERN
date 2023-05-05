import './home.scss'

import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import RowPost from '../../components/rowPost/RowPost'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type ="movies"/>
      <RowPost/>
    </div>
  )
}

export default Home