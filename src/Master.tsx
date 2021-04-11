import React from 'react';
import './styles/Master.css';

import Header from './components/Header';
import DropBox from './components/DropBox';
import FileExplorer from './components/FileExplorer';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				{/* <Header /> */}
				<FileExplorer />
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
