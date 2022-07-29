import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layouts/Alert';
import User from './components/pages/User'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>

        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/User/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>

          {/* <Routes>
        <Route path="/" element={
        } />

    </Routes> */}
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
