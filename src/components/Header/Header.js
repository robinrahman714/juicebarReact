import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const search = <FontAwesomeIcon icon={faSearch} />
    return (
        <div className="bg-white shadow-md h-20 px-16 flex justify-between items-center">    
            <div>
                <nav>
                    <ul className="flex items-center gap-12">
                        <li>
                            <NavLink to="/home" className="font-semibold" activeClassName="text-yellow-400 font-bold" >HOME </NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold" activeClassName="text-yellow-400 font-bold" to="drinks">TUTORIAL </NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold" activeClassName="text-yellow-400 font-bold" to="featured">FEATURED </NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold" activeClassName="text-yellow-400 font-bold" to="Reviews">REVIEWS </NavLink>
                        </li>
                        <li>
                            <NavLink className="font-semibold" activeClassName="text-yellow-400 font-bold" to="/contact">CONTACT </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
            <ul className="flex items-center gap-5">
            <li className="text-xl hover:text-yellow-400">
                <NavLink to="/drinks"> {search} Search  </NavLink>
            </li> 
            </ul>
            </div>           
        </div>
    )
}

export default Header;