import Bgpc from "../assets/images/bgpc.png";
import Laptop from "../assets/images/laptop.png";
import CRM from "../assets/images/crm.svg";
import Learning from "../assets/images/learning.svg";
import Commerce from "../assets/images/commerce.svg";
import POS from "../assets/images/pos.svg";
import Email from "../assets/images/email.svg";
import WareHouse from "../assets/images/warehouse.svg";

const ErpSystems = () => {
  return (
    <div id='service2' className='bg-[#F4F7FF]'>
      <div className='mx-auto max-w-6xl px-4  pb-5 lg:py-20'>
        <h1 className='mb-10 text-[32px] lg:text-[64px] font-medium lg:font-extrabold leading-[64px] text-[#1b5bf7]'>
          ERP systems
        </h1>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <div className='relative'>
            <img
              className='lg:h-[426px] w-[500px]'
              src={Bgpc}
              alt='Laptop Bg Img'
            />
            <img
              className='absolute top-12'
              src={Laptop}
              alt='Laptop Img'
            />
          </div>
          <div className='lg:w-[500px] mt-5 w-full'>
            <p className='mb-7 text-[16px] lg:text-2xl lg:font-medium lg:leading-10 text-[#18191f]'>
              IT Systems of any level of complexity at a convenient
              time for you
            </p>
            <div className='grid grid-cols-3 gap-4'>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={CRM} alt='CRM Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  CRM
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={Learning} alt='E-learning Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  eLearning
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={Commerce} alt='E-Commerce Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  E-Commerce
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={POS} alt='POS Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  POS
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={Email} alt='Email Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  Sms/Email
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={WareHouse} alt='WareHouse Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  Warehouse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpSystems;
