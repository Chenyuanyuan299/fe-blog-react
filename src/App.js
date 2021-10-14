import React from 'react';
import { Route, BrowserRouter  } from 'react-router-dom'; 
import './style/iconfont.css'
import Admin from './components/Admin/admin'
import New from './components/New/new'
import Detail from './components/Detail/detail'
import EditControl from './components/Edit/editControl'
import EditBlog from './components/Edit/editBlog'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Admin} />
        <Route exact path="/new" component={New} />
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/editcontrol/:id" component={EditControl} />
        <Route exact path="/editblog/:id" component={EditBlog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
