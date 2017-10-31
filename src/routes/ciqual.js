import React from 'react';
import {Route} from 'react-router-dom';
import {List,Show,Search} from '../components/ciqual/';

export default [
  <Route path='/show/:id' component={Show} exact={true} key='show'/>,
  <Route path='/search' component={Search} strict={true} key='search'/>,
  <Route path='/:page?' component={List} strict={true} key='list'/>,
];
