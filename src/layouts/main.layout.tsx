import { Outlet } from "react-router-dom"
import { ui } from "@/barrel/ui"

const Main = () => {
  return (
    <div>
     <nav><ui.Navbar/></nav>
     <main><Outlet/></main>
     <footer><ui.Footer/></footer>
    </div>
  )
}

export default Main
