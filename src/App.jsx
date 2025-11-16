// import bootstrap from "bootstrap";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>          {/*rotta genitore*/}
            <Route path="/" element={<h1>Welcome on MOVIES</h1>} />      {/*rotte figlie, mostrano il componenete impostato come element al posto dell'Outlet*/}
            <Route path="/movies" element={<h1>Lista film</h1>} />
            <Route path="/movies/:id" element={<h1>Singolo film e review</h1>} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
