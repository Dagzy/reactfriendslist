import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import FriendForm from './FriendForm';

ReactDOM.render(
			<div className="row">
				<App>
					<Header /> 
					<FriendForm/>
				</App>
			</div>,
	document.getElementById('root')
);

registerServiceWorker();
