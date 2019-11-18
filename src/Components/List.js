import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

    render() {

        return (
            <div className="List">
                <table className="table  table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    id="txtSearch"
                                    name="filterName"
                                />
                            </td>
                            <td>

                                <select name="filterStatus" className="form-control"
                                >
                                    <option value={-1}>Tất cả</option>
                                    <option value={1}>Kích hoạt</option>
                                    <option value={0}>Ẩn</option>
                                </select>

                            </td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;