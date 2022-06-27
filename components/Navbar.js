import navstyle from '../styles/Navbar.module.css';
export default function Navbar() {
    return (
        <div className={navstyle.navbar}>
       
            <div className="navbar-logo">
            <div>Guppy</div>
            </div>
            <div className={navstyle.navbarmenu}>
            <div className={navstyle.navbarmenuitem}>
                <a href="#">Home</a>
            </div>
            <div className={navstyle.navbarmenuitem}>
                <a href="#">About</a>
            </div>
            <div className={navstyle.navbarmenuitem}>
                <a href="#">Contact</a>
            </div>
            </div>
        
        </div>
    );
}