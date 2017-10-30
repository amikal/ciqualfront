import React from 'react';
import {Route} from 'react-router-dom';
import {List,Create, Update, Show} from '../components/ciqual/';

export default [
  <Route path='/ciquals/create' component={Create} exact={true} key='create'/>,
  <Route path='/ciquals/edit/:id' component={Update} exact={true} key='update'/>,
  <Route path='/ciquals/show/:id' component={Show} exact={true} key='show'/>,
  <Route path='/ciquals/:page?' component={List} strict={true} key='list'/>,
];
