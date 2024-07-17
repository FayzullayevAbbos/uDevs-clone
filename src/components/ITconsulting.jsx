import Frontend from "../assets/images/frontend.svg";
import Backend from "../assets/images/backend.svg";
import Architecture from "../assets/images/architecture.svg";
import Devops from "../assets/images/devops2.svg";
import UxUi from "../assets/images/uxui.svg";
import QA from "../assets/images/qa.svg";
import Bg3 from "../assets/images/ITconsulting.svg";

const ITconsulting = () => {
  return (
    <div id='service5' className='mx-auto max-w-6xl px-4 py-5 lg:py-20'>
      <h1 className='mb-10 text-[32px] lg:text-[64px] font-extrabold lg:leading-[64px] text-[#1b5bf7]'>
        IT consulting
      </h1>
      <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between'>
        <div className='w-full lg:w-[45%] order-2 lg:order-1'>
          <p className='mb-7 text-[16px lg:text-2xl font-medium leading-10 text-[#18191f]'>
            We can improve the qualifications of your eemployees
            thereby increasing the efficiencyof your company
          </p>
          <div className='mb-10 grid grid-cols-3 gap-4'>
            <div className='w-full rounded-lg bg-[#F4F7FF] p-3'>
              <img
                className='h-14 w-14'
                src={Frontend}
                alt='Frontend Logo'
              />
              <p className='lg:text-lg text-sm  font-semibold leading-[30px]'>
                Frontend
              </p>
            </div>
            <div className='w-full rounded-lg bg-[#F4F7FF] p-3'>
              <img
                className='h-14 w-14'
                src={Backend}
                alt='Backend Logo'
              />
              <p className='lg:text-lg text-sm  font-semibold leading-[30px]'>
                Backend
              </p>
            </div>
            <div className='lg:text-lg text-sm  rounded-lg bg-[#F4F7FF] p-3'>
              <img
                className='h-14 w-14'
                src={Architecture}
                alt='Architecture Logo'
              />
              <p className='lg:text-lg text-sm  font-semibold leading-[30px]'>
                Architecture
              </p>
            </div>
            <div className='w-full rounded-lg bg-[#F4F7FF] p-3'>
              <img
                className='h-14 w-14'
                src={Devops}
                alt='DevOps Logo'
              />
              <p className='lg:text-lg text-sm  font-semibold leading-[30px]'>
                DevOps
              </p>
            </div>
            <div className='w-full rounded-lg bg-[#F4F7FF] p-3'>
              <img
                className='h-14 w-14'
                src={UxUi}
                alt='UX/UI Logo'
              />
              <p className='lg:text-lg text-sm  font-semibold leading-[30px]'>
                UX/UI
              </p>
            </div>
            <div className='w-full rounded-lg bg-[#F4F7FF] p-3'>
              <img className='h-14 w-14' src={QA} alt='QA Logo' />
              <p className='lg:text-lg text-sm  font-semibold leading-[30px]'>
                QA{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img className='w-[500px]' src={Bg3} alt='Bg Image' />
        </div>
      </div>
    </div>
  );
};

export default ITconsulting;
