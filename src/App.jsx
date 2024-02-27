import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
// import Login from "./Components/Login/Login";
// import GetStartedForFree from "./Components/GetStarted/GetStartedForFree";
// import SelectResumeTemp from "./Components/SelectResumeTemplate/SelectResumeTemp";
import Preview from "./Components/PreviewResume/Preview";


function App() {

  return (
    <Router>
      <Routes>
         {/* <Route path={'/'} element={<Login />} /> */}
         {/* <Route path={'/'} element={<GetStartedForFree />} /> */}
         {/* <Route path={'/'} element={<SelectResumeTemp />} /> */}
         <Route path={'/'} element={<Preview />} />
      </Routes>
    </Router>
  )
}

export default App
