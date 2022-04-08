import React, {Component} from 'react';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';

class App extends Component{
  componentDidMount(){
    this.props.showAll();
  }

  onSelected = (selected) => {
    this.setState({
      selected
    });
  }

  add = (name, salary, age) => {
    let new_id=this.props.employees.employeeList.length+1;
    let employee2add={id:String(new_id), employee_name: name, employee_salary: parseInt(salary), employee_age: parseInt(age)};
    this.props.addEmployee(employee2add);
    }

  render(){
    const {employees,editEmployee,deleteEmployee} =this.props;
    return (
      <div>{employees.loaded &&
        <EmployeeList updateEmployee={editEmployee}
        employees={employees.employeeList}
        deleteEmployee={deleteEmployee}/>
        }
        <AddEmployee
          employees={employees.employeeList}
          addEmployee={this.add}
        />
      </div>
    );
  }
}

export default App;
