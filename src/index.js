import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import AssigneeList from './assignee-list/AssigneeList';
import './index.css';

ReactDOM.render(<Header />,document.getElementById('header'));
ReactDOM.render(<AssigneeList />,document.getElementById('assignee-list'));
