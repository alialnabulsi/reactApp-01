import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
import './main.css';

import Header from './assets/components/header.jsx';
import MainContent from './assets/components/mainContent.jsx';
import Footer from './assets/components/footer.jsx';
function Page() {
    return (
        <main className='page'>
            <Header />
            <MainContent />
            <Footer />
        </main>
    );
}

root.render(
    <Page />
)