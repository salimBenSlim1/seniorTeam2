import React from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";



export const Login = () => {
  return (
    <div>
      <nav >
        
        <div className='flex justify-center gap-8 mt-11 mb-6'>
        <h1 className='absolute left-20 font-bold text-xl'>Exlusive</h1> 
        <NavLink to={'/home'} >Home</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/AboutUs'}>AboutUs</NavLink>
        <NavLink to={'/'}>Singup</NavLink>
       
        </div>
       </nav>
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-bg w-[1440px] h-[1561px]">
        <div className="items-center gap-[129px] top-[200px] inline-flex relative">
          <div className="relative w-[805px] h-[781px] bg-[#cbe4e8] rounded-[0px_4px_4px_0px] overflow-hidden">
            <img
              className="absolute w-[805px] h-[706px] top-[75px] left-0"
              alt="Dl beatsnoop"
              src="https://i.imgur.com/nxyvDFz.png"
            />
          </div>
          <hr className='text-gray-300'/>
          <div className="flex-col items-start gap-[40px] flex-[0_0_auto] inline-flex relative">
            <div className="flex-col items-start gap-[48px] flex-[0_0_auto] inline-flex relative">
              <div className="flex-col items-start gap-[24px] flex-[0_0_auto] inline-flex relative">
                <div className="relative w-fit mt-[-1.00px] font-heading-36px-medium font-[number:var(--heading-36px-medium-font-weight)] text-text-2 text-[length:var(--heading-36px-medium-font-size)] tracking-[var(--heading-36px-medium-letter-spacing)] leading-[var(--heading-36px-medium-line-height)] whitespace-nowrap [font-style:var(--heading-36px-medium-font-style)]">
                  Log in to Exclusive
                </div>
                <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                  Enter your details below
                </div>
              </div>
              <div className="flex-col items-start gap-[40px] flex-[0_0_auto] inline-flex relative">
                <div className="flex-col items-start gap-[8px] flex-[0_0_auto] inline-flex relative">
                  <div className="relative w-fit mt-[-1.00px] opacity-40 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                    <input type="text" placeholder="Enter your email" className="w-96 h-9"/>
                  </div>
                </div>
                <div className="flex-col items-start gap-[8px] flex-[0_0_auto] inline-flex relative">
                  <div className="relative w-fit mt-[-1.00px] opacity-40 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                    <input type="text" placeholder="Enter your password" className="w-96 h-9"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center gap-[87px] flex-[0_0_auto] inline-flex relative">
              <div className="flex-col items-start gap-[16px] flex-[0_0_auto] inline-flex relative">
                <Button button="primary" className="!flex-[0_0_auto]" hover={false} text="Log In" />
              </div>
              <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-secondary-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                Forget Password?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};