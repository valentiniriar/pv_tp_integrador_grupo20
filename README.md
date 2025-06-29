# TP Integrador - Programación Visual - Grupo 20

## Integrantes del Grupo

- Iriarte Gloss, Valentin Mateo - Usuario GitHub: valentiniriar
- Churquina, Facundo - Usuario GitHub: Facudebug123
- Gutierrez Nanda, Mauro Nahuel - Usuario GitHub: MauroNanda
- Chavez, Rodrigo Nicolas - Usuario GitHub: nico690

## Descripción del Proyecto

Este proyecto es una Single Page Application (SPA) desarrollada como trabajo práctico integrador para la materia Programación Visual. La aplicación está construida utilizando React + Vite y ofrece una interfaz moderna para la gestión de productos.

### Tecnologías Utilizadas

- React
- Vite
- React Router DOM
- Context API para manejo de estado global
- Axios para consumo de APIs
- CSS personalizado para el diseño

### Funcionalidades Principales

- **Página de Inicio**: Muestra un listado de productos en formato de tarjetas
- **Sistema de Favoritos**: Permite marcar/desmarcar productos como favoritos
- **Página de Detalles**: Muestra información detallada de cada producto
- **Gestión de Productos**: Permite crear, editar y eliminar productos
- **Tema Claro/Oscuro**: Implementación de modo oscuro y claro

### Sistema de Autenticación (Segunda Etapa)

- **Registro de Usuario**: Formulario de registro con validaciones
  - Validación de formato de email
  - Contraseña mínima de 6 caracteres
  - Confirmación de contraseña
  - Almacenamiento en localStorage
- **Inicio de Sesión**: Autenticación de usuarios registrados
  - Verificación de credenciales
  - Persistencia de sesión en localStorage
  - Mensaje de bienvenida personalizado
- **Cierre de Sesión**: Logout con limpieza de estado
- **Rutas Protegidas**: Acceso restringido a usuarios autenticados
- **Rehidratación de Estado**: Mantenimiento de sesión al recargar página

### Funcionalidades Adicionales Implementadas

- **Filtros y Búsqueda**: Filtrado por categoría y búsqueda por nombre de producto
- **Ordenamiento**: Ordenamiento por precio (ascendente/descendente)
- **Sistema de Notificaciones**: Toast notifications para feedback del usuario
- **Diseño Responsive**: Interfaz adaptativa para diferentes tamaños de pantalla
- **Persistencia de Datos**: Los favoritos se mantienen al recargar la página
- **Validación de Formularios**: Validación en tiempo real para la creación/edición de productos
- **Manejo de Estados de Carga**: Indicadores de loading y manejo de errores

### Características Técnicas

- Consumo de la API FakeStore para datos de productos
- Persistencia de favoritos en localStorage
- Navegación dinámica entre páginas
- Componentes reutilizables
- Diseño responsive
- **Sistema de autenticación simulado con localStorage**
- **Context API para manejo de estado de autenticación**
- **Rutas protegidas con componente PrivateRoute**
- **Validaciones de formulario en tiempo real**
- **Rehidratación automática del estado de usuario**

### Instalación y Uso

1. Clonar el repositorio:

```bash
git clone https://github.com/usuario/pv_tp_integrador_grupo20.git
```

2. Instalar dependencias:

```bash
cd pv_tp_integrador_grupo20
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Abrir [http://localhost:5173](http://localhost:5173) en el navegador

### Estructura del Proyecto

```
pv_tp_integrador_grupo20/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas principales
│   ├── context/       # Contextos para estado global
│   ├── api/           # Servicios de API
│   ├── styles/        # Estilos CSS
│   └── assets/        # Recursos estáticos
├── public/            # Archivos públicos
└── package.json       # Dependencias y scripts
```

### Licencia

Este proyecto es parte del trabajo práctico de la materia Programación Visual.
