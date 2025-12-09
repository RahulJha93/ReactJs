# React + Vite + Tailwind CSS

A modern React application setup with Vite as the build tool and Tailwind CSS for styling.

![Vite + React + Tailwind CSS](https://github.com/user-attachments/assets/09c6c102-b3c3-41c7-9e66-5be041cc35cf)

## Features

- ⚡️ **Vite** - Lightning-fast HMR and build tool
- ⚛️ **React 19** - Latest React version with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **ESLint** - Code quality and consistency
- 🔥 **Hot Module Replacement** - Instant feedback during development

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RahulJha93/ReactJs.git
cd ReactJs
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Lint

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
ReactJs/
├── public/           # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── App.jsx      # Main App component
│   ├── index.css    # Global styles with Tailwind directives
│   └── main.jsx     # Application entry point
├── index.html       # HTML template
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Tailwind CSS Configuration

Tailwind CSS is configured to scan all JSX/TSX files in the `src` directory. You can customize the configuration in `tailwind.config.js`.

### Example Usage

```jsx
// Using Tailwind utility classes
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

## Technologies Used

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [ESLint](https://eslint.org/) - Linting tool

## License

This project is open source and available under the [MIT License](LICENSE).
