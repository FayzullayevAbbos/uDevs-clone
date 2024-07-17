/* eslint-disable no-unused-vars */
import Logo from "../assets/images/logo.svg";
import { DownOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import First from "../assets/images/1.svg";
import Second from "../assets/images/2.svg";
import Third from "../assets/images/3.svg";
import Fourth from "../assets/images/4.svg";
import Fifth from "../assets/images/5.svg";
import Rus from "../assets/images/russian.svg";
import Eng from "../assets/images/america.svg";
import NavMenu from "./NavMenu";
import { useState } from "react";
import { createPortal } from "react-dom";
import Messege from "./Messege";

const root = document.getElementById('root')
const serviceItems = [
  { label: "Services", disabled: true },
  {
    label: (
      <a
        href='#service1'
        className='flex w-52 items-center gap-3 px-2 py-2 transition duration-500 hover:bg-blue-600 hover:text-white'
      >
        <img src={First} alt='Development of mobile applications' />
        <p className='text-sm hover:text-white'>
          Development of mobile applications
        </p>
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        href='#service2'
        className='flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white'
      >
        <img
          src={Second}
          alt='Development and implementation ERP systems'
        />
        <p className='text-sm'>
          Development and implementation ERP systems
        </p>
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href='#service3'
        className='flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white'
      >
        <img
          src={Third}
          alt='User interface, User experience design'
        />
        <p className='text-sm'>
          User interface, User experience design
        </p>
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href='#service4'
        className='flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white'
      >
        <img src={Fourth} alt='IT consulting' />
        <p className='text-sm'>IT consulting</p>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        href='#service5'
        className='flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white'
      >
        <img
          src={Fifth}
          alt='Optimization IT consulting infrastructure'
        />
        <p className='text-sm'>
          Optimization IT consulting infrastructure
        </p>
      </a>
    ),
    key: "4",
  },
];

const portfolioItems = [
  { label: "Portfolio", disabled: true },
  {
    label: (
      <a
        href='#portfolio1'
        className='flex w-52 items-center gap-3 px-2 py-2 transition duration-500 hover:bg-blue-600 hover:text-white'
      >
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl font-extrabold text-orange-600'>
          D
        </div>
        <p className='text-sm'>Delever</p>
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        href='#portfolio2'
        className='flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white'
      >
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-extrabold text-blue-600'>
          S
        </div>
        <p className='text-sm'>Sms.uz</p>
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href='#portfolio3'
        className='flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white'
      >
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl font-extrabold text-red-700'>
          G
        </div>
        <p className='text-sm'>Goodzone</p>
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href='#portfolio4'
        className='flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white'
      >
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-extrabold text-green-600'>
          I
        </div>
        <p className='text-sm'>Iman</p>
      </a>
    ),
    key: "3",
  },
];
const languageItems = [
  { label: "Languages", disabled: true },
  {
    label: (
      <a className='flex w-52 items-center gap-5 px-2 py-2 transition duration-500 hover:bg-blue-600 hover:text-white'>
        <img className='h-12 w-12' src={Rus} alt='Russian Flag' />
        <p className='text-sm'>Рус</p>
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a className='flex w-52 items-center gap-5 px-2 py-2 hover:bg-blue-600 hover:text-white'>
        <img className='h-12 w-12' src={Eng} alt='America Flag' />
        <p className='text-sm'>Eng</p>
      </a>
    ),
    key: "1",
  },
];
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openSms , setOpenSms] = useState(false)
  return (
    <div className='fixed z-50 w-full border-b border-[#e5e9f2] bg-white shadow-sm'>
      <div className='mx-auto max-w-6xl px-4'>
        <nav className='flex h-[72px] items-center justify-between'>
          <div>
            <a to='/'>
              <img className='h-8 w-24' src={Logo} alt='Site Logo' />
            </a>
          </div>
          <div className=' hidden lg:flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
              <li>
                <a
                  href='#direction'
                  // to="/direction"
                  className='py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]'
                  // activeClassName="border-b-2 border-[#1b5bf7]"
                >
                  Direction
                </a>
              </li>
              <li>
                <a
                  href='#command'
                  // to="/command"
                  className='py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]'
                  // activeClassName="border-b-2 border-[#1b5bf7]"
                >
                  Command
                </a>
              </li>
              <li>
                <Dropdown menu={{ items: serviceItems }}>
                  <a
                    href='#services'
                    // to="/services"
                    className='flex items-center py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]'
                    // activeClassName="border-b-2 border-[#1b5bf7]"
                  >
                    <Space>
                      Services
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li>
                <a
                  href="#tools"
                  
                  className='py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]'
                  // activeClassName="border-b-2 border-[#1b5bf7]"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href='#clients'
                  // to="/clients"
                  className='py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]'
                  // activeClassName="border-b-2 border-[#1b5bf7]"
                >
                  Clients
                </a>
              </li>
              <li>
                <Dropdown menu={{ items: portfolioItems }}>
                  <a
                    href='#portfolio'
                    // to="/portfolio"
                    className='flex items-center py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]'
                    // activeClassName="border-b-2 border-[#1b5bf7]"
                  >
                    <Space>
                      Portfolio
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li>
                <Dropdown menu={{ items: languageItems }}>
                  <a
                    href='#languages'
                    // to="/languages"
                    className='flex items-center py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]'
                    // activeClassName="border-b-2 border-[#1b5bf7]"
                  >
                    <Space>
                      Languages
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
            </ul>
            <a href='#contact'>
              {" "}
              <button className='h-10 w-28 rounded-lg bg-[#1b5bf7] text-sm font-bold leading-5 text-white transition-transform duration-150 hover:scale-[1.05]'>
                Contact
              </button>
            </a>
          </div>

          <div
            onClick={() => {
              setOpenNav(true);
            }}
            className='flex lg:hidden cursor-pointer pr-4 w-full justify-end '
          >
            <MenuUnfoldOutlined />
          </div>
        </nav>
      </div>
      <NavMenu openNav={openNav} setOpenNav={setOpenNav} />

      {createPortal(<Messege openSms={openSms} setOpenSms={setOpenSms} /> , root , 1)}
    </div>
  );
};

export default Header;
