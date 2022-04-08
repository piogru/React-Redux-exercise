import React, { Component } from 'react';

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      salary: props.salary,
      age: props.age
    };
  }

  addEmployee = () => {
    this.props.addEmployee(this.state.name, this.state.salary, this.state.age);
  }

  change(event) {
    var name = event.target.id;
    this.setState({
        [name]: event.target.value
    });
}

  render() {
    return (
      <div>
        <label>name</label>
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={(e) => this.change(e)}
        />
        <label>salary</label>
        <input
          type="text"
          id="salary"
          value={this.state.salary}
          onChange={(e) => this.change(e)}
        />
        <label>age</label>
        <input
          type="text"
          id="age"
          value={this.state.age}
          onChange={(e) => this.change(e)}
        />
        <button onClick={this.addEmployee.bind()}>Add</button>
      </div>
    );
  }
}

export default AddEmployee;
