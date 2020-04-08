import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DarkModeToggle from './DarkModeToggle';

const Header = ({ siteTitle }) => (
  <header>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            textTransform: `uppercase`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <DarkModeToggle />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
