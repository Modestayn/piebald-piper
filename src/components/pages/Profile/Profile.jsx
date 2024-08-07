import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Profile.css';

export function Profile() {
	const [showRegister, setShowRegister] = useState(false);
	const navigate = useNavigate();

	const toggleCard = () => {
		setShowRegister(!showRegister);
	};

	const goToHomePage = () => {
		navigate('/');
	};

	return (
		<div className='page-container'>
			<button className='home-button' onClick={goToHomePage}>
				Home page
			</button>
			<div className={`card ${showRegister ? 'show-register' : ''}`}>
				<div className='card-inner'>
					{/* Передняя сторона карточки (форма входа) */}
					<div className='card-front'>
						<h2>Login</h2>
						<form>
							<input type='text' placeholder='Your email' required />
							<input type='password' placeholder='Password' required />
							<button type='submit'>Login</button>
						</form>
						<button className='toggle-button' onClick={toggleCard}>
							Register
						</button>
					</div>
					{/* Задняя сторона карточки (форма регистрации) */}
					<div className='card-back'>
						<h2>Register</h2>
						<form>
							<input type='text' placeholder='Your email' required />
							<input type='password' placeholder='Password' required />
							<input type='password' placeholder='Confirm your password' required />
							<button type='submit'>Register</button>
						</form>
						<button className='toggle-button' onClick={toggleCard}>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
