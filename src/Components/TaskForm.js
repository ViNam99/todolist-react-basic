import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            taskName: '',
            status: false
        }
    }
    _onCloseForm = () => {
        this.props.onCloseFormApp(true)
    }

    _onHandeChangeInput = (e) => {
        let target = e.target;
        let name = target.name
        let value = target.value
        if (name === 'status') {
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name]: value
        })
    }

    _onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTaskApp(this.state);

        //Sau khi thêm sẽ hủy bỏ cái trường đã nhập
        this._onClear()
    }

    _onClear = () => {
        this.setState({
            taskName: '',
            status: false
        })
    }
    componentDidMount() {
        const { tasksEditing } = this.props;
        if (tasksEditing) {
            this.setState({
                id: tasksEditing.id,
                taskName: tasksEditing.taskName,
                status: tasksEditing.status
            })
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {

        if (nextProps && nextProps.tasksEditing) {
            this.setState({
                id: nextProps.tasksEditing.id,
                taskName: nextProps.tasksEditing.taskName,
                status: nextProps.tasksEditing.status
            })
        } else if (!nextProps.tasksEditing) {
            this.setState({
                id: '',
                taskName: '',
                status: false
            })
        }


    }
    render() {
        const { taskName, status, id } = this.state
        return (
            <div className="TaskForm">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {id === '' ? 'Thêm công việc' : 'Sửa công việc'}
                            <span className="fas fa-times-circle" onClick={this._onCloseForm}></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this._onHandleSubmit}>
                            <div className="form-group">
                                <label >Tên công việc:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={taskName}
                                    onChange={this._onHandeChangeInput}
                                    name='taskName'
                                />
                            </div>

                            <label>Trạng thái:</label>
                            <select
                                className="form-control"
                                name='status'
                                value={status}
                                onChange={this._onHandeChangeInput}
                            >
                                <option value={true} >Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <br />
                            <button type="submit" className="btn btn-danger" >
                                <span className="fas fa-download">&nbsp;  Lưu lại</span>
                            </button> &nbsp;
                            <button type="button" className="btn btn-primary" onClick={this._onClear}
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