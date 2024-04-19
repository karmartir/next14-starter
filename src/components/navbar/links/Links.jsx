"use client";
import React, { useState } from "react";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({session}) => {
  const [open, setOpen] = useState(false);

  // temporary
  
  const isAdmin = true;

  return (
    <div className="styles.container">
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink key={index} item={link} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>

            <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
     
      <Image className={styles.menuButton} src='/menu.png' alt='' width={30} height={30} onClick={()=> setOpen((prev) => !prev)}/>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, index) => (
            <NavLink item={link} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
