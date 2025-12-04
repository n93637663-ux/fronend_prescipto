import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import Appoinment from './pages/Appoinment'
import MyAppointments from './pages/MyAppointments'
import Contact from './pages/Contact'
import Map from './pages/Map'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Check the console for details.</h1>;
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ErrorBoundary>
        <Navbar/>
      </ErrorBoundary>
      <Routes>
        <Route path='/' element={
          <ErrorBoundary>
            <Home/>
          </ErrorBoundary>
        } />
        <Route path='/doctor' element={
          <ErrorBoundary>
            <Doctors/>
          </ErrorBoundary>
        } />  
        <Route path='/doctor/:speciality' element={
          <ErrorBoundary>
            <Doctors/>
          </ErrorBoundary>
        } />
        <Route path='/login' element={
          <ErrorBoundary>
            <Login/>
          </ErrorBoundary>
        } />
        <Route path='/contact' element={
          <ErrorBoundary>
            <Contact/>
          </ErrorBoundary>
        } />
        <Route path='/about' element={
          <ErrorBoundary>
            <About/>
          </ErrorBoundary>
        } />
        <Route path='/my-profile' element={
          <ErrorBoundary>
            <MyProfile/>
          </ErrorBoundary>
        } />
        <Route path='/my-appointments' element={
          <ErrorBoundary>
            <MyAppointments/>
          </ErrorBoundary>
        } />
        <Route path='/appoinment/:docID' element={
          <ErrorBoundary>
            <Appoinment/>
          </ErrorBoundary>
        } />
        <Route path='/map' element={
          <ErrorBoundary>
            <Map/>
          </ErrorBoundary>
        } />
      </Routes>
      <ErrorBoundary>
        <Footer/>
      </ErrorBoundary>
    </div>
  )
}

export default App