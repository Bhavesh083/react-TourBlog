import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


function Navbar() {

const [menu, setMenu] = useState(false);    

const showMenu = () =>{
    setMenu(!menu);
}

return (
    <>
    <nav className='navbar'>
        <div className='nav-title'>
            <Link className='title' to='/'>Tour spots</Link>
        </div>
        <div className='menu' onClick={()=>showMenu()}>
            <button>{menu ? 'x' : '='}</button>
        </div>
        <ul className={menu ? 'menu-on':'menu-off'}>
            <li className='list' onClick={()=>showMenu()}>
                <Link className='links' to='/'>Home</Link>
            </li>
            <li className='list' onClick={()=>showMenu()}>
                <Link className='links' to='/Sceneries'>Sceneries</Link>
            </li>
            <li className='list' onClick={()=>showMenu()}> 
                <Link to='/Signup'><button>SIGN UP</button></Link>
            </li>
        </ul>
    </nav>    
    </>
)
}

export default Navbar;
