import React from 'react';
import findIndex from 'lodash/findIndex';

class AddDynamicRowsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [{ id: '', workItem: '', dueDate: '', resourceNeeded: '', editFlag: false, }],
    };
  }

  handleChange = idx => e => {
    const rows = [...this.state.rows];
    rows[idx][e.target.id] = e.target.value;
    this.setState({
      rows
    });
    console.log('this.state-------', this.state.rows)
  };

  handleAddRow = () => {
    const item = {
      adjustment: '',
      id: '',
      workItem: '',
      dueDate: '',
      resourceNeeded: ''
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleSave = () => {
    console.log('handleSave--------', this.state);
    let rowsData = this.state.rows;

    rowsData.map((item) => {
      item.editFlag = true;


    })
    this.setState({ rows: rowsData })
  };
  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  handleEditSpecificRow = idx => () => {
    console.log('handleEditSpecificRow--------', this.state.rows);
    let rowsData = this.state.rows;
    rowsData[idx].editFlag = false;
    this.setState({ rows: rowsData });
    console.log('handleEditSpecificRow-----after---', this.state.rows);
  };

  render() {
    return (
      <div className="main-div">
        <h3>{'Project Title'}</h3>
        <h6>{`Number of Work item :${this.state.rows.length}`}</h6>
        <table
          className='table table-bordered table-hover'
          id='tab_logic'
        >
          <thead>
            <tr>
              <th className='text-center'> {'ID'} </th>
              <th className='text-center'> {'WorkItem '} </th>
              <th className='text-center'> {'Due Date '} </th>
              <th className='text-center'> {'No. Resources Needed'} </th>
              <th className='text-center'> {'Actions '} </th>
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((item, idx) => (
              <tr id='addr0' key={idx}>
                <td>
                  {!this.state.rows[idx].editFlag ? <input
                    type='text'
                    value={this.state.rows[idx].id}
                    onChange={this.handleChange(idx)}
                    className='form-control'
                    id={'id'}
                  /> : this.state.rows[idx].id}
                </td>
                <td>
                  {!this.state.rows[idx].editFlag ? <input
                    type='text'
                    value={this.state.rows[idx].workItem}
                    onChange={this.handleChange(idx)}
                    className='form-control'
                    id={'workItem'}
                  /> : this.state.rows[idx].workItem}
                </td>
                <td>
                  {!this.state.rows[idx].editFlag ? <input
                    type='text'
                    value={this.state.rows[idx].dueDate}
                    onChange={this.handleChange(idx)}
                    className='form-control'
                    id={'dueDate'}
                  /> : this.state.rows[idx].dueDate}
                </td>
                <td>
                  {!this.state.rows[idx].editFlag ? <input
                    type='text'
                    value={this.state.rows[idx].resourceNeeded}
                    onChange={this.handleChange(idx)}
                    className='form-control'
                    id={'resourceNeeded'}
                  /> : this.state.rows[idx].resourceNeeded}
                </td>
                <td>
                  <i className="fa fa-edit" onClick={this.handleEditSpecificRow(idx)}></i>
                  <i className="fa fa-trash" aria-hidden="true" onClick={this.handleRemoveSpecificRow(idx)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.handleAddRow} className='add-row-button'>
          {'Add New Item'}
        </button>
        <button onClick={this.handleSave} className='add-row-button'>
          {'Save'}
        </button>
      </div>
    );
  }
}

export default AddDynamicRowsTable;
