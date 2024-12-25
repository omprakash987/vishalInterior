import './App.css'
import Home from './components/designComponents/Home'
import {BrowserRouter , Routes, Route, } from 'react-router-dom'
import CreateModularKitchenDesign from './components/backendComponents/CreateModularKitchenDesign'
import { Toaster } from 'react-hot-toast'
import GetModularKitchenDesign from './components/backendComponents/GetModularKitchenDesign'
import CreateLivingRoomDesign from './components/backendComponents/CreateLivingRoomDesign'
import CreateBedRoomDesign from './components/backendComponents/CreateBedRoomDesign'
import CreatePoojaRoomDesign from './components/backendComponents/CreatePoojaRoomDesign'
import GetBedRoomDesign from './components/backendComponents/GetBedRoomDesign'
import GetPoojaRoomDesign from './components/backendComponents/GetPoojaRoomDesign'
import GetLivingRoomDesign from './components/backendComponents/GetLivingRoomDesing'
import Service from './components/designComponents/Service'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-modular-kitchen" element={<CreateModularKitchenDesign />} />
          <Route path="/create-living-room" element={<CreateLivingRoomDesign />} />
          <Route path="/create-bedroom" element={<CreateBedRoomDesign />} />
          <Route path="/create-pooja-room" element={<CreatePoojaRoomDesign />} />
          <Route path="/modular-kitchen-design" element={<GetModularKitchenDesign />} />
          <Route path="/living-room-design" element={<GetLivingRoomDesign />} />
          <Route path="/bedroom-design" element={<GetBedRoomDesign />} />
          <Route path="/pooja-room-design" element={<GetPoojaRoomDesign />} />
          <Route path='/service' element={<Service/>}/>
          

          
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  )
}

export default App
