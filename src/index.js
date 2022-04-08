import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware} from 'redux';
import { connect, Provider } from 'react-redux';
import root_reducers from './reducers';
import {showAll,addEmployee,editEmployee,deleteEmployee} from './actions/actions';
import thunk from 'redux-thunk';

const store = createStore(root_reducers,applyMiddleware(thunk));

const mapStateToProps = (state) => {
  return  {...state};
};
const mapDispatchToProps = (dispatch) => {
  return {
    showAll: () => dispatch(showAll()),
    addEmployee: (new_employee) => dispatch(addEmployee({data:new_employee})),
    editEmployee: (updated,id) => dispatch(editEmployee({data:updated,id:id})),
    deleteEmployee: (id) => dispatch(deleteEmployee({id:id}))
  }
};

const ManageEmployees= connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
    <Provider store={store}>
    <ManageEmployees/>
    </Provider>  , document.getElementById('root')
  );
