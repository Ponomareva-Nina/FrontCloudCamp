import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./layout/AppLayout";
import { MainPage } from "./pages/MainPage/MainPage";
import { CreatePage } from "./pages/CreatePage/CreatePage";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
