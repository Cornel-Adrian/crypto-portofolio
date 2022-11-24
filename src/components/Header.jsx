import Logo from '../styles/logo.png';
import { BsSun } from "react-icons/bs"
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header'>
            <div className="logo"><Link to='/'><img id='logo' alt='logo' src={Logo} width='90px' height='50px' /></Link></div>
            <div className="options">
                <div className="search">
                    <input id='search' placeholder='Search'></input>
                </div>
                <div className='currency'>
                    <span>USD</span>
                    <div className='dropdownlist'></div>
                </div>
                <div className="theme">
                    <BsSun></BsSun>
                </div>
                
            </div>
        </div>
    )
}

export default Header