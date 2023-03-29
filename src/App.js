import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home.component";
import Detail from "./routes/detail/Detail.component";
import Favourites from "./routes/favourites/Favourites.component";

function App() {
 return (
  <Routes>
   <Route index element={<Home />} />
   <Route path="/detail/:id" element={<Detail />} />
   <Route path="/favourites" element={<Favourites />} />
  </Routes>
 );
}

export default App;
