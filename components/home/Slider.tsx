"use client";

import Image  from "next/image";


const ImageSlider = () => {


  return (
    <div className="marque-container  h-full w-full flex items-center justify-center  text-base my-10  min-h-[450px] md:min-h-[350px] ">
    <div className="Marquee w-full box-border p-4  font-light flex items-center overflow-hidden   ">
      <div className="Marquee-content flex gap-4 animate-marquee hover:animate-pause  ">

        <div className="Marquee-tag w-62  inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110">
            <Image width={300} height={300} src="https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg" className="rounded-md" alt=""  />
          </div>
      
          
          <div className="Marquee-tag w-62   inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110">
            <Image width={300} height={300} src="https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg" className="rounded-md" alt=""  />
          </div>
      
          
          <div className="Marquee-tag w-62  inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110">
            <Image width={300} height={300} src="https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg" className="rounded-md" alt="" />
          </div>
      
          
    
          <div className="Marquee-tag w-62  inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110">
            <Image width={300} height={300} src="https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg" className="rounded-md" alt="" />
          </div>


           <div className="Marquee-tag w-62  inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110">
            <Image width={300} height={300} src="https://www.themealdb.com/images/media/meals/xd9aj21740432378.jpg" className="rounded-md" alt="" />
          </div>  
          
           <div className="Marquee-tag w-62  inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110">
            <Image width={300} height={300} src="https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg" className="rounded-md" alt="" />
          </div>   
          
           <div className="Marquee-tag w-62  inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110">
            <Image width={300} height={300} src="https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg" className="rounded-md" alt="" />
          </div> 
          
          <div className="Marquee-tag w-62  inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110">
            <Image width={300} height={300} src="https://www.themealdb.com/images/media/meals/0206h11699013358.jpg" className="rounded-md" alt="" />
          </div> 
          
          <div className="Marquee-tag w-62  inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110">
            <Image width={300} height={300} src="https://www.themealdb.com/images/media/meals/60oc3k1699009846.jpg" className="rounded-md" alt="" />
          </div>
  
                   
                    
      </div>
    </div>
    
    </div>
  );
};

export default ImageSlider;