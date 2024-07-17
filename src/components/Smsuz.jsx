/* eslint-disable no-unused-vars */

import SMSUZ from "../assets/images/smsuz.png";
import SmsText from "../assets/images/smstext.svg";
import Mail from "../assets/images/mail.svg";

import Website from "../assets/images/website.svg";
import AdminPanel from "../assets/images/adminpanel.svg";
import CrossPlatform from "../assets/images/crossplatform.svg";
import WebDesign from "../assets/images/webdesign.svg";
import MobileDesign from "../assets/images/mobile.svg";

const Smsuz = () => {
  return (
    <div id='portfolio2' className='py-20'>
      <div className='mx-auto flex max-w-6xl items-center gap-8 px-4'>
        <div className='w-full lg:w-[50%]'>
          <img className='mb-8' src={SmsText} alt='SMS Text' />
          <span className='mb-8 flex w-[142px] items-center gap-2 rounded-full bg-[#DAE3FA] px-4 py-1'>
            <img src={Mail} alt='Mail Img' />
            <p className='text-sm text-[#4473E5]'>Notification</p>
          </span>
          <div className=' mb-5 block lg:hidden'>
            <img src={SMSUZ} alt='SMSuz Img' />
          </div>
          <p className='mb-8 lg:text-xl text-[16px] font-semibold text-[#464359]'>
            Smsuz.uz - It is a platform for bulk SMS messaging.
          </p>
          <h3 className='mb-6 text-2xl font-semibold'>
            What we did?
          </h3>
          <div className='grid grid-cols-3 gap-6'>
            <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
              <img src={Website} alt='Website' />
              <p className='text-[14px] lg:text-lg font-semibold leading-[30px]'>
                Website
              </p>
            </div>
            <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
              <img src={AdminPanel} alt='Admin Panel' />
              <p className='text-[14px] lg:text-lg font-semibold leading-[30px]'>
                Admin panel
              </p>
            </div>
            <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
              <img src={CrossPlatform} alt='CrossPlatform' />
              <p className='text-[14px] lg:text-lg overflow-hidden font-semibold leading-[30px]'>
                Crossplatform
              </p>
            </div>
          </div>
        </div>
        <div className='w-[50%] hidden lg:block  '>
          <img src={SMSUZ} alt='SMSuz Img' />
        </div>
      </div>
    </div>
  );
};

export default Smsuz;
