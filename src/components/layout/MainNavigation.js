//REACT imports
import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/page1'>Page 1</Link>
                    </li>
                    <li>
                        <Link to='/page2'>Page 2</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;