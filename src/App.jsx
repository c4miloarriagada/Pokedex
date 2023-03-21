import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header"
import { Main } from "./views/Main/Main";

export const App = () => {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}/>
    </Routes>
    </>
    
  )
}

export default App
