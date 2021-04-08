import React from 'react';
import './styles/App.css';

import Header from './components/Header';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />

				<div className="gradation">
				</div>
			</div>
		)
	}
}

export default App;
