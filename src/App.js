import Home from "../src/page/home/index"
import Form from "../src/page/form/index"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
