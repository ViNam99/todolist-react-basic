import React, { Component } from 'react';
import './Item.css'
class Item extends Component {
    render() {
        return (
            <tr>
                <td></td>
                <td></td>
                <td className="text-center">
                    <span className='label label-success'
                    >
                    </span>
                </td>
                <td className="text-center">
                    <button type="submit" className="btn btn-warning" >
                        <span className="fas fa-pen">&nbsp; Sửa</span>
                    </button> &nbsp;
                        <button type="submit" className="btn btn-danger">
                        <span className="fas fa-times" > &nbsp;Hủy bỏ</span>
                    </button>
                </td>
            </tr>

        );
    }
}

export default Item;