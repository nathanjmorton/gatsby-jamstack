import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="container">
      <h1>{data.site.siteMetadata.title}</h1>
      <header className={headerStyles.header}>
        <Link className={headerStyles.link} activeClassName={headerStyles.activeListItem} to="/">
        Home
        </Link>
        <Link className={headerStyles.link} activeClassName={headerStyles.activeListItem} to="/about">About</Link>
        <Link className={headerStyles.link} activeClassName={headerStyles.activeListItem} to="/contact">Contact</Link>
        <Link className={headerStyles.link} activeClassName={headerStyles.activeListItem} to="/blog">Blog</Link>
      </header>
    </div>
  );
};

export default Header;