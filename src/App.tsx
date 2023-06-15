import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { AppLayout } from './layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <Routes>
        {/* <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<UserInfoForm />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
