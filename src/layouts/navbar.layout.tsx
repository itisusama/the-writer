import { useState } from "react";
import { Link } from "react-router-dom";
import { ui } from "@/barrel/ui";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [{ name: "Home", href: "/" }, { name: "About", href: "/about"}, { name: "Contact", href: "/contact" }];
  return (
    <>
      <nav className="z-50 fixed bg-base flex items-center justify-between w-full py-4 px-6 md:px-16 text-sm text-base-content">
        <Link to="/" className="flex gap-2 items-center">
          <h2 className="text-lg text-primary font-bold">The Writer</h2>
        </Link>

        <div className="hidden md:flex bg-primary/30 rounded-full px-4 py-2 items-center gap-8 transition duration-500 text-base-content/80">
          {navItems.map((item) => (
            <Link key={item.name} to={item.href} className="text-white hover:text-black transition">{item.name}</Link>
          ))}
        </div>
        <div className="flex gap-2">
{/* {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-base">
              {user.name}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <div className="px-2 py-2 text-sm text-muted-foreground border-b border-border">
              <span className="font-medium text-foreground">{user.email}</span>
            </div>
            <DropdownMenuItem asChild>
              <Link to="/create-novel" className="cursor-pointer w-full">
                {location.pathname === "/profile" && (
                    <span>Create Novel</span>
                )}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/profile" className="cursor-pointer w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 focus:text-red-700 cursor-pointer" onClick={handleLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : ( */}
        <ui.Button className="hidden md:inline-flex">
          <Link to="/login">Login</Link>
        </ui.Button>
      {/* )} */}
      
    </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden btn btn-ghost btn-circle"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 bg-base-content/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {navItems.map((item) => (
            <Link key={item.name} to={item.href} className="text-primary hover:text-black transition">{item.name}</Link>
          ))}

        <button
          onClick={() => setMenuOpen(false)}
          className="btn btn-primary btn-square"
          aria-label="Close menu"
        >
          X
        </button>
      </div>
    </>
  );
};

export default Navbar;