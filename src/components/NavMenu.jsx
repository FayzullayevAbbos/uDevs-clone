/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { CloseOutlined, YoutubeFilled } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Logo from "../assets/images/logo.svg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import TwitterIcon from "@mui/icons-material/Twitter";
function NavMenu({ openNav, setOpenNav }) {
  function onClose() {
    setOpenNav(false);
  }
  return (
    <Drawer
    id="navmenu"
      headerStyle={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }} // Header uslubini qo'shamiz
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "8px 0",
          }}
        >
          <img src={Logo} style={{ height: "24px" }} />
          <Button
            type='text'
            icon={<CloseOutlined />}
            onClick={onClose}
            style={{ fontSize: "16px" }}
          />
        </div>
      }
      placement='right'
      onClose={onClose}
      visible={openNav}
      bodyStyle={{ padding: 0 }}
      style={{ width: "100%" }} // Bu yerda kenglikni 100% qilamiz
    >
      <div style={{ width: "100vw", height: "100%" }}>
        <ul className='w-full h-[60%] flex items-center justify-center flex-col'>
          <li onClick={onClose} className='text-[32px] font-semibold'>
            <a href='#services'>Services</a>
          </li>
          <li onClick={onClose} className='text-[32px] font-semibold'>
            <a href='#clients'>Clients </a>
          </li>
          <li onClick={onClose} className='text-[32px] font-semibold'>
            <a href='#command'>Command</a>
          </li>
        </ul>
        <div className='flex flex-col gap-10 items-center justify-center w-full'>
          <a onClick={onClose} href='#contact'>
            <button className='mt-4  h-14 w-60 rounded-lg bg-[#1b5bf7] text-xl font-semibold leading-[30px] text-white transition duration-300 hover:scale-[1.1]'>
              Contact
            </button>
          </a>
          <div className=' flex items-center gap-3'>
            <div className='w-10 h-10 rounded-[50%] flex items-center justify-center bg-[#1b5bf7]'>
              <YouTubeIcon className='h-10 w-[50px] text-white' />
            </div>
            <div className='w-10 h-10 rounded-[50%] flex items-center justify-center bg-[#1b5bf7]'>
              <InstagramIcon className='h-10 w-[50px] text-white' />
            </div>
            <div className='w-10 h-10 rounded-[50%] flex items-center justify-center bg-[#1b5bf7]'>
              <TwitterIcon className='h-10 w-[50px] text-white' />
            </div>
           
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default NavMenu;
