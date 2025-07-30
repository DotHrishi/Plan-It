import {PlusIcon} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar display flex flex-2/3 justify-between items-center p-4 bg-[#040F16]">
            <div className="display flex items-center gap-9">
                <h1>Plan-IT</h1>
                <Link to="/create" className="display flex items-center gap-2.5 button bg-black hover:bg-[#FBFBFF] text-black p-2 rounded-md">
                    <PlusIcon className="h-5 w-5 text-red-500"/>
                    <span className="">New Note</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;