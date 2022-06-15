import Header from "./Header"
import Footer from "./Footer"

const Layout = ({favorites, children}) => {
  return (
    <div>
      <Header favorites={favorites} />
        <div className="container">
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout