# React + nodeJS

## Pasos a seguir 
Antes de empezar con la clase tienes que tener en cuentas lo siguiente:
- Clona primero este repositorio. Este repositorio será nuestro BACK
- Crea un archivo `.env`donde introducirás tu `PORT` y `MONGO_URI` 
- Instala las dependencias
- Levanta el servidor. Estará en [localhost:3000](http://localhost:3000/). Si tienes otro servicio levantado en ese puerto cámbialo.
- npm start para levantar el servicio.
- Ve a `POSTMAN` u otro servicio que se puedan hacer peticiones POST, GET, DELETE, PUT...
- Usa el método POST en http://localhost:3000/create para crear tareas. El modelo es sencillo, usa algo así en el `body`:
```js 
{
    "title": "Aprender JS"
}
```
Crea varias con diferentes títulos y así poder verlas y trabajar con ellas (3 o 4 están bien).

Deja levantado el back para poder acceder a él desde POSTMAN y REACT

### FRONT:
Sigue los pasos del vídeo
