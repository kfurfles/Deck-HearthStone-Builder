import React from 'react';
import { connect } from 'react-redux';

function Table () {
    return(
    <table className="table">
        <thead className="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        </tbody>
    </table>
    )
}


const mapStateToProps = store => ({
    list: store.stackState.list
  });
export default connect(mapStateToProps)(Table)