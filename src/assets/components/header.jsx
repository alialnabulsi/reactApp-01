export default function  Header() {
    return (
    <header className='header'>
        <img className='react-logo' src="src/assets/react.png" alt="React logo" />
        <nav>
            <ul className='nav-list'>
                <li className='nav-list-item'><a href="#">Pricing</a></li>
                <li className='nav-list-item'><a href="#">About</a></li>
                <li className='nav-list-item'><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}