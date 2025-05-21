
import './App.css'
import Card from './Component/Card'
import Exoplanets from './Component/Exoplanetas'
import BarraNave from './Component/MainLayout'

function App() {


  return (
    <>
      <body className="bg-gradient-to-b from-gray-800 to-black min-h-screen">

        <BarraNave />

        <section className="m-10 flex flex-col items-center">

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl 
            bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-500">
            Explorando el Universo a través de los Datos
          </h1>
          <p className="mt-5 text-xl text-slate-300 text-center">
            Descubre información fascinante sobre planetas, estrellas, galaxias y más en nuestra plataforma de
            visualización de datos espaciales.
          </p>

          <section className="flex flex-col sm:flex-row gap-15 pt-10">
            <button className="bg-purple-800 hover:bg-purple-950 transition delay-200 duration-300 ease-in-out hover:-translate-y-2 rounded-xl text-white w-40 h-8">Explorar Datos</button>
            <button variant="outline" className=" w-40 bg-white text-purple-700 hover:bg-purple-950 transition hover:text-white delay-200 duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
              Ver Visualizaciones
            </button>
          </section>

          <section className='pt-9 text-center'>
            <h2 className="sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-500 
            font-bold">Datos Destacados</h2>
            <p className="text-slate-300">Explora los datos más recientes e interesantes del cosmos</p>
          </section>

        </section>


        <section className='grid md:grid-cols-3 justify-items-center m-11'>
          <Card />
        </section>

        <Exoplanets />


        {/* Sección de Suscripción */}
        <section className="bg-gradient-to-r to-blue-950 py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-white">Mantente Informado</h2>
              <p className="text-slate-300 mb-6">
                Suscríbete a nuestro boletín para recibir las últimas noticias y descubrimientos espaciales
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-xl">
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="flex-1 px-5 py-3 rounded-md bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2
                   focus:ring-purple-950 transition-all duration-200"
                />
                <button className="bg-purple-900 hover:bg-purple-600 text-white px-6 py-3 rounded-md 
                transition-colors duration-200">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sección con información adicional */}
        <section className="bg-slate-950 border-t border-slate-800 py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sección CosmoData */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-purple-500 text-xl">⭐</span>
                  <span className="text-xl font-bold text-white">CosmoData</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Explorando el universo a través de datos y visualizaciones interactivas.
                </p>
              </div>

              {/* Sección "Explorar" */}
              <div>
                <h3 className="font-medium mb-4 text-white">Explorar</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Planetas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Estrellas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Galaxias
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Misiones Espaciales
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sección "Recursos" */}
              <div>
                <h3 className="font-medium mb-4 text-white">Recursos</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      API de Datos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Descargar Datos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Documentación
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Contribuir
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sección "Contacto" */}
              <div>
                <h3 className="font-medium mb-4 text-white">Contacto</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Acerca de Nosotros
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Equipo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors duration-200 hover:text-purple-400">
                      Política de Privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Derechos reservados */}
            <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-500 text-center">
              <p>© {new Date().getFullYear()} CosmoData. Todos los derechos reservados.</p>
            </div>
          </div>
        </section>

      </body>

    </>
  )
}

export default App
