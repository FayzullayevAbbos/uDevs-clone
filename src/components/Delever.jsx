import DeleverApp from "../assets/images/delever_app.png";
import DeleverImg from "../assets/images/develerimg.svg";
import Delivery from "../assets/images/delivery.svg";

import Website from "../assets/images/website.svg";
import AdminPanel from "../assets/images/adminpanel.svg";
import CrossPlatform from "../assets/images/crossplatform.svg";
import WebDesign from "../assets/images/webdesign.svg";
import MobileDesign from "../assets/images/mobile.svg";

const Delever = () => {
  return (
    <div id='portfolio1' className='py-5 lg:py-20'>
      <div className='mx-auto flex lg:flex-row flex-col max-w-6xl items-center gap-8 px-4'>
       
        <div className='lg:w-[50%] w-full'>
          <img className='mb-8 lg:hidden block' src={DeleverImg} alt='Delever Text' />
          <span className='mb-8 lg:hidden flex w-[118px] items-center gap-2 rounded-full bg-[#FFDDD3] px-4 py-1'>
            <img src={Delivery} alt='Delivery Img' />
            <p className='text-sm text-[#FF5722]'>Delivery</p>
          </span>
          <img src={DeleverApp} alt='DeleverApp Img' />
        </div>
        
        <div className='lg:w-[50%] w-full'>
          <img className='mb-8 hidden lg:block' src={DeleverImg} alt='Delever Text' />
          <span className='mb-8 hidden lg:flex w-[118px] items-center gap-2 rounded-full bg-[#FFDDD3] px-4 py-1'>
            <img src={Delivery} alt='Delivery Img' />
            <p className='text-sm text-[#FF5722]'>Delivery</p>
          </span>
          <p className='mb-8 text-[16px] lg:text-xl font-semibold text-[#464359]'>
            Delever - Delivery service automation targeted at both
            consumers and restaurants.
          </p>
          <h3 className='mb-6 text-2xl font-semibold'>
            What we did?
          </h3>
          <div className='grid grid-cols-3 gap-6'>
            <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
              <img src={Website} alt='Website' />
              <p className='text-[14px] lg:text-lg  font-semibold leading-[30px]'>
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
              <p className='text-[14px] lg:text-lg font-semibold overflow-hidden leading-[30px]'>
                Crossplatform
              </p>
            </div>
            <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
              <img src={WebDesign} alt='WebDesign' />
              <p className='text-[14px] lg:text-lg font-semibold leading-[30px]'>
                Web design
              </p>
            </div>
            <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
              <img src={MobileDesign} alt='MobileDesign' />
              <p className='text-[14px] lg:text-lg font-semibold leading-[30px]'>
                Mobile design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delever;
