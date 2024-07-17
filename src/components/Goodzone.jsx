
import Goodzone from "../assets/images/goodzone.png";
import GoodzoneText from "../assets/images/goodzonetext.png";
import Ecommerce from "../assets/images/ecommerce.svg";

import Website from "../assets/images/website.svg";
import AdminPanel from "../assets/images/adminpanel.svg";
import CrossPlatform from "../assets/images/crossplatform.svg";
import WebDesign from "../assets/images/webdesign.svg";
import MobileDesign from "../assets/images/mobile.svg";

const GoodzoneFu = () => {
  return (
    <div id="portfolio3" className="py-20">
      <div className="mx-auto flex flex-col lg:flex-row max-w-6xl items-center gap-8 px-4">
        <div className="lg:w-[50%] w-full">
          <img className="  lg:hidden block" src={GoodzoneText} alt="Goodzone Text" />
          <span className="mb-8 lg:hidden flex w-[150px] items-center gap-2 rounded-full bg-[#FDCCCC] px-4 py-1">
            <img src={Ecommerce} alt="Ecommerce Img" />
            <p className="text-sm text-[#F72626]">E-commerce</p>
          </span>
          <img className="" src={Goodzone} alt="Goodzone Img" />
        </div>

        <div className="lg:w-[50%] w-full">
          <img className="mb-8  hidden lg:block" src={GoodzoneText} alt="Goodzone Text" />
          <span className="mb-8 hidden  lg:flex w-[150px] items-center gap-2 rounded-full bg-[#FDCCCC] px-4 py-1">
            <img src={Ecommerce} alt="Ecommerce Img" />
            <p className="text-sm text-[#F72626]">E-commerce</p>
          </span>
          <p className="mb-8 text-[16px] lg:text-xl font-semibold text-[#464359]">
            Goodzone - Internet shop of household appliances in Uzbekistan.
          </p>
          <h3 className="mb-6 text-2xl font-semibold">What we did?</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={Website} alt="Website" />
              <p className="text-[14px] lg:text-lg font-semibold leading-[30px]">Website</p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={AdminPanel} alt="Admin Panel" />
              <p className="text-[14px] lg:text-lg font-semibold leading-[30px]">
                Admin panel
              </p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={CrossPlatform} alt="CrossPlatform" />
              <p className=" overflow-hidden text-[14px] lg:text-lg font-semibold leading-[30px]">
                Crossplatform
              </p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={WebDesign} alt="WebDesign" />
              <p className="text-[14px] lg:text-lg font-semibold leading-[30px]">Web design</p>
            </div>
            <div className="w-full rounded-lg bg-[#E0E8FF] p-3">
              <img src={MobileDesign} alt="MobileDesign" />
              <p className="text-[14px] lg:text-lg font-semibold leading-[30px]">
                Mobile design
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GoodzoneFu;
