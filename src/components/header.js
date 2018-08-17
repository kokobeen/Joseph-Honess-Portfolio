import React from 'react'
import Link from 'gatsby-link'
import s from './header.module.css';

const Header = ({ siteTitle }) => (
  <div
    style={{
      height: '4.3rem',
      background: '#FD5D5D',
      margin: 0,
      padding: 0,
    }}
  >
    <div
      style={{
        marginLeft: '5%',
        maxWidth: 1500,
      }}
    >
      <h1 style={{listStyle: `none`, float: `left`, fontSize: '4rem', marginTop: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{float: 'right', width: '30%'}} >
          <Link className={s.header} to="/About/">About   </Link>
          <Link className={s.header} to="/Work/">Work   </Link>
          <Link className={s.header} to="/CV/">CV   </Link>
          <Link className={s.header} to="/contact/">Contact</Link>
      </ul>
    </div>
  </div>
)

export default Header
