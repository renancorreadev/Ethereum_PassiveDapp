import { Container, Content } from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container className="navbar navbar-expand-lg ">
      <Content>
        <nav className="navbar  justify-content-between">
          <a className="navbar-brand" href="./">
            <img src={logo} alt="logo" />
          </a>

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <a href="./" className="navbar-text nav-link">
              Home
            </a>
            <a href="#features" className="navbar-text nav-link">
              Features
            </a>
            <a href="#roadmap" className="navbar-text nav-link">
              Road Map
            </a>
            <a href="#how-to-buy" className="navbar-text nav-link">
              How to Buy
            </a>
            <a href="./whitePaper" className="navbar-text nav-link">
              White Paper
            </a>
            <Link to="/passive_web/vesting" className="navbar-text nav-link">
              Vesting
            </Link>
          </ul>
        </nav>
      </Content>
    </Container>
  )
}
