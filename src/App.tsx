import { Header } from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { WhitePaper } from './components/WhitePaper'
import { Footer } from './components/Footer'
import './styles/GlobalStyle.scss'
import { Dashboard } from './pages/Dashboard'
import { Swap } from './pages/Swap'
import { Vesting } from './pages/Vesting'

export function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/passive_web" exact component={Home} />
            <Route
              path="/passive_web/whitePaper"
              exact
              component={WhitePaper}
            />
            <Route path="/passive_web/dashboard" exact component={Dashboard} />
            <Route path="/passive_web/swap" exact component={Swap} />
            <Route path="/passive_web/vesting" exact component={Vesting} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  )
}
