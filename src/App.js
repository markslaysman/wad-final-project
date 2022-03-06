// REACT imports
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// My imports
import HomePage from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
