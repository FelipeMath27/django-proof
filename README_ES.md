# Sistema de Gestión de Cuentas de Ahorro

![Diagrama de Clases](ClassDiagram.png)

Este es un sistema de gestión de cuentas de ahorro desarrollado como una prueba técnica. La solución consta de un backend desarrollado en Django y un frontend en Angular.

## Requisitos del Sistema
- Python 3.12.3
- Django 5.0.6
- Angular CLI 17.3.3
- Node.js 20.12.1
- npm 10.5.1
- Motor de base de datos (se recomienda Oracle)

## Configuración del Entorno

### Backend (Django)
1. **Clona este repositorio** en tu máquina local.
2. **Navega al directorio** `backend` **desde la línea de comandos.**
3. **Crea un entorno virtual** (opcional pero recomendado): `python -m venv venv`.
4. **Activa el entorno virtual:**
   - En Windows: `venv\Scripts\activate`.
   - En macOS/Linux: `source venv/bin/activate`.
5. **Instala las dependencias del proyecto:** `pip install -r requirements.txt`.
6. **Configura el acceso a la base de datos Oracle.**
7. **Ejecuta las migraciones de la base de datos:** `python manage.py migrate`.
8. **Inicia el servidor de desarrollo:** `python manage.py runserver`.

### Frontend (Angular)
1. **Navega al directorio** `frontend` **desde la línea de comandos.**
2. **Instala las dependencias del proyecto:** `npm install`.
3. **Inicia el servidor de desarrollo:** `ng serve`.
4. **Accede al frontend** en [http://localhost:4200](http://localhost:4200) **en tu navegador.**

## Uso

Este sistema de gestión de cuentas de ahorro está diseñado para ser utilizado como una plataforma competitiva en el mercado financiero. Ofrece las siguientes características:

- **Gestión de cuentas de clientes.**
- **Registro y autenticación de administradores.**
- **Interfaz para que un cliente creado por el administrador asigne su contraseña.**
- **Panel de administración para la creación y consulta de usuarios.**
- **Panel de usuario para administrar cuentas, que incluye las siguientes funciones:**
  - *Consultar saldo.*
  - *Depositar.*
  - *Retirar con generación de una OTP estática.*

## Configuración de la Base de Datos Oracle

Utiliza el archivo DDL proporcionado para crear las tablas necesarias en la base de datos Oracle. Se recomienda instalar el componente de Oracle para Django para una mejor integración con la base de datos.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. **Haz un fork del repositorio.**
2. **Crea una rama con un nombre descriptivo:** `git checkout -b mi-nueva-funcionalidad`.
3. **Realiza tus cambios y haz commit:** `git commit -am 'Agrega una nueva funcionalidad'`.
4. **Sube tus cambios a tu repositorio:** `git push origin mi-nueva-funcionalidad`.
5. **Crea un nuevo Pull Request.**

## Créditos

Este proyecto fue desarrollado por Luis Felipe Supelano Mesa - Apoyado en la documentación de Django/Angular/Oracle.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.
