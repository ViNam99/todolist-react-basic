import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
         super(props);
        this.state = {
            taskName : '',
            status : false
        }
    }
    _onCloseForm = () => {
        this.props.onCloseFormApp(true)
    }

    _onHandeChangeInput = (e) => {
        let target = e.target;
        let name = target.name
        let value = target.value
        if(name === 'status'){
            value =  target.value === 'true' ? true : false
        }
        this.setState({
            [name] : value
        })
    }

    _onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTaskApp(this.state)
    }
    render() {
        const {taskName , status} = this.state
        return (
            <div className="TaskForm">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                        Thêm công việc
                            <span className="fas fa-times-circle" onClick = {this._onCloseForm}></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit = {this._onHandleSubmit}>
                            <div className="form-group">
                                <label >Tên công việc:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value = {taskName}
                                    onChange = {this._onHandeChangeInput}
                                    name = 'taskName'
                                     />
                            </div>

                            <label>Trạng thái:</label>
                            <select
                                className="form-control"
                                name= 'status'
                                value = {status}
                                onChange = {this._onHandeChangeInput}
                               >
                                <option value = {true} >Kích hoạt</option>
                                <option value = {false}>Ẩn</option>
                            </select>
                            <br />
                            <br />
                            <button type="submit" className="btn btn-danger" >
                                <span className="fas fa-download">&nbsp;  Lưu lại</span>
                            </button> &nbsp;
                            <button type="button" className="btn btn-primary" 
                            >
                                <span className="fas fa-times"> &nbsp;Hủy bỏ</span>
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;