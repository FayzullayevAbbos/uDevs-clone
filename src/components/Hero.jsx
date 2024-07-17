/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import HeroImg from "../assets/images/hero.svg";
import Logo from "../assets/images/logo.svg";
import Typing from "./Typing";

const Hero = () => {
  const texts = [
    "Development of mobile applications",
    "Development and implementation ERP systems",
    "User interface, user experience and design",
    "Optimization IT consulting insfrastructure",
  ];

  return (
    <div className='mx-auto mb-20 px-4 flex h-[100Vh] background max-w-6xl  justify-between pt-24 md:pt-36'>
      <div className='flex flex-col lg:flex-row w-full bg-none items-center justify-between'>
        <div className='w-[45%] flex flex-col lg:items-start items-center '>
          <img
            className='mb-6 w-[125px] lg:w-[265px] '
            src={Logo}
            alt='Site Logo'
          />
          <p className='mb-5 text-center lg:text-start text-[24px] lg:text-[40px] font-extrabold md:leading-[54px] text-[#464359]'>
            IT-Outsourcing Company
          </p>
          <p className='mb-6 text-[24px] text-center lg:text-start lg:text-[40px] font-extrabold md:leading-[54px] text-[#1b5bf7]'>
            <Typing texts={texts} />
          </p>
          <a href='#contact'>
            <button className='mt-4 hidden lg:block h-14 w-60 rounded-lg bg-[#1b5bf7] text-xl font-semibold leading-[30px] text-white transition duration-300 hover:scale-[1.1]'>
              Contact
            </button>
          </a>
        </div>
        <div>
          <img src={HeroImg} alt='Hero Img' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
