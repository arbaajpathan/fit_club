
import { Routes, Route, Router } from "react-router-dom";

import about from "./pages/about";
import home from "./pages/home";
import service from "./pages/service";
import Blogs from "./pages/Blogs";
import Contactcomponent from "./pages/contact";
import BookAclass from "./pages/BookAclass";
function App() {

  return (<div>


    <Routes>
      <Route path="/" Component={home} />
      <Route path="/about" Component={about} />
      <Route path="/service" Component={service} />
      <Route path="/Blogs" Component={Blogs} />
      <Route path="/Contact" Component={Contactcomponent} />
      <Route path="/BookAclass" Component={BookAclass} />
    </Routes>

  </div>
  );

}

export default App;
