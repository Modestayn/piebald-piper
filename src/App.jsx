import {Routes, Route, useLocation} from 'react-router-dom';
import {Header, About, Cart, Catalog, Contact, Profile, Footer} from './components';

function App() {
	const location = useLocation();
	const showFooter = ['/', '/About', '/Contact'].includes(location.pathname);
	const routes = [
		{path: '/', element: <Header />},
		{path: '/about', element: <About />},
		{path: '/contact', element: <Contact />},
		{path: '/catalog', element: <Catalog />},
		{path: '/profile', element: <Profile />},
		{path: '/cart', element: <Cart />},
	];
	return (
		<>
			<Routes>
				{routes.map((route) => {
					return <Route key={route.path} path={route.path} element={route.element} />;
				})}
			</Routes>
			{showFooter && <Footer />}
		</>
	);
}

export default App;
