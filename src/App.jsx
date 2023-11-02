import { useEffect } from "react"
import Gallery from "./components/Gallery/Gallery"
import 'aos/dist/aos.css';
import Aos from "aos"

function App() {
useEffect(()=>{
  Aos.init()
},[])
  return (
    <>
    <Gallery/>
    </>
    )
}

export default App
