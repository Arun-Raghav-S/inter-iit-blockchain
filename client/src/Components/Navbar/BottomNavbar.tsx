import React from 'react'
import '../style/navbar.css';
import { Link} from 'react-router-dom';
import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { FaFastBackward } from "react-icons/fa";
import { FaForwardFast } from "react-icons/fa6";

type Props = {
  sidenav: Boolean;
};

const BottomNavbar : React.FC<Props>= ({sidenav}) => {
  return (
    <div className={ ` ${ sidenav ? 'bottom-navbar':' bottom-navbar-add' }`}>

            <div className='Song-artist'>
                Song name 
                <br />
                Artist name - Artist 1
            </div>

            <div className='icons'>
                <FaFastBackward className='pause-button'/>
                <MdOutlinePauseCircleFilled className='pause-button'/>
                <FaForwardFast className='pause-button'/>
            </div>
        
    </div>
  )
}

export default BottomNavbar