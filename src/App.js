// REACT imports
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// My imports
import HomePage from './pages/Home';
import HousesPage from './pages/HousesPage';
import MoviesPage from './pages/MoviesPage';
import PageNotFound from './pages/PageNotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/housescrud' element={<HousesPage />} />
          <Route path='/moviereview' element={<MoviesPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
