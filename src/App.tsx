//App.tsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Layout from './components/Layout';
import Single from './views/Single';
import Example from './views/Example';

const App = () => {

  console.log('Base URL:', import.meta.env.BASE_URL);

  console.log('Media API:', import.meta.env.VITE_MEDIA_API);
  console.log('Auth API:', import.meta.env.VITE_AUTH_API);

  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/single" element={<Single />} />
            <Route path="/example" element={<Example />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
