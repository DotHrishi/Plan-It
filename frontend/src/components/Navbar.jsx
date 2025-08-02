import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-black border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-left gap-10">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            <img
              src="./Plan-IT logo.png"
              alt="Plan-IT Logo"
              className="h-16 w-auto inline-block"
            />
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Link
              to={"/create"}
              className="btn color-blue btn-outline btn-sm flex items-center gap-2"
            >
              <PlusIcon className="size-5" />
              <span>New Task</span>
            </Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
