import React,{useState} from 'react'
import Home from '../pages/Home'
import TopNavbar from '../Navbar/TopNavbar'
import SideNavbar from '../Navbar/SideNavbar'
import BottomNavbar from '../Navbar/BottomNavbar'

const Fixedcomp:React.FC = () => {
    const [sidenav,setSidenav] = useState(true)
  const [text,setText] = useState('close')
  function handleclose(){
    setSidenav(!sidenav);
    setText(sidenav ? 'close' :   'open');
}
  return (
    <div>
        {/* <Home/> */}
        <SideNavbar sidenav={sidenav} text={text} handleclose={handleclose} />
        <TopNavbar sidenav={sidenav}/>
        <BottomNavbar sidenav={sidenav}/>
    </div>
  )
}

export default Fixedcomp