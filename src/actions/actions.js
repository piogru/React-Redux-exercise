import axios from 'axios';
export const SHOW_ALL ='SHOW_ALL'
export const ADD_EMPLOYEE='ADD_EMPLOYEE'
export const EDIT_EMPLOYEE='EDIT_EMPLOYEE'
export const DELETE_EMPLOYEE='DELETE_EMPLOYEE'

const getData=()=>{
    return axios('https://dummy.restapiexample.com/api/v1/employees')
    .then(res=>res.data).catch(error => console.error('Error:', error));

};

const addData=(new_employee)=>{
    return axios({url:'https://dummy.restapiexample.com/api/v1/create',
    method: 'POST',
        data: JSON.stringify(new_employee)
    }).then(res=>res.data).catch(error => console.error('Error:', error));

};

const editData=(updated_employee)=>{
  return axios({url:'http://dummy.restapiexample.com/api/v1/update/' + updated_employee.id,
    method: 'PUT',
    data: JSON.stringify(updated_employee)
  }).then((res)=> {
    return res.data
  }).catch(error => console.error('Error:', error));

};

const deleteData=(id)=>{
  return axios({url:'http://dummy.restapiexample.com/api/v1/delete/' + id,
    method: 'DELETE',
    data: JSON.stringify(id)
  }).then(res=>res.data).catch(error => console.error('Error:', error));

};

export const showAll=()=>(dispatch)=>{
    getData().then(data => {
        dispatch(showAllAction(data));
      }).catch(error => {
        throw(error);
      });
    };

export const showAllAction=(data)=>(
{
    type: SHOW_ALL,
    employees:data
}
);

export const addEmployee=(new_employee)=> (dispatch)=> {
  const new_employee_2send={id: new_employee.data.id, name: new_employee.data.employee_name, salary: new_employee.data.employee_salary, age: new_employee.data.employee_age};
  addData(new_employee_2send).then(data =>{
      if(data.data.name!== null) dispatch(addEmployeeAction(new_employee));
  }).catch(error => {
      throw(error);
  });
};

export const addEmployeeAction=(new_employee)=> (
  {
    type: ADD_EMPLOYEE,
    new_employee
  }
);

export const editEmployee=(updated_employee)=> (dispatch)=> {
  const updated_employee_2send={id: updated_employee.data.id, name: updated_employee.data.employee_name, salary: updated_employee.data.employee_salary,
    age: updated_employee.data.employee_age};
  editData(updated_employee_2send).then(data =>{
    if(data.data.name!== null) dispatch(editEmployeeAction(updated_employee));
  }).catch(error => {
      throw(error);
  });
};

export const editEmployeeAction =(updated_employee=> (
  {
    type: EDIT_EMPLOYEE,
    updated_employee
  }
));

export const deleteEmployee = (id) => (dispatch) => {
  deleteData(id.id).then(data => {
    if (data.status === "success")
      dispatch(deleteEmployeeAction(id.id));
  }).catch(error => {
      throw (error);
  });
};

export const deleteEmployeeAction = (id) => (
  {
      type: DELETE_EMPLOYEE,
      id
  }
);
