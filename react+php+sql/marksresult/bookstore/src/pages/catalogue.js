import { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import './catalogue.css';

export function Catalogue()
{
    return (
        <div className="Catalogue">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
            <h1>This is the Catalogue Page</h1>
            <p>Here is the list of books available</p>
            <div className="container">
                <label for="book1" name="Mein Kamphf">Adolf Hitler</label>
                
                <label for="book2" name="Stalin">Stalin</label>
                <label for="book3" name="Matilda">Roald Dahl</label>
            </div>
        </div>
    )
}