import Layout from './Layout'
import { HomePage } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BlogPages, BlogSinglePages } from './pages/BlogPages';
import { PortfolioPage } from './pages/PortfolioPage';
import { ShopPage } from './pages/ShopPage';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><HomePage /></Layout>} />
          <Route path='/portfolio' element={<Layout><PortfolioPage /></Layout>} />
          <Route path='/shop' element={<Layout><ShopPage /></Layout>} />
          <Route path='/blog' element={<Layout><BlogPages /></Layout>} />
          <Route path='/single-page' element={<Layout><BlogSinglePages /></Layout>} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
