import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, useLocation, BrowserRouter } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Components/Layouts/Home'
import store from './redux/store'
import { getSites } from './redux/actions/siteActions'
import Creation from './Components/Creations/Creations'
import Maintenance from './Components/Maintenances/Maintenances'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Layouts/Navbar'
import Sites from './Components/Sites/Sites'
import getMaintenances from './redux/actions/maintenanceActions'
import getCreations from './redux/actions/creationActions'
import Footer from './Components/Layouts/Footer'

const App = () => {
  const location = useLocation()
  // const [prevDepth, setPrevDepth] = useState(0)
  // const timeout = 500
  // const currentKey = location.pathname.split('/')[1] || '/'
  // const getPathDepth = (x) => {
  //   const pathArr = x.pathname.split('/')
  //   pathArr.filter((n) => n !== '')
  //   return pathArr.length
  // }
  useEffect(() => {
    store.dispatch(getSites())
    store.dispatch(getMaintenances())
    store.dispatch(getCreations())
    // setPrevDepth(getPathDepth(location))
  }, [])
  return (
    <Provider store={store}>
      {/* <TransitionGroup component='div' className='App'>
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          className='pageSlider'
          mountOnEnter={false}
          unmountOnExit
        >
          <div
            className={
              getPathDepth(location) - prevDepth >= 0 ? 'left' : 'right'
            }
          > */}
      <Navbar />
      <BrowserRouter>
        <Switch location={location}>
          <Route exact path='/' component={Home} />
          <Route path='/creation' component={Creation} />
          <Route path='/maintenance' component={Maintenance} />
          <Route path='/contact' component={Contact} />
          <Route path='/sites' component={Sites} />
        </Switch>
      </BrowserRouter>
      <Footer />
      {/* </div>
        </CSSTransition>
      </TransitionGroup> */}
    </Provider>
  )
}

export default App
