import Team from "../assets/images/team.svg";
import Develop from "../assets/images/develop.svg";
import ERP from "../assets/images/erp.svg";
import Interface from "../assets/images/interface.svg";
import Optimiz from "../assets/images/optimiz.svg";
import Consult from "../assets/images/consult.svg";

const Direction = () => {
  return (
    <div id='direction' className='mx-auto max-w-6xl px-4 py-[100px]'>
      <h1 className='mb-10 text-[40px] lg:text-[64px] text-center lg:text-left  font-extrabold leading-[64px] text-[#1b5bf7]'>
        Our services
      </h1>
      <div className='grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-6 '>
        <div className='h-[200px] w-full rounded-lg bg-[#F4F7FF] p-4 lg:p-8'>
          <img
            className='mb-6 h-[35px] w-[35px]'
            src={Team}
            alt='Icons'
          />
          <p className='lg:text-xl text-[16px]  font-semibold leading-[30px] text-[18191f]'>
            Team
          </p>
        </div>
        <div className='h-[200px] w-full rounded-lg bg-[#F4F7FF] p-4 lg:p-8'>
          <img
            className='mb-6 h-[35px] w-[35px]'
            src={Develop}
            alt='Icons'
          />
          <p className='lg:text-xl text-[16px]  font-semibold lg:leading-[30px] text-[18191f]'>
            Development of mobile applications
          </p>
        </div>
        <div className='h-[200px] w-full rounded-lg bg-[#F4F7FF] p-4 lg:p-8'>
          <img
            className='mb-6 h-[35px] w-[35px]'
            src={ERP}
            alt='Icons'
          />
          <p className='lg:text-xl text-[16px]  font-semibold lg:leading-[30px] text-[18191f]'>
            Development and implementation ERP systems
          </p>
        </div>
        <div className='h-[200px] w-full rounded-lg bg-[#F4F7FF] p-4 lg:p-8'>
          <img
            className='mb-6 h-[35px] w-[35px]'
            src={Interface}
            alt='Icons'
          />
          <p className='lg:text-xl text-[16px]  font-semibold lg:leading-[30px] text-[18191f]'>
            User interface, User experience design
          </p>
        </div>
        <div className='h-[200px] w-full rounded-lg bg-[#F4F7FF] p-4 lg:p-8'>
          <img
            className='mb-6 h-[35px] w-[35px]'
            src={Optimiz}
            alt='Icons'
          />
          <p className='lg:text-xl text-[16px]  font-semibold lg:leading-[30px] text-[18191f]'>
            Optimization IT consulting infrastructure
          </p>
        </div>
        <div className='h-[200px] w-full rounded-lg bg-[#F4F7FF] p-4 lg:p-8'>
          <img
            className='mb-6 h-[35px] w-[35px]'
            src={Consult}
            alt='Icons'
          />
          <p className='lg:text-xl text-[16px]  font-semibold lg:leading-[30px] text-[18191f]'>
            IT consulting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Direction;
