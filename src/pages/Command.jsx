import Hundred from "../assets/images/100.svg";
import Counter from "../components/Counter";

const Command = () => {
  return (
    <div id='command' className='bg-[#F4F7FF]'>
      <div className='mx-auto px-4 max-w-6xl py-5 lg:py-20'>
        <div className='flex lg:flex-row flex-col w-full items-center justify-between'>
          <h1 className='mb-10 lg:hidden text-[32px] text-left w-full lg:text-[64px] font-medium lg:font-extrabold lg:leading-[64px] text-[#1b5bf7]'>
            Team
          </h1>
          <div className='lg:w-[45%] w-full lg:order-1  order-2  pt-5 '>
          <h1 className='mb-10 lg:flex hidden text-[32px] text-left w-full lg:text-[64px] font-medium lg:font-extrabold lg:leading-[64px] text-[#1b5bf7]'>
            Team
          </h1>
            <p className='mb-7 text-[16px] lg:text-xl font-normal lg:font-medium leading-7 lg:leading-10 text-[#464359]'>
              For each project, we form a team that includes a project
              manager, business analyst, UI / UX designer, DevOps, QA
              engineer, backend and front-end developers.
            </p>
            <Counter end={100} duration={3000} />
            <p className='lg:text-[40px] text-[24px] font-medium lg:font-extrabold leading-[72px] text-[#464359]'>
              Dedicated team
            </p>
          </div>
          <div className="lg:order-2 order-1" >
            <img src={Hundred} alt='Img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Command;
