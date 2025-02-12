import BannerWorld from "./components/BannerWorld"
import Categories from "./components/Categories"
import ContentForm from "./components/ContentForm"
import CustomersSaying from "./components/CustomersSaying"
import Footer from "./components/Footer"
import MainBanner from "./components/MainBanner"
import MainMenu from "./components/MainMenu"
import OurServices from "./components/OurServices"
import Recomendation from "./components/Recomendation"
import SearchCategories from "./components/SearchCategories"

function App() {

  return (
    <>
      <MainMenu />
      <MainBanner />
      <Recomendation />
      <Categories />
      <SearchCategories />
      <OurServices />
      <CustomersSaying />
      <BannerWorld />
      <ContentForm />
      <Footer />
    </>
  )
}

export default App
