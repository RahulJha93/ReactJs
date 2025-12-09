import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 py-12 text-center">
        <div className="flex justify-center gap-8 mb-12">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer"
             className="transition-transform hover:scale-110">
            <img src={viteLogo} className="h-24 w-24 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer"
             className="transition-transform hover:scale-110">
            <img src={reactLogo} className="h-24 w-24 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow" 
                 alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-8">
          Vite + React + Tailwind CSS
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                       text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition 
                       hover:scale-105 active:scale-95">
            count is {count}
          </button>
          <p className="text-gray-200 mt-6">
            Edit <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="text-gray-400 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
