import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import { AppContextProvider } from "./Context/store";
import { HomePage } from "./Page";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
