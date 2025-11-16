// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import HomePage from "../pages/HomePage";
import MovieReview from "../pages/MovieReview";
import Welcome from "../pages/Welcome";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>          {/*rotta genitore*/}
            <Route path="/" element={<Welcome />} />      {/*rotte figlie, mostrano il componenete impostato come element al posto dell'Outlet*/}
            <Route path="/movies" element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieReview />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
