import Layout from './components/common/Layout'
import { HomePage } from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PortfolioPage } from './components/PortfolioPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><HomePage /></Layout>} />
          <Route path='/portfolio' element={<Layout><PortfolioPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
