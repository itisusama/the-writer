import { ui } from "@/barrel/ui"

export default function Navbar() {
    return(
        <nav className="w-full fixed top-0 px-4 py-2 border-b bg-white">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Bloxy</h1>
                <ul className="flex gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ui.Button>Sign In</ui.Button>
            </div>
        </nav>
    )
}