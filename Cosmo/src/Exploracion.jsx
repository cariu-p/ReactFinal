import BarraNav from './Component/MainLayout'


function Exploracion() {
    return (<>

        <body className="bg-gradient-to-b from-gray-800 to-black min-h-screen ">
            <BarraNav />

            <section className="flex flex-row w-full gap-8 justify-center mt-10 ">

                <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                    <img className="h-50" src="https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/08/24/64e701cb55d40.jpeg"></img>
                    <section className='flex flex-col p-4 w-full h-full text-amber-50  rounded-2xl bg-slate-800'>
                        <b className=" h-9 text-2xl">Luna</b>
                        <p className="h-10">El único satélite natural de la Tierra y el quinto satélite más grande del Sistema Solar.</p> <br />
                        <p>Planeta:             Tierra</p>
                        <p>Diametro:            3,474 km</p>
                        <p>Composición:         Rocosa</p>
                        <p>Distancia:           384,400 km</p>
                    </section>
                </section>

                <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                    <img className="h-50" src="https://robotitus.com/wp-content/uploads/2022/04/Tita.jpg" />
                    <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                        <b className=" h-9 text-2xl">Titán</b>
                        <p className="h-10">El segundo satélite más grande del Sistema Solar, con una densa atmósfera y lagos de metano líquido.</p> <br /><br />
                        <p>Planeta:             Saturno</p>
                        <p>Diametro:            5,149 km</p>
                        <p>Composición:         Rocosa con atmósfera</p>
                        <p>Distancia:           1.2 millones km de Saturno</p>
                    </section>
                </section>

                <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                    <img className="h-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Afiche_de_Europa.svg/640px-Afiche_de_Europa.svg.png" />
                    <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                        <b className=" h-9 text-2xl">Europa</b>
                        <p className="h-10">Satélite con una superficie de hielo que podría albergar un océano de agua líquida bajo su corteza.</p> <br /><br />
                        <p>Planeta:             Júpiter</p>
                        <p>Diametro:            3,122 km</p>
                        <p>Composición:         Helada</p>
                        <p>Distancia:           671,000 km de Júpiter</p>
                    </section>
                </section>
            </section>

            <section className="flex flex-row w-full gap-8 justify-center mt-10 ">

                <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                    <img className="h-50" src="https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/el-mundo-mas-volcanico-del-sistema-solar-lleva-activo-toda-su-vida/11877019-1-esl-MX/El-mundo-mas-volcanico-del-sistema-solar-lleva-activo-toda-su-vida.jpg"></img>
                    <section className='flex flex-col p-4 w-full h-full text-amber-50  rounded-2xl bg-slate-800'>
                        <b className=" h-9 text-2xl">Io</b>
                        <p className="h-10">El cuerpo más volcánicamente activo del Sistema Solar, con cientos de volcanes en constante erupción.</p> <br/><br/>
                        <p>Planeta:             Júpiter</p>
                        <p>Diametro:            3,643 km</p>
                        <p>Composición:         Volcánica</p>
                        <p>Distancia:           421,700 km de Júpiter</p>
                    </section>
                </section>

                <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                    <img className="h-50" src="https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2015/09/17/150917144917__85575725_enc.jpg.webp" />
                    <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                        <b className=" h-9 text-2xl">Encélado</b>
                        <p className="h-10">Pequeña luna con géiseres que expulsan agua al espacio, sugiriendo un océano subsuperficial.</p> <br/><br />
                        <p>Planeta:             Saturno</p>
                        <p>Diametro:            504 km</p>
                        <p>Composición:         Helada</p>
                        <p>Distancia:           238,000 km de Saturno</p>
                    </section>
                </section>

                <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                    <img className="h-50" src="https://www.muycomputer.com/wp-content/uploads/2018/11/Ganimedes-interior-768x491.jpg" />
                    <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                        <b className=" h-9 text-2xl">Ganímedes</b>
                        <p className="h-10">El satélite más grande del Sistema Solar, incluso mayor que el planeta Mercurio.</p> <br /><br />
                        <p>Planeta:             Júpiter</p>
                        <p>Diametro:            5,268 km</p>
                        <p>Composición:         Rocosa y helada</p>
                        <p>Distancia:           1.1 millones km de Júpiter</p>
                    </section>
                </section>
            </section>
                

        </body>



    </>)

}
export default Exploracion;


