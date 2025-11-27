# Alma Libre - Spa & Wellness (Next.js)

Aplicación web para el spa Alma Libre en Quito, Ecuador. Incluye catálogo de servicios, información de contacto y asistente de IA para recomendaciones personalizadas.

## 🚀 Migrado a Next.js 15

Este proyecto ha sido migrado de Vite a Next.js 15 con App Router.

## ✨ Características

- 🎨 Diseño moderno con Tailwind CSS
- 🤖 Asistente de IA con Google Gemini para recomendar tratamientos
- 📱 Totalmente responsive
- ⚡ Optimizado con Next.js
- 🎯 SEO optimizado
- 🔐 API Routes para manejo seguro de API keys

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm o yarn
- API Key de Google Gemini

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Configura las variables de entorno:

Edita `.env.local` y añade tu API key:
```
GEMINI_API_KEY=tu_clave_api_real_de_gemini
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 🏗️ Estructura del Proyecto

```
alma-libre-spa/
├── app/
│   ├── api/
│   │   └── recommend/
│   │       └── route.ts       # API Route para Gemini
│   ├── components/
│   │   ├── About.tsx
│   │   ├── AIConcierge.tsx    # Asistente de IA
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── Services.tsx
│   ├── constants.ts           # Configuración de servicios y negocio
│   ├── types.ts               # Tipos TypeScript
│   ├── globals.css            # Estilos globales
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página principal
├── .env.local                 # Variables de entorno (no incluido en git)
├── next.config.js             # Configuración de Next.js
├── tailwind.config.ts         # Configuración de Tailwind
└── package.json
```

## 🎨 Tecnologías

- **Next.js 15** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS
- **Google Generative AI** - IA para recomendaciones
- **Lucide React** - Iconos

## 📦 Comandos Disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Construcción para producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 🔧 Configuración

### Servicios
Edita `app/constants.ts` para modificar:
- Información del negocio
- Lista de servicios
- Testimonios

### Estilos
Los colores personalizados están en `tailwind.config.ts`:
- `brand-gold`: #D9B959
- `brand-green`: #48592E
- `brand-water`: #D0EFF2

## 🚀 Deployment

### Vercel (Recomendado)

1. Push a GitHub
2. Conecta tu repo en [Vercel](https://vercel.com)
3. Añade la variable de entorno `GEMINI_API_KEY`
4. Deploy automático

## 📄 Licencia

Privado - Alma Libre Spa
