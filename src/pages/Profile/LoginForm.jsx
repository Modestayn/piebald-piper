import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Profile.css';

export function LoginForm() {
	const [isFlipped, setIsFlipped] = useState(false);
	const navigate = useNavigate();

	const goToRegister = () => {
		setIsFlipped(true);
		setTimeout(() => {
			navigate('/register');
		}, 325);
	};

	const goToHomePage = () => {
		navigate('/');
	};

	return (
		<div className='page-container'>
			<button className='home-button' onClick={goToHomePage}>
				Home page
			</button>
			<div className={`card ${isFlipped ? 'show-register' : ''}`}>
				<div className='card-inner'>
					<div className='card-front'>
						<h2>Login</h2>
						<form>
							<input type='text' placeholder='Your email' required />
							<input type='password' placeholder='Password' required />
							<button type='submit'>Login</button>
						</form>
						<button className='toggle-button' onClick={goToRegister}>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
