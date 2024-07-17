/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import Contact from "../assets/images/contact.svg";
import Analysis from "../assets/images/analysis.svg";
import Offer from "../assets/images/offer.svg";
import Team from "../assets/images/team.svg";
import Start from "../assets/images/start.svg";

const OurWork = () => {
  const items = [
    {
      img: Contact,
      title: " Contact",
      text: "Send us your project request or project idea.",
    },
    {
      img: Analysis,
      title: "Analysis",
      text: "We will contact you to clarify your project requirements",
    },
    {
      img: Offer,
      title: "Offer",
      text: "We will contact you to clarify your project requirements",
    },
    {
      img: Team,
      title: "Team",
      text: " We provide a team for your requirements.",
    },
    {
      img: Start,
      title: " Start",
      text: "You will get to know the team and we`ll get started",
    },
  ];
  return (
    <div className='py-20'>
      <div className='px-4'>
        <div className='mx-auto max-w-6xl'>
          <h1 className='mb-10 text-[32px] lg:text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]'>
            How we work!
          </h1>
        </div>
        <div className='lg:mx-14 flex flex-col lg:flex-row gap-10'>
          {items.map((item) => (
            <div className='flex w-full  flex-row  gap-4 lg:flex-col items-center justify-center'>
              <>
                <img
                  className=' h-[60px] lg:h-20 w-[60px] lg:w-20'
                  src={item.img}
                  alt='Contact'
                />
                <div className='w-full flex flex-col lg:items-center items-start '>
                  <span className='text-xl  font-bold leading-7'>
                    {item.title}
                  </span>
                  <p className=' w-full font-normal text-[14px] lg:text-[16px] text-left lg:text-center leading-[26px]'>
                    {item.text}
                  </p>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
