import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, useLocation } from 'react-router-dom'
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
import NotFound from './Components/Layouts/NotFound'

const App = () => {
  const location = useLocation()
  useEffect(() => {
    console.log(
      "En fouillant ici j'espère que vous trouverez votre bonheur ^^ ❤️"
    )
    store.dispatch(getSites())
    store.dispatch(getMaintenances())
    store.dispatch(getCreations())
  }, [])
  return (
    <Provider store={store}>
      <Navbar />
      <Switch location={location}>
        <Route exact path='/' component={Home} />
        <Route path='/creation' component={Creation} />
        <Route path='/maintenance' component={Maintenance} />
        <Route path='/contact' component={Contact} />
        <Route path='/sites' component={Sites} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
    </Provider>
  )
}

export default App
