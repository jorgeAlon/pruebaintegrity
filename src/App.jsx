import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from "./componets/Login.jsx";
import Table from "./componets/Table.jsx";

function App() {
  return (
    <div className='container-fluid p-5 main_style'>
      <div className='row align-items-start'>
        <div className='col-12'></div>
        <div className='col-2'><Login></Login></div>
      </div>
      <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'><Table></Table></div>
          <div className='col-1'></div>
      </div>
   </div>
  )
}

export default App
