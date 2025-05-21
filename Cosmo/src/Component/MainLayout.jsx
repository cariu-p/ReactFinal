import { NavLink } from 'react-router'

export default function BarraNav() {
    return (
        <>
            <div className="w-full p-5 font-bold bg-black flex flex-auto items-baseline gap-8">
                <NavLink to="/Principal" className="text-2xl text-white w-250" end>Cosmo Date</NavLink>
                <NavLink to="/Planets" className="text-9 text-white hover:text-purple-700 " end> Planetas </NavLink>

                <NavLink to="/Exploracion" className="text-9 text-white hover:text-purple-700 " end> Exploraciones </NavLink>


            </div>
        </>
    )
}


