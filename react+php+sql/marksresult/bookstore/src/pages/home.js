import { useState } from "react";
import axios  from "axios";
import {Link,Route} from "react-router-dom";
import './home.css';

export function Home()
{
    return (
        <div className="Home">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
            <h1>Welcome to the Home Page of the VIT Book Store</h1>
            <p>We as a book store look to include informative books for the Students</p>
            <img src="https://www.vit.edu/media/k2/items/src/878af4972e07916863ae909a162bf74b.jpg" alt="VIT Pune"></img>
        </div>
    )
}