import React from 'react';
import ReactDOM from 'react-dom';
import mongoose from 'mongoose';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root')

);

registerServiceWorker();
