import React,{useEffect,useState} from 'react';
import axios from 'axios';


function TaskList() {
  const handleDelete = (id) => {
    const res ={
        "idTask": id,
        "stateUpdate": "DE"
      }

    axios.put("https://hospital.somee.com/api/updatestatetask",res).then(res=>{
        setDates(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.error("Error al eliminar la tarea", error);
      });
  };

  const handleEdit = (id) => {
    console.log(`Editar tarea con ID ${id}`);
  };
  const [dates,setDates] = useState([])

    useEffect(()=>{
        axios.get("https://hospital.somee.com/api/listtasks").then(res=>{
            setDates(res.data)
            console.log(res.data)
        })
       
        
    },[])
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tabla de Tareas</h2>
      <table className="table-auto min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Título</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Fecha de Creación</th>
            <th className="px-4 py-2">Fecha de Finalización</th>
            <th className="px-4 py-2">Estado de la Tarea</th>
            <th className="px-4 py-2">Nombre del Empleado</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((tarea) => (
            <tr key={tarea.idTask}>
              <td className="border px-4 py-2">{tarea.idTask}</td>
              <td className="border px-4 py-2">{tarea.title}</td>
              <td className="border px-4 py-2">{tarea.description}</td>
              <td className="border px-4 py-2">{tarea.creationDate}</td>
              <td className="border px-4 py-2">{tarea.endDate}</td>
              <td className="border px-4 py-2">{tarea.statusTask}</td>
              <td className="border px-4 py-2">{tarea.employeeName}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(tarea.idTask)}
                  className="bg-red-500 text-white px-2 py-1 mr-2 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => handleEdit(tarea.idTask)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
