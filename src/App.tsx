import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './shared/Components/Footer/Footer'
import Header from './shared/Components/Header/Header'
import SearchSection from './shared/Components/Main/Sections/SectionOne/SearchSection'
import GlobalStyles from './shared/Style/Generic'
import AboutUs from './shared/Screens/About/About'

function App() {


  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header/>
      <Routes>
        <Route path="/" element={<SearchSection />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
   
  )
}

export default App
