import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <div className="TaskForm">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                        Thêm công việc
                            <span className="fas fa-times-circle" ></span>

                        </h3>
                    </div>
                    <div className="panel-body">

                        <form>
                            <div className="form-group">
                                <label >Tên công việc:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                     />
                            </div>

                            <label>Trạng thái:</label>
                            <select
                                
                                className="form-control"
                               >
                                <option >Kích hoạt</option>
                                <option>Ẩn</option>
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