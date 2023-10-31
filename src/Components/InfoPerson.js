import React from 'react';

const employeeData = {
  "idEmployee": 2,
  "name": "Batman",
  "photo": "",
  "age": "2023-10-29T19:13:35.56",
  "gender": "MA",
  "address": "Av. Gótica",
  "nameRole": "Médico"
};

function EmployeePage() {
  return (
    <div className="p-4 bg-custom-blue"> {/* Aplica el color de fondo personalizado */}
      <h1 className="text-2xl font-bold mb-4 text-primary-light">Detalles del Empleado</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">{employeeData.name}</h2>
        <p>Edad: {new Date(employeeData.age).toLocaleDateString()}</p>
        <p>Género: {employeeData.gender === 'MA' ? 'Masculino' : 'Femenino'}</p>
        <p>Dirección: {employeeData.address}</p>
        <p>Rol: {employeeData.nameRole}</p>
      </div>
    </div>
  );
}

export default EmployeePage;
