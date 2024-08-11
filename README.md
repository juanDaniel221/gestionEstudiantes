# gestionEstudiantes
Un proyecto de un CRUD de gestion de estudiantes el cual hace las operaciones basicas con tecnologicas como Angular y Tailwind por parte del FrontEnd y Express de NodeJS con una base de datos en MySQL
## Tecnologías Utilizadas

- **Angular**: Framework de frontend.
- **TailwindCSS**: Framework de CSS para diseño responsivo y moderno.
- **Node.js** y **Express**: Backend para la API REST.
- **MySQL**: Base de datos relacional.

## Instalación

# Clona el repositorio:
   git clone https://github.com/TU_USUARIO/gestion-estudiantes.git
   cd gestion-estudiantes

# Instala las dependencias del proyecto:
    npm install

# Configura el backend:
Dirígete al directorio del backend y asegúrate de que el servidor Express esté configurado correctamente.
Crea un archivo .env para las variables de entorno y agrega los detalles de conexión a la base de datos.

## Importar la Base de Datos

Para importar la base de datos en MySQL Workbench:

1. Abre MySQL Workbench y conéctate a tu servidor.
2. Ve a `Server` > `Data Import`.
3. Selecciona la opción **"Import from Self-Contained File"** y elige el archivo `nombre_de_tu_archivo.sql`.
4. En la sección "Default Schema to be Imported To", selecciona o crea la base de datos en la que deseas importar los datos.
5. Haz clic en **"Start Import"**.

# Ejecuta el proyecto:
Backend: Inicia el servidor Express con:
    node server.js

Frontend: Ejecuta el comando: 
    npm run start 
para iniciar el frontend.

Abre la aplicación:
La aplicación estará disponible en http://localhost:4200.

# Uso:
Navega a la aplicación en tu navegador.
Utiliza las opciones del formulario para añadir o editar estudiantes.
Filtra estudiantes por nombre, apellido, edad o email utilizando el filtro en la tabla.