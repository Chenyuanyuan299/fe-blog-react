import React from 'react';
import { Route, BrowserRouter  } from 'react-router-dom'; 
import './style/iconfont.css'
import Admin from './components/Admin/admin'
import New from './components/New/new'
import Detail from './components/Detail/detail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Admin} />
        <Route exact path="/login" />
        <Route exact path="/new" component={New} />
        <Route exact path="/detail/:id" component={Detail}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
