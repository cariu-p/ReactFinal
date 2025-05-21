import { useState } from 'react';

export default function ExoplanetComparison() {
  const [exoplanets] = useState([...Array(8)].map((_, i) => ({
    id: i + 1,
    size: 20 + Math.random() * 80,
    distance: Math.random()
  })));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">Comparativa de Exoplanetas</h3>
        <p className="text-slate-400 mt-1">Análisis de planetas fuera de nuestro sistema solar</p>
      </div>
      
      {/* Content */}
      <div className="px-6 pb-6">
        <div className="aspect-video bg-slate-800 rounded-md p-4">
          <div className="h-full flex flex-col">
            <div className="flex justify-between mb-2 text-sm text-slate-400">
              <span>Tamaño relativo</span>
              <span>Distancia a su estrella</span>
            </div>
            
            <div className="flex-1 grid grid-cols-4 gap-4">
              {exoplanets.map((planet) => (
                <div key={planet.id} className="flex flex-col items-center justify-end h-full">
                  <div
                    className="rounded-full bg-gradient-to-br from-purple-500 to-blue-600"
                    style={{
                      width: `${planet.size}%`,
                      height: `${planet.size}%`,
                      opacity: 0.7 + planet.distance * 0.3,
                    }}
                  ></div>
                  <div className="h-1 w-full bg-slate-700 mt-2">
                    <div className="h-full bg-blue-500" style={{ width: `${planet.distance * 100}%` }}></div>
                  </div>
                  <span className="text-xs mt-1 text-slate-300">EP-{planet.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-6 pb-6">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
          Explorar datos de exoplanetas
        </button>
      </div>
    </div>
  );
}