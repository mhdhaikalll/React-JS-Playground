import { React } from "react";
import "./Header.css";
export const Header = () => {
    return(
        <nav>
            <h1>Title</h1>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    )
}