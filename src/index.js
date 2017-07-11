import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';

ReactDOM.render(
			<div className="row">
				<App>
					<Header /> 
				</App>
			</div>,
	document.getElementById('root')
);

registerServiceWorker();
