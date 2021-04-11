import React from 'react';
import './styles/App.css';

import Header from './components/Header';
import DropBox from './components/DropBox';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="gradation">
					<div className="dropBoxInApp">
						<DropBox />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
