"use client"

function DynamicPage(params) {
  const {id}= params
  return (
    <div>
      <h1>Página Dinámica</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default DynamicPage;
