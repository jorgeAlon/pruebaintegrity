import {useState}from "react"
import DataTable from 'react-data-table-component'
import datJson from "../data/data.json";


function Table() {
  const columns = [
    {
        name: 'Nombre',
        selector: row => row.name
    },
    {
        name: 'Contraseña',
        selector: row => row.password
    }
  ];

  const [dataFromJson, setDataFromJson] = useState(datJson)
  const [data, setData] = useState(dataFromJson)

  

  const search = (event) => {
    const filtering = dataFromJson.filter(n => {
      console.log(n.name.toLowerCase().includes(event.target.value.toLowerCase()));
      return n.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    console.log(filtering);
    setData(filtering)
  }

  return (
       <>
        <div className="col-10"></div>
        <div className="col-2 p-3">
          <div className="text-end"><input className="form-control" type="text" name="" onChange={search} id="" placeholder="Buscar" /></div>
        </div>
        <DataTable
        columns ={columns}
        data = {data}
        fixedHeader
        pagination
        className="table table-striped"
        >
        
        </DataTable>
       </> 
  )
}

export default Table