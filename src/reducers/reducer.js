export default function employees (state={employeeList:[], loaded:false }, action)  {
  let new_state;
    switch (action.type) {
      case 'SHOW_ALL':
        new_state=Object.assign({}, state);
        new_state.employeeList=action.employees.data;
        new_state.loaded=true;
        return new_state;
      case 'ADD_EMPLOYEE':
        return Object.assign({},state,{employeeList:[...state.employeeList,action.new_employee.data]});
      case "EDIT_EMPLOYEE":
        new_state = Object.assign({}, state);
        new_state.employeeList.forEach((el, index,tab)=>{
          if(el.id===action.updated_employee.data.id) tab[index]=action.updated_employee.data;
          return el;
        });
        return new_state;
      case 'DELETE_EMPLOYEE':
        new_state = Object.assign({}, state);
        let id=-1;
        new_state.employeeList.forEach((el, index)=>{
          if(el.id===action.id) id=index;
          return id;
        });
        new_state.employeeList.splice(id,1);
        return new_state;

      default:
        return state
    }
  }
