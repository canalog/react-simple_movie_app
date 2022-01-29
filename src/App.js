import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Genre from "./routes/Genre";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path={`/:genre/:page`} element={<Genre />} />
        <Route path={`/movie/:id`} element={<Detail />} />
        <Route path={`/`} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
