import Layout from './components/common/Layout'
import { HomePage } from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BlogPages } from './components/BlogPages';
import { PortfolioPage } from './components/PortfolioPage';
import { ShopPage } from './components/ShopPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><HomePage /></Layout>} />
          <Route path='/portfolio' element={<Layout><PortfolioPage /></Layout>} />
          <Route path='/shop' element={<Layout><ShopPage /></Layout>} />
          <Route path='/blog' element={<Layout><BlogPages /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
