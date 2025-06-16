# TP Integrador - Programación Visual - Grupo 20

## Integrantes del Grupo
- Gutierrez Nanda, Mauro Nahuel - Usuario GitHub: MauroNanda
-
-

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

### Características Técnicas
- Consumo de la API FakeStore para datos de productos
- Persistencia de favoritos en localStorage
- Navegación dinámica entre páginas
- Componentes reutilizables
- Diseño responsive

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