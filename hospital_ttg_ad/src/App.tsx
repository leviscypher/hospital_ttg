import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./pages/Dashboard/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="analytics" element={<Analytics />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
