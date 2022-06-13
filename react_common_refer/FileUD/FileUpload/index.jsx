import React, { Component } from 'react'
import Axios from 'axios'

export default class FileUpload extends Component {

    uploadFile = ()=>{
        let file1 = document.querySelector('#input').files[0]
        let formdata = new FormData()
        formdata.append("file", file1)
        Axios({
            url:'http://127.0.0.1:8001/datashow/file/',
            method: 'post',
            headers:{'Content-Type':'multipart/form-data'},
            data:formdata
        }).then(
            request =>{
                console.log(request.data)
            },
            error =>{
                console.log(error.data)
            }
        )
    }

    render() {
        return (
            <div>
                 <input type="file" id="input" ></input>
                 <button onClick={this.uploadFile}>上传</button>
            </div>
        )
    }
}
