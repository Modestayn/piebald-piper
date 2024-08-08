import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Profile.css';

export function RegisterForm() {
	const [isFlipped, setIsFlipped] = useState(true);
	const navigate = useNavigate();

	const goToLogin = () => {
		setIsFlipped(false);
		setTimeout(() => {
			navigate('/login');
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
					<div className='card-back'>
						<h2>Register</h2>
						<form>
							<input type='text' placeholder='Your email' required />
							<input type='password' placeholder='Password' required />
							<input type='password' placeholder='Confirm your password' required />
							<button type='submit'>Register</button>
						</form>
						<button className='toggle-button' onClick={goToLogin}>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
