import React from 'react';
import {Route} from 'react-router-dom';

import {
  List as CiqualList,
  Create as CiqualCreate,
  Update as CiqualUpdate,
  Show as CiqualShow
} from '../components/ciqual/';

export default (
  [
    <Route path='/iquals/' component={ CiqualList } exact={true} strict={true} key='CiqualList'/>,
    <Route path='/iquals/create' component={ CiqualCreate } exact={true} key='CiqualCreate'/>,
    <Route path="/iquals/edit/:id" component={ CiqualUpdate } exact={true} key='CiqualUpdate'/>,
    <Route path="/iquals/show/:id" component={ CiqualShow } exact={true} key='CiqualShow'/>
  ]
);
