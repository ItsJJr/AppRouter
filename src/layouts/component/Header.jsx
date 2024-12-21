import { NavLink } from "react-router";

function Header() {
  return (
   <div className="bg-slate-800 text-white p-4">
    <div className="flex justify-between items-center font-large">
        <div className="text-3xl ml-9">Jr's | SHOP</div>
            <ul className=" flex gap-4 mr-9">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Products">Products</NavLink>
                <NavLink to="/About">About</NavLink>

            </ul>

    </div>
 </div>
  )
}

export default Header