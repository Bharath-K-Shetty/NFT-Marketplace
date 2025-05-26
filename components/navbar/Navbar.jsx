"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

//IMPORT ICONS
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';

import Style from './Navbar.module.css'
import { Discover, Profile, Help, Notification, Sidebar } from './index';
import { Button } from '../index'
import images from '../../img'

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [profile, setProfile] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const openMenu = (e) => {
    const btnText = e.currentTarget.innerText;
    if (btnText === 'Discover') {
      setDiscover(!discover);
      setProfile(false);
      setHelp(false);
      setNotification(false);
    } else if (btnText === 'Profile') {
      setProfile(!profile);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else if (btnText === 'Help') {
      setHelp(!help);
      setDiscover(false);
      setProfile(false);
      setNotification(false);
    } else if (btnText === 'Notification') {
      setNotification(!notification);
      setDiscover(false);
      setProfile(false);
      setHelp(false);
    }
  }
  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setProfile(false);
      setHelp(false);
    }
    else {
      setNotification(false);
    }
  }
  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    }
    else {
      setProfile(false);
    }
  }
  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  }
  const handleClick = () => {
    // Handle create button click
    console.log("Create button clicked");
  }

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt='NFT Market Place'
              width={100}
              height={100}></Image>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder='Search NFT' />
              <BsSearch onClick={() => { }} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* END OF LEFT SECTION */}
        <div className={Style.navbar_container_right}>
          {/* DISCOVER SECTION */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => { openMenu(e) }}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/*HELP SECTION */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => { openMenu(e) }}>Help</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <Help />
              </div>
            )}
          </div>
          {/*NOTIFICATION SECTION */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={openNotification} />
            {notification && (
              <Notification />
            )}
          </div>
          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName='Create' onButtonClick={() => handleClick()} />
          </div>
          {/* PROFILE SECTION */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={images.user1} alt='Profile' width={40} height={40} onClick={() => openProfile()} className={Style.navbar_container_right_profile} />
              {profile &&
                <Profile />}
            </div>
          </div>
          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menu_icon} onClick={() => openSideBar()} />
          </div>
        </div>
      </div>
      {/* SIDE BAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.Sidebar}>
          <Sidebar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  )
}

export default Navbar
