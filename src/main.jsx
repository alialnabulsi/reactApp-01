import {createRoot} from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
import './main.css';

function TempComponent(){
    return (
        <main>
        <img className='react-logo' src="src/assets/react.png" alt="React logo" />
        <h1>Why I want to learn React!</h1>
        <ul>
            <li>To get advanced in front-end dev</li>
            <li>To start my own business in web dev</li>
        </ul>
    </main>
    );
}
root.render(
  <TempComponent />
)