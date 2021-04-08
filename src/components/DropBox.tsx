import React from 'react';

import '../styles/DropBox.css';

class DropBox extends React.Component {
	render() {
		return (
			<div className="DropBoxDiv">
				<p className="placeholder">파일을 여기에 끌어다 놓으세요.</p>
			</div>
		)
	}
}

export default DropBox;