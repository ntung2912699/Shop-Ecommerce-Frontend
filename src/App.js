import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteAdmin from './WebAdmin/Route/RouteAdmin';
import RouteWebPro from './WebPro/Route/RouteWebPro';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/web/*' element={<RouteWebPro />} />
        <Route path='/admin/*' element={<RouteAdmin />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
