import React, {useEffect} from 'react'
import img from '../images/niketic.svg'
import shoe from '../images/b1.png'
import person from '../images/c1.jpeg'
import logo from '../images/logo.png'

import { AiOutlinePlus } from 'react-icons/ai'

import AOS from 'aos';
import "aos/dist/aos.css";


const Product = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, []);


  return (
   <div className='relative'>
     
      <div className='wrapper w-[40rem] h-[30rem] border border-gray-300 mx-auto p-10'>

          <div className="circle w-6 h-6 border border-gray-100 rounded-full absolute left-0 top-0"></div>

          <div className="circle w-6 h-6 border border-gray-100 rounded-full absolute right-0 top-0">

            <div className='w-10 h-10 absolute left-0 top-0 rounded-full border border-gray-200'></div>
            <div className='w-6 h-6 absolute left-5 top-5 rounded-full border-4 border-gray-200'></div>
          </div>


          {/* card */}

     <div className="card w-full h-full rounded-2xl bg-gray-200 flex flex-wrap shadow-3xl">

       {/* left side */}
    
          <div className="left-side shadow-3xl w-1/2 bg-gradient bg-gradient-to-bl from-pink-700 to-purple-700 rounded-2xl transform scale-110">

                  {/* logo */}
                  
            <div className="logo absolute left-0 top-36">
              <img src={img} alt="nike shoe" className='fill-current h-12 w-20'/>
            </div>

            {/* number */}

            <div className='absolute -right-12 top-10 '>
              <h5 className='absolute font-bold text-gray-200 text-sm top-32 left-10'>size</h5>
              <span className='font-bold text-[12rem] bg-gradient bg-gradient-to-bl from-purple-800 to-red-900 text-transparent leading-none bg-clip-text text-shadow' data-aos="fade-left" data-aos-delay="600">4<span className=''>5</span></span>
            </div>

            {/* image shoe*/}

              <div className="shoe absolute bottom-20 left-6 mx-auto">
            <img src={shoe} alt="nike shoe" className='w-56 transform hover:-rotate-45 hover:scale-125 transition-all duration-300' />
              </div>

              {/* person */}

              <div className=''>
                <img src={person} alt="" className='w-full h-full object-cover'/>
              </div>

              <div className="crosses w-8 h-8 rounded-full bg-pink-900 text-white absolute top-48 left-8 p-2 cursor-pointer transform hover:scale-125 transition-all">
                <AiOutlinePlus size={16}/>
              </div>

              <div className="crosses w-8 h-8 rounded-full bg-purple-900 text-white absolute bottom-20 right-0 p-2 cursor-pointer transform hover:scale-125 transition-all">
                <AiOutlinePlus size={16}/>
              </div>

          {/* dots */}

          <div className='dots w-full absolute left-0 bottom-4  flex items-center justify-center space-x-2 cursor-pointer'>
              <span className='w-4 h-4 bg-gray-200 rounded-full block hover:bg-red-500'></span>
              <span className='w-4 h-4 bg-gray-200 rounded-full block hover:bg-red-500'></span>
              <span className='w-4 h-4 bg-gray-200 rounded-full block hover:bg-red-500'></span>
          </div>

          </div>


          {/* right side */}

          <div className="right-side w-1/2">
               
                {/* logo */}

              <div className="flex justify-end p-4">
                
                <img src={logo} alt="" className='w-24'/>
              </div>

              <div className="price-list ml-14">
                <span className='price font-bold text-3xl text-gray-800 '>$5,000</span>

                <p className='text-sm text-gray-700 leading-0 py-2 max-w-[10rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

                      {/* details */}
              <div className="center-text">
                  <div className="flex flex-col space-y-2 text-xl text-gray-600">
                      
                      <div className="size">

                        <div className="flex px-12 text-sm">
                          
                          <div className="1/3 bg-gray-400 p-2 capitalize">size</div>
                          
                          <div className="2/3 p-2 flex justify-center space-x-4">

                            <label type='radio' className='cursor-pointer'>
                              <span>S </span>
                            <input type="radio"  name='size' className='hidden'/>
                            </label>

                            <label type='radio' className='cursor-pointer'>
                              <span>M </span>
                            <input type="radio"  name='size' className='hidden'/>
                            </label>

                            <label type='radio' className='cursor-pointer'>
                              <span>L </span>
                            <input type="radio"  name='size' className='hidden'/>
                            </label>

                            <label type='radio' className='cursor-pointer'>
                              <span>XL </span>
                            <input type="radio"  name='size' className='hidden'/>
                            </label>

                            <label type='radio' className='cursor-pointer'>
                              <span>XXL </span>
                            <input type="radio"  name='size' className='hidden'/>
                            </label>

                          </div>
                        </div>
                      </div>


                      <div className="color">

                        <div className="flex px-12 text-sm">
                          
                          <div className="1/3 bg-gray-400 p-2 capitalize">color</div>
                          
                          <div className="2/3 p-2 flex justify-center space-x-4 items-center">

                            <label type='radio' className='cursor-pointer'>
                              <span className='w-3 h-3 rounded-full ring ring-pink-600 flex items-center justify-center'>
                                  <span className='w-1 h-1 rounded-full bg-black block'>

                                  </span>

                              </span>
                            <input type="radio"  name='size' className='hidden'/>
                            </label>

                            <label type='radio' className='cursor-pointer'>
                              <span className='w-3 h-3 rounded-full ring ring-blue-800 flex items-center justify-center'>
                                  <span className='w-1 h-1 rounded-full bg-black block'>

                                  </span>

                              </span>
                            <input type="radio"  name='size' className='hidden'/>
                            </label>

                            <label type='radio' className='cursor-pointer'>
                              <span className='w-3 h-3 rounded-full ring ring-green-600 flex items-center justify-center'>
                                  <span className='w-1 h-1 rounded-full bg-black block'>

                                  </span>

                              </span>
                            <input type="radio"  name='size' className='hidden'/>
                            </label>

                            


                          </div>
                        </div>
                      </div>

                  


                  </div>

                  <div className="btn mt-10 flex justify-center items-center">
                    <button className='relative bg-pink-600 textwhite p-3 rounded-full w-2/3  uppercase hover:text-white hover:bg-pink-800 transition-all ease-in-out'>buy now</button>
                  </div>


              </div>
        
        
        
        
          </div>

          </div>
            
       </div>
   </div>
  )
}

export default Product