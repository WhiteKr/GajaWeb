import React from 'react';

import '../styles/DropBox.css';

class DropBox extends React.Component {
	state = {
		hover: false
	}

	async onFile(e: any) {
		let Keys = Object.keys(e.target.files);
		const fd = new FormData();
		let filelist: any[] = [];
		Keys.forEach(key => {
			filelist.push(e.target.files[key]);
		});
		this.uploadFile(filelist);
	}

	async uploadFile(files: any) {
		const fd = new FormData();
		files.forEach((file: any, idx: any) => {
			fd.append("myFile", file);
		});
	}

	// Close() {
	// 	this.props.parent.setState({
	// 		showFileUploader: false
	// 	});
	// }

	FileDrop = (e: any) => {
		this.setState({
			hover: false
		})
		e.stopPropagation();
		e.preventDefault();
		let filelist = [];
		if (e.dataTransfer.items) {
			for (let i = 0; i < e.dataTransfer.items.length; i++) {
				let data = e.dataTransfer.items[i];
				if (data.kind != 'file') {
					return;
				}
				filelist.push(e.dataTransfer.items[i].getAsFile());
			}
			this.uploadFile(filelist);
		} else {

		}
	}

	FileDrag = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		if (this.state.hover) return;
		this.setState({
			hover: true
		});
		this.state.hover = true;
		// document.getElementById("FileUploader").classList.add("hover");
	}

	FileDragLeave = (e: any) => {
		e.stopPropagation();
		this.setState({
			hover: false
		});
		// document.getElementById("FileUploader").classList.remove("hover");
	}

	render() {
		return (
			<div className="DropBoxDiv" onDrop={this.FileDrop} onDragOver={this.FileDrag} onDragLeave={this.FileDragLeave}>
				<p className="placeholder">파일을 여기에 끌어다 놔주세용 :D</p>
			</div>
		)
	}
}


export default DropBox;