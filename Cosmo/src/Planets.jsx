
import BarraNav from './Component/MainLayout'
import { useState } from 'react';

// Componente de tarjeta reutilizable
function Card({ className, children }) {
    return (
        <div className={`rounded-lg overflow-hidden ${className}`}>
            {children}
        </div>
    );
}

function CardHeader({ children }) {
    return <div className="p-6">{children}</div>;
}

function CardTitle({ children }) {
    return <h3 className="text-xl font-semibold text-white">{children}</h3>;
}

function CardDescription({ children }) {
    return <p className="text-slate-400 mt-1">{children}</p>;
}

function CardContent({ children }) {
    return <div className="px-6 pb-6">{children}</div>;
}





function Planets() {
    return (
        <>
            <body className="bg-gradient-to-b from-gray-800 to-black min-h-screen ">
                <BarraNav />

                <section className='flex flex-col justify-center items-center m-5'>

                    <h2 className="sm:text-4xl m-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-500 
                    font-bold">Datos acerca de los planetas</h2>
                    <p className="text-slate-300">Explora los datos más interesantes acerca de los planeteas de nuestro sistema solar</p>

                </section>

                <section className="flex flex-row w-full gap-8 justify-center mt-10 ">

                    <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                        <img className="h-50" src="https://content.nationalgeographic.com.es/medio/2022/06/30/el-planeta-mercurio_48c3a79c_800x450.jpg"></img>
                        <section className='flex flex-col p-4 w-full h-full text-amber-50  rounded-2xl bg-slate-800'>
                            <b className=" h-9 text-2xl">Mercurio</b>
                            <p className="h-10">Datos actualizado</p> <br />
                            <p>Diametro:            4879 km</p>
                            <p>Distancia al Sol:    58 millones km</p>
                            <p>Temperatura media:   167°C</p>
                        </section>
                    </section>

                    <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                        <img className="h-50" src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/CEAA/production/_114360925_jaxa-isas-akatsuki-project-team.jpg.webp" />
                        <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                            <b className=" h-9 text-2xl">Venus</b>
                            <p className="h-10">Datos actualizados</p> <br />
                            <p>Diametro:            12,104 km</p>
                            <p>Distancia al Sol:    108 millones km</p>
                            <p>Temperatura media:   464°C</p>
                        </section>
                    </section>

                    <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                        <img className="h-50" src="https://static.nationalgeographic.es/files/styles/image_3200/public/SCI_Earth_101_ES~~~~~es~mux~~1.jpg?w=1900&h=1069" />
                        <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                            <b className=" h-9 text-2xl">Tierra</b>
                            <p className="h-10">Datos actualizados</p> <br />
                            <p>Diametro:            12,742 km</p>
                            <p>Distancia al Sol:    150 millones km</p>
                            <p>Temperatura media:   15°C</p>
                        </section>
                    </section>


                </section>

                {/* Parte dos de los planetas*/}
                <section className="flex flex-row w-full justify-center gap-8 p-4 mt-10">

                    <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                        <img className="h-50" src="https://phantom-elmundo.uecdn.es/6db4f4bda7250612accfee6977ce5a5b/resize/828/f/webp/assets/multimedia/imagenes/2024/07/03/17200098056317.jpg"></img>
                        <section className='flex flex-col p-4 w-full h-full text-amber-50  rounded-2xl bg-slate-800'>
                            <b className=" h-9 text-2xl">Marte</b>
                            <p className="h-10">Datos actualizado</p> <br />
                            <p>Diametro:            98717 km</p>
                            <p>Distancia al Sol:    947 millones km</p>
                            <p>Temperatura media:   57°C</p>
                        </section>
                    </section>


                    <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                        <img className="h-50" src="https://estaticos-cdn.prensaiberica.es/clip/7fdc9c85-96ca-4171-88bf-19b3f57353f0_alta-libre-aspect-ratio_default_0.jpg" />
                        <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                            <b className=" h-9 text-2xl">Jupiter</b>
                            <p className="h-10">Datos actualizados</p> <br />
                            <p>Diametro:            24874 km</p>
                            <p>Distancia al Sol:    675 millones km</p>
                            <p>Temperatura media:   199°C</p>
                        </section>
                    </section>

                    <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                        <img className="h-50" src="https://www.eluniversal.com.mx/resizer/v2/3IJZPP2DABB5XCGAXRW2TW2S2U.jpeg?auth=e7702b5b604829456f926fc5d00ffb1af9d74f56567046339aa8f9ce645fef8a&smart=true&width=1100&height=666" />
                        <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                            <b className=" h-full text-2xl">Saturno</b>
                            <p className="h-full">Datos actualizados</p> <br />
                            <p>Diametro:            79931 km</p>
                            <p>Distancia al Sol:    108 millones km</p>
                            <p>Temperatura media:   -17°C</p>
                        </section>
                    </section>

                </section>

                <section className="flex flex-row w-full justify-center gap-8 p-4 mt-10">

                    <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                        <img className="h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRny13yJNpfbnacLPGr_WfhsvUKmlcPKoP_oA&s" />
                        <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                            <b className=" h-9 text-2xl">Urano</b>
                            <p className="h-10">Datos actualizados</p> <br />
                            <p>Diametro:            50724 km</p>
                            <p>Distancia al Sol:    2870 millones km</p>
                            <p>Temperatura media:   -195°C</p>
                        </section>
                    </section>

                    <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                        <img className="h-full" src="https://humanidades.com/wp-content/uploads/2017/05/neptuno-e1569255785939.jpg" />
                        <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                            <b className=" h-9 text-2xl">Neptuno</b>
                            <p className="h-10">Datos actualizados</p> <br />
                            <p>Diametro:            49244 km</p>
                            <p>Distancia al Sol:    4498 millones km</p>
                            <p>Temperatura media:   -200°C</p>
                        </section>
                    </section>

                </section>


                <Card className="bg-slate-900 border border-slate-800">
                    <CardHeader>
                        <CardTitle>Mapa del Sistema Solar</CardTitle>
                        <CardDescription>Posiciones y órbitas actualizadas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video bg-slate-800 rounded-md flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="relative w-50 h-50 mx-auto">
                                    <div className="absolute inset-0 rounded-full border border-slate-700 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-yellow-500"></div>
                                    </div>
                                    {[1,2,3,4,5].map((orbit) => (
                                        <div
                                            key={orbit}
                                            className="absolute rounded-full border border-slate-700"
                                            style={{
                                                width: `${orbit * 40}%`,
                                                height: `${orbit * 40}%`,
                                                left: `${50 - orbit * 20}%`,
                                                top: `${50 - orbit * 20}%`,
                                            }}
                                        >
                                            <div
                                                className="absolute w-3 h-3 rounded-full bg-blue-500"
                                                style={{
                                                    left: `${50 + Math.cos(orbit * 0.5) * 50}%`,
                                                    top: `${50 + Math.sin(orbit * 0.5) * 50}%`,
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-30 text-slate-400">Visualización simplificada del Sistema Solar</p>
                            </div>
                        </div>
                    </CardContent>
                   
                </Card>

            </body>

        </>)

}
export default Planets;