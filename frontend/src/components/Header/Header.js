import React from 'react'; 
import classes from './Header.module.css';
import { Link } from 'react-router-dom'

export default function Header() {
    
    // Need to implement login functionality
    let user = {
        name : "John"
    }

    let cart = {
        totalCount : 10
    }
    // Need to implement logout functionality
    const logout = () => {} 

    return ( 
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to='/' className={classes.logo}>
                    Food Mine!
                </Link>
                <nav>
                    <ul>
                        {  // The below menu will be shown when user is available
                            user?(
                            <li className={classes.menu_container}>
                                <Link to="/profile">{user.name}</Link>
                                <div className={classes.menu}>
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/orders">Orders</Link>
                                    <a onClick={logout}>Logout</a>

                                </div>
                            </li>) : (
                                <Link to="/login">Login</Link>
                            )
                        }
                    
                        <li> 
                            <Link to="/cart">Cart
                            {cart.totalCount > 0 && <span className={classes.cart_counter}>{cart.totalCount}</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
