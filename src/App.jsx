import {Routes, Route, useLocation} from 'react-router-dom';
import {Header} from './components/index.js';
import {About} from './components/index.js';
import {Cart} from './components/index.js';
import {Catalog} from './components/index.js';
import {Contact} from './components/index.js';
import {Profile} from './components/index.js';
import {Footer} from './components/index.js';

function App() {
	const location = useLocation();
	const showFooter = ['/', '/About', '/Contact'].includes(location.pathname);

	return (
		<>
			<Routes>
				<Route path='/' element={<Header />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
			{showFooter && <Footer />}
		</>
	);
}

export default App;
