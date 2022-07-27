import './App.css';

import {Routes,Route} from "react-router-dom"
import Schedule from "./component/Schedule";
import Task from './component/Task';
import Categories from './component/Categories';
import Addnewcategories from './component/Addnewcategories';
import Edit from './component/Edit';
import Editcat from './component/Editcat';

function App() {
  return (
    <>
    <Routes>

      <Route exact path ="/" element={<Categories/>}/>
      <Route exact path ="/schedule" element={<Schedule/>}/>
      <Route exact path ="/categories" element={<Categories/>}/>
      <Route exact path ="/task" element={<Task/>}/>
      <Route exact path ="/addnewcategories" element={<Addnewcategories/>}/>
      <Route exact path ="/edit/:userID" element={<Edit/>}/>
      <Route exact path ="/editcat/:userID" element={<Editcat/>}/>

      

    </Routes>
    </>
  );
}

export default App;
