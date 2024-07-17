import SiteLogo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className='bg-[#F4F7FF]'>
      <div className='mx-auto max-w-6xl px-4 pt-12'>
        <div className='flex justify-center'>
          <img className='w-28' src={SiteLogo} alt='Site Logo' />
        </div>
        <div className='flex  flex-col lg:flex-row  items-center lg:items-start gap-6  text-center lg:text-left justify-between border-b border-[#C8D8FD] pb-8 pt-11'>
          <div>
            <p className='mb-4 text-xl font-semibold'>About us</p>
            <ul className='flex flex-col gap-y-2'>
              <li>
                <a
                  href='#direction'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Direction
                </a>
              </li>
              <li>
                <a
                  href='#command'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Command
                </a>
              </li>
              <li>
                <a
                  href='#tools'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href='#clients'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Clients
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className='mb-4 text-xl font-semibold'>Services</p>
            <ul className='flex flex-col gap-y-2'>
              <li>
                <a
                  href='#service1'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Development of mobile applications
                </a>
              </li>
              <li>
                <a
                  href='#service2'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Development and implementation ERP systems
                </a>
              </li>
              <li>
                <a
                  href='#service3'
                  className='text-[#1b5bf7] hover:underline'
                >
                  User interface, User experience design
                </a>
              </li>
              <li>
                <a
                  href='#service4'
                  className='text-[#1b5bf7] hover:underline'
                >
                  IT consulting
                </a>
              </li>
              <li>
                <a
                  href='#service5'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Optimization IT consulting infrastructure
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className='mb-4 text-xl font-semibold'>Portfolio</p>
            <ul className='flex flex-col gap-y-2'>
              <li>
                <a
                  href='#portfolio1'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Delever
                </a>
              </li>
              <li>
                <a
                  href='#portfolio2'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Sms.uz
                </a>
              </li>
              <li>
                <a
                  href='#portfolio3'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Goodzone
                </a>
              </li>
              <li>
                <a
                  href='#portfolio4'
                  className='text-[#1b5bf7] hover:underline'
                >
                  Iman
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='py-6'>
          <p className='text-sm leading-6 text-[#1b5bf7]'>
            ©2024 Udevs. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
