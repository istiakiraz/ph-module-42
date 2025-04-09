import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      
      <div className='bg-[#ebf0f5]'>
      <Navbar></Navbar>
      <Header></Header>
      <div className='w-10/12 mx-auto'>
        <div className='mt-[8.25rem] mb-[2rem]'>
        <h1 className='text-[2rem] text-[#0E2954] '>Active Auctions</h1>
        <p className='text-gray-600 text-xl'>Discover and bid on extraordinary items</p>
        </div>
      </div>
      <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
