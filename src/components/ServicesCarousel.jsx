import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../components/index";
export default function ServicesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // w-3/4
    <div className="m-auto font-poppins" style={{ borderRadius: '10px', padding: '10px'}} id="services">
      <div className="mt-20">
        <Slider {...settings} className=" rounded-[20px] box-shadow">
          <div className="w-[100%] mb-[2rem] style={{ borderRadius: '10px' }}">
            {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}
            <img
              src="https://res.cloudinary.com/doetxxo94/image/upload/v1711831640/TopShelfBrands/Lead_Gen_ilhgqd.png"
              alt="AI & Automation"
              className="mb-[1rem] style={{ borderRadius: '10px' }}"
            />
            <h1 className="text-white text-center" >Lead-generation </h1>
            <p className="text-slate-500 text-center mb-[1rem] p-[20px] h-[250px]">
            Experience the ultimate in global efficiency and savings with our cutting-edge Save Wizard solution, 
            revolutionizing how you manage and optimize resources worldwide.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          
          <div>
            <img
              src="https://res.cloudinary.com/doetxxo94/image/upload/v1711831640/TopShelfBrands/General_Sales_nei4uu.png"
              alt="Business Planning"
              className="mb-[1rem]"
            />
            <h1 className="text-white text-center   ">Business Planning</h1>
            <p className="text-slate-500 text-center mb-[1rem] p-[20px] h-[250px]">
              Crafting a roadmap for success is effortless with our tailored
              business planning services. Let us guide you towards your goals
              with precision and efficiency.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          
          <div>
            <img
              src="https://res.cloudinary.com/doetxxo94/image/upload/v1711831640/TopShelfBrands/Content_dnuucv.png"
              alt="Content Creation"
              className="mb-[1rem]"
            />
            <h1 className="text-white text-center   ">Content Creation</h1>
            <p className="text-slate-500 text-center mb-[1rem] p-[20px] h-[250px]">
              Let Top Shelf Brands take your content to new heights with
              our exceptional content creation services. From captivating copy
              to engaging multimedia, our team of creative professionals is
              dedicated to crafting content that resonates with your audience
              and achieves your business objectives.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/doetxxo94/image/upload/v1711831640/TopShelfBrands/Ecommerce_xochst.png"
              alt="E-Commerce"
              className="mb-[1rem]"
            />
            <h1 className="text-white text-center   ">E-Commerce</h1>
            <p className="text-slate-500 text-center mb-[1rem] p-[20px] h-[250px]">
              Step into the digital marketplace with confidence, supported by
              Top Shelf Brands comprehensive e-commerce services. Our
              team specializes in creating tailored solutions to help you thrive
              in the competitive world of online retail.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          
          <div>
            <img
              src="https://res.cloudinary.com/doetxxo94/image/upload/v1711831641/TopShelfBrands/Marketing_izd3ks.png"
              alt="Marketing"
              className="mb-[1rem]"
            />
            <h1 className="text-white text-center   ">Marketing</h1>
            <p className="text-slate-500 text-center mb-[1rem] p-[20px] h-[250px]">
              Experience the power of strategic marketing with Delta Business
              Solution. Our dedicated team of marketing specialists is committed
              to crafting innovative campaigns that captivate audiences, drive
              engagement, and ultimately, boost your bottom line.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/doetxxo94/image/upload/v1711831641/TopShelfBrands/Project_management_wblkvl.png"
              alt="Project Management"
              className="mb-[1rem]"
            />
            <h1 className="text-white text-center   ">Project Management</h1>
            <p className="text-slate-500 text-center mb-[1rem] p-[20px] h-[250px]">
              Simplify your project journey and ensure success with Delta
              Business Solution's expert project management services. Our
              seasoned professionals bring a wealth of experience to the table,
              overseeing every aspect of your project from initiation to
              completion.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          
        </Slider>
      </div>
    </div>
  );
}
