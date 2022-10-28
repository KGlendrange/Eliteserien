import logo from "../assets/logo_eliteserien.avif";
import "./Header.css";

export function Header() {
    return (
       <header className="header_container">
        <a href="https://eliteserien.no" target="_blank">
            <img className="logo_eliteserien" src={logo} alt="logo"/>
        </a>
         <nav>
            <ul>
                <li><a href="https://eliteserien.no" target="_blank">Eliteserien</a></li>
                <li><a href="https://www.linkedin.com/in/kglendrange/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/KGlendrange" target="_blank">Github</a></li>
            </ul>
        </nav>
       </header>
    )
}