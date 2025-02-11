import BannerWorld from "./components/BannerWorld"
import Categories from "./components/Categories"
import CustomersSaying from "./components/CustomersSaying"
import Footer from "./components/Footer"
import MainBanner from "./components/MainBanner"
import OurServices from "./components/OurServices"
import Recomendation from "./components/Recomendation"
import SearchCategories from "./components/SearchCategories"

function App() {

  return (
    <>
      <MainBanner />
      <Recomendation />
      <Categories />
      <SearchCategories />
      <OurServices />
      <CustomersSaying />
      <BannerWorld />
      <Footer />
    </>
  )
}

export default App
