import React from 'react';
import NavLink from './navLink/navLink';
import styles from './links.module.css'

const Links = () => {
  const links = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  return <div className={styles.links}>
    {links.map((link, index) => 
        <NavLink key={index} item={link} />
    )}
  </div>;
};

export default Links;
