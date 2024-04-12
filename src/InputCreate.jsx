import { useState } from 'react';

function InputCreate() {
  const [title, setTitle] = useState(""); // Estado para guardar el título
  const [response, setResponse] = useState('Listo para enviar')

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const urlApiCreate = import.meta.env.VITE_APP_API_URL+'create'; // URL del endpoint POST
    const payload = { title }; // Payload que se enviará al backend

    try {
      const response = await fetch(urlApiCreate, {
        method: 'POST', // Método HTTP
        headers: {
          'Content-Type': 'application/json', // Indicamos que el contenido es JSON
        },
        body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        setResponse(`Success: ${data.title}`)
        setTitle(""); // Limpiar el input después de enviar
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Actualiza el estado cada vez que se cambia el valor del input
        placeholder="Enter title"
        required
      />
      <button type="submit">Enviar</button>
    </form>
    <h2>{response}</h2>
    </>
  );
}

export default InputCreate;
