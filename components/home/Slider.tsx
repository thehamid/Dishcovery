'use client'
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    "https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg",
    "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",
    "https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg",
    "https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg",
    "https://www.themealdb.com/images/media/meals/xd9aj21740432378.jpg",
    "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
    "https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg",
    "https://www.themealdb.com/images/media/meals/0206h11699013358.jpg",
    "https://www.themealdb.com/images/media/meals/60oc3k1699009846.jpg",
    "/placeholder.jpg",
  ];

  return (
    <div className="marque-container h-full w-full flex items-center justify-center text-base my-10 min-h-[450px] md:min-h-[350px]">
      <div className="Marquee w-full box-border p-4 font-light flex items-center overflow-hidden">
        <div className="Marquee-content flex gap-4 animate-marquee hover:animate-pause">
          {/* اولین کپی از تصاویر */}
          {images.map((src, index) => (
            <div
              key={`first-${index}`}
              className="Marquee-tag w-62 inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110"
            >
              <Image
                width={300}
                height={300}
                src={src}
                className="rounded-md"
                alt={`Slide ${index + 1}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.jpg";
                }}
              />
            </div>
          ))}
          {/* دومین کپی از تصاویر */}
          {images.map((src, index) => (
            <div
              key={`second-${index}`}
              className="Marquee-tag w-62 inline-flex items-center justify-center transition-all duration-900 ease-in-out hover:scale-110"
            >
              <Image
                width={300}
                height={300}
                src={src}
                className="rounded-md"
                alt={`Slide ${index + 1} Copy`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.jpg";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;