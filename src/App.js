import React from 'react';
import { Route, BrowserRouter  } from 'react-router-dom'; 
import './style/iconfont.css'
import Admin from './components/Admin/admin'
import New from './components/New/new'
import Detail from './components/Detail/detail'
import Edit from './components/Edit/edit'
import EditUI from './components/Edit/editui'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Admin} />
        <Route exact path="/new" component={New} />
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/editui/:id" component={EditUI} />
      </BrowserRouter>
    </div>
  );
}

export default App;
