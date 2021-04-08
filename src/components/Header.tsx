import React from 'react';

import '../styles/Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="headerDiv">
				<h1 className="headerTitle">GAJA</h1>
				<p>제출할 파일을 아래의 박스에 드래그&드롭 해주세요! :D</p>
			</div>
		)
	}
}

export default Header;