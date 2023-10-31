import React,{useEffect, useState} from 'react';
import axios from 'axios';

const data = [
  {
    "idHospital": 1,
    "nameHospital": "Hospital del Valle",
    "latitude": "-17.420927134746194",
    "longitude": "-66.13318206886449",
    "description": "Hospital salva vidas xd",
    "address": "av Nose donde",
    "creationDate": "2023-10-29T14:17:19.623",
    "modificationDate": "2023-10-29T14:17:19.623",
    "status": "AC"
  },
  {
    "idHospital": 2,
    "nameHospital": "Hospital Deos",
    "latitude": "12313132-17.420927134746144",
    "longitude": "-66.13318206886411",
    "description": "descripcion del hospital",
    "address": "av. iris juatemala",
    "creationDate": "2023-10-31T02:04:21.9",
    "modificationDate": "2023-10-31T02:04:21.9",
    "status": "AC"
  }
];

function TablaHospital() {

  const [dates,setDates] = useState([])

    useEffect(()=>{
        axios.get("https://hospital.somee.com/api/listhospital").then(res=>{
            setDates(res.data)
            console.log(res.data)
        })
    },[])
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tabla de Hospitales</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre del Hospital</th>
              <th className="px-4 py-2">Latitud</th>
              <th className="px-4 py-2">Longitud</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Dirección</th>
              <th className="px-4 py-2">Fecha de Creación</th>
              <th className="px-4 py-2">Fecha de Modificación</th>
              <th className="px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((hospital) => (
              <tr key={hospital.idHospital}>
                <td className="border px-4 py-2">{hospital.idHospital}</td>
                <td className="border px-4 py-2">{hospital.nameHospital}</td>
                <td className="border px-4 py-2">{hospital.latitude}</td>
                <td className="border px-4 py-2">{hospital.longitude}</td>
                <td className="border px-4 py-2">{hospital.description}</td>
                <td className="border px-4 py-2">{hospital.address}</td>
                <td className="border px-4 py-2">{hospital.creationDate}</td>
                <td className="border px-4 py-2">{hospital.modificationDate}</td>
                <td className="border px-4 py-2">{hospital.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaHospital;
