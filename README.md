# 🏥 Landing Page Fisiosd Plus Quiropraxia

Landing page moderna y profesional para servicios de fisioterapia y quiropraxia, construida con React, TypeScript, Vite y Tailwind CSS.

## 🚀 Tech Stack

- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Radix UI** - Componentes accesibles sin estilos
- **Lucide React** - Iconos
- **Bun** - Runtime y gestor de paquetes

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/FisiosdPlus/landing-page.git
cd landing-page

# Instalar dependencias
bun install
# o con npm
npm install
```

## 🛠️ Desarrollo

```bash
# Iniciar servidor de desarrollo
bun run dev
# o con npm
npm run dev
```

El servidor estará disponible en `http://localhost:5173`

## 🏗️ Build

```bash
# Crear build de producción
bun run build
# o con npm
npm run build

# Previsualizar build localmente
bun run preview
# o con npm
npm run preview
```

Los archivos se generarán en la carpeta `build/`

## 🌐 Despliegue

### Desplegar en Vercel (Recomendado)

Este proyecto está configurado para desplegarse fácilmente en Vercel:

1. **Push a GitHub**:
   ```bash
   git add .
   git commit -m "Ready to deploy"
   git push
   ```

2. **Importar en Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "Add New Project"
   - Selecciona este repositorio
   - Vercel detectará automáticamente la configuración
   - Haz clic en "Deploy"

3. **¡Listo!** Tu sitio estará en línea en minutos

Para más detalles, consulta la [Guía de Despliegue Completa](./DEPLOYMENT.md)

### Despliegue Automático

Cada push a la rama `main` desplegará automáticamente a producción en Vercel.

## 📁 Estructura del Proyecto

```
landing-page/
├── src/
│   ├── components/      # Componentes de React
│   │   ├── ui/         # Componentes de UI reutilizables (Radix UI)
│   │   ├── figma/      # Componentes generados desde Figma
│   │   ├── Hero.tsx    # Sección principal
│   │   ├── Services.tsx # Servicios ofrecidos
│   │   ├── Benefits.tsx # Beneficios
│   │   ├── Process.tsx  # Proceso de trabajo
│   │   ├── Team.tsx     # Equipo
│   │   └── ...
│   ├── assets/         # Imágenes y recursos
│   ├── styles/         # Estilos globales
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Punto de entrada
├── vercel.json         # Configuración de Vercel
├── vite.config.ts      # Configuración de Vite
├── tailwind.config.js  # Configuración de Tailwind
└── package.json        # Dependencias y scripts
```

## 🧩 Componentes Principales

- **Hero** - Banner principal con llamado a la acción
- **Services** - Servicios de fisioterapia y quiropraxia
- **Benefits** - Beneficios de los tratamientos
- **Process** - Proceso de atención paso a paso
- **Team** - Equipo de profesionales
- **Testimonials** - Testimonios de pacientes
- **Contact** - Formulario de contacto
- **WhatsAppButton** - Botón flotante de WhatsApp
- **Stats** - Estadísticas del centro
- **CTA** - Llamados a la acción
- **Footer** - Pie de página

## 🎯 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `bun run dev` | Inicia servidor de desarrollo |
| `bun run build` | Crea build de producción |
| `bun run preview` | Previsualiza build localmente |

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Este proyecto está bajo la licencia **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International** (CC BY-NC-ND 4.0).

**Esto significa:**
- ✅ **Puedes** ver y compartir el código fuente
- ✅ **Debes** dar crédito a FisiosdPlus
- ❌ **No puedes** usarlo con fines comerciales
- ❌ **No puedes** crear trabajos derivados o modificarlo

Ver el archivo [LICENSE](./LICENSE) para más detalles o visita [creativecommons.org](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 📧 Contacto

Para más información sobre el proyecto, contacta al equipo de desarrollo.

---

Desarrollado con ❤️ por el equipo de Fisiosd Plus

