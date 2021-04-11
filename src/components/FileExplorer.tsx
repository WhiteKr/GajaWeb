import React from 'react';
import * as Config from '../config.json';

interface ExplorerState {
    FileList: Array<DataInfo>
}

interface DataInfo {
    name: string,
    path: string,
    isFile: boolean,
    size: number,
    c_time: Date,
    m_time: Date
}

class FileExplorer extends React.Component <any, ExplorerState> {


    constructor(props: any) {
        super(props);
        this.state = {
            FileList: []
        }
    }

    componentDidMount() {
        this.GetFileList();
    }

    async GetFileList(path: string = "/") {
        let ServerResponse = await fetch(`http://${Config.endpoint}/index`, {
            method: "POST",
            body: JSON.stringify({path}),
            headers: {
                'content-type': 'application/json'
            }
        });
        console.log("Get")

        let result: {err?: NodeJS.ErrnoException, result: Array<DataInfo>} = await ServerResponse.json();

        if (result.err)
            console.log(result.err);
        else
            this.setState({
                FileList: result.result
            }, () => {
                console.log(this.state.FileList)
            });
    }


    render() {
        return (
            <div>
                {this.state.FileList&&
                this.state.FileList.map((v, idx) => {
                    return(<div key={idx} onClick={() => {window.open(`http://${Config.endpoint}/download?path=${v.path}`)}}>{v.name}</div>);
                })}
            </div>
        )
    }

}

export default FileExplorer;