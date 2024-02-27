import "./App.css"
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Price from "./components/pricing/Price"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component= {Home}/>
          <Route path='/vechungtoi' exact component= {About}/>
          <Route path='/cackhoahoc' exact component= {CourseHome}/>
          <Route path='/daykem' exact component= {Team}/>
          <Route path='/hocphi' exact component= {Price}/>
          <Route path='/cacbaiviet' exact component= {Blog}/>
          <Route path='/lienhe' exact component= {Contact}/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App