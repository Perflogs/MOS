import axios from 'axios';
import { useState } from 'react';
import {Link,Route} from 'react-router-dom';
import './navbar.css';

export function NavBar()
{
    return (
        <div>
        <div className="Title">Book Store VIT</div>
            <div className='flex-container'>
                <div><Link to="/home">Home</Link></div>
                <div><Link to="/login">Login</Link></div>
                <div><Link to="/catalogue">Catalogue</Link></div>
                <div><Link to="/registration">Registration</Link></div>
            </div>

        </div>
    )
}