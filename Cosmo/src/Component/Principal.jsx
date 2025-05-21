import BarraNav from './Component/MainLayout'
import Card from './Component/Card'
import Exoplanets from './Component/Exoplanetas'


function Principal() {

  return (
    <>
      <body className="bg-gradient-to-b from-gray-800 to-black min-h-screen">

        <BarraNav />

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
          
        <Exoplanets/>  
        <section className="bg-gradient-to-r  to-blue-950 py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto ">
              <h2 className="text-3xl font-bold mb-4 text-white">Mantente Informado</h2>
              <p className="text-slate-300 mb-6">
                Suscríbete a nuestro boletín para recibir las últimas noticias y descubrimientos espaciales
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
               
              </div>
            </div>
          </div>
        </section>
      </body>

    </>
  )
}

export default Principal