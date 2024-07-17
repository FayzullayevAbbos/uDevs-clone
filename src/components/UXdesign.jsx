import UX from "../assets/images/ux.svg";
import UI from "../assets/images/ui.svg";
import Prototyping from "../assets/images/prototyping.svg";
import MobileDesign from "../assets/images/mobile.svg";
import WebDesign from "../assets/images/web.svg";
import AtomicDesign from "../assets/images/atomic.svg";
import BG2 from "../assets/images/bg2.png";
import Phone2 from "../assets/images/phone2.png";
import Figma from "../assets/images/figma.svg";
import Sketch from "../assets/images/sketch.svg";
import Lottie from "../assets/images/lottie.svg";
import Illustrator from "../assets/images/illustrator.svg";

const UXdesign = () => {
  return (
    <div id='service3'>
      <div className='mx-auto max-w-6xl px-4 py-10 lg:py-20'>
        <h1 className='mb-10 text-[32px] lg:text-[64px] font-extrabold leading-[64px] text-[#1b5bf7]'>
          UI / UX design
        </h1>
        <div className='flex lg:flex-row flex-col items-center gap-10 justify-between'>
          <div className='lg:w-[45%] w-full order-2 lg:order-1'>
            <p className='mb-7 text-[16px] lg:text-2xl font-medium lg:leading-10 text-[#18191f]'>
              Our company takes a human-centered approach to design
            </p>
            <div className='mb-10 grid grid-cols-3 gap-4'>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={UX} alt='CRM Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  UX
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={UI} alt='E-learning Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  UI
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={Prototyping} alt='E-Commerce Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  Prototyping
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={MobileDesign} alt='POS Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  Mobile Design
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={WebDesign} alt='Email Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  Web Design
                </p>
              </div>
              <div className='w-full rounded-lg bg-[#E0E8FF] p-3'>
                <img src={AtomicDesign} alt='WareHouse Logo' />
                <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                  Atomic Design
                </p>
              </div>
            </div>
            <div>
              <p className='mb-8 text-[32px] font-extrabold leading-10 text-[#464359]'>
                Technologies
              </p>
              <div className='flex lg:gap-12 gap-3 overflow-hidden'>
                <div>
                  <img
                    className='mb-2 h-14 w-14'
                    src={Figma}
                    alt='Figma Logo'
                  />
                  <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                    Figma
                  </p>
                </div>
                <div>
                  <img
                    className='mb-2 h-14 w-14'
                    src={Sketch}
                    alt='Sketch Logo'
                  />
                  <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                    Sketch
                  </p>
                </div>
                <div>
                  <img
                    className='mb-2 h-14 w-14'
                    src={Lottie}
                    alt='Lottie Logo'
                  />
                  <p className='lg:text-lg text-sm font-semibold leading-[30px]'>
                    Lottie
                  </p>
                </div>
                <div>
                  <img
                    className='mb-2 h-14 w-14'
                    src={Illustrator}
                    alt='Illustrator Logo'
                  />
                  <p className='lg:text-lg text-sm font-semibold overflow-hidden leading-[30px]'>
                    Illustrator
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative order-1 lg:order-2 '>
            <img
              className='lg:h-[426px] w-[500px]'
              src={BG2}
              alt='Laptop Bg Img'
            />
            <img
              className='absolute top-10 left-2 sm:left-5 lg:left-10'
              src={Phone2}
              alt='Laptop Img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXdesign;
