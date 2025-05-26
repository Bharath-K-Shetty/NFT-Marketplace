import React from 'react'
import Link from 'next/link'
import Style from './Help.module.css'
const Help = () => {
  const helpCenter = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign Up",
      link: "signUp",
    },
    {
      name: "LogIn",
      link: "login",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {
        helpCenter.map((item, index) => (
          <div className={Style.helpCenter}>
            <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
          </div>
        ))
      }
    </div >
  )
}

export default Help
