import React from "react";
import {
  ContactHead,
  Footer,
  Navbar,
  AboutCard,
  ExtraCard,
  OurTeam,
} from "../components";
import styles from "../style";
import { data } from "../constants/index";
import { imageData } from "../constants/index";
import { ourTeam } from "../constants/index";
// import '../index.css'
// console.log(imageData);
const AboutPage = () => {
  // console.log(data);
  return (
    <div>
      <div className="bg-primary  w-full overflow-hidden min-h-[100vh] ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div
          // ${styles.flexCenter}`
          className={`bg-primary text-white mt-[5rem] mb-[2rem]  `}
        >
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          <ContactHead
            text="We are Top Shelf Brands, a global leader in lead-generation and eCommerce solutions. As a team of innovative designers, insightful business analysts, strategic thinkers, 
            compelling content writers, and efficient project managers, we synergize our talents to drive a result-oriented design process.           "
            heading="Empowering the world with Top Shelf"
          />
          <div className="flex flex-wrap justify-evenly items-center ">
            {imageData.map((data) => (
              <AboutCard data={data} key={data?.id} />
            ))}
          </div>
        </div>
        <div className={`${styles.heading2} mb-2  text-center`}>Our Values</div>
        <div className="flex flex-col items-center justify-center mb-[2rem]">
          {data.map((data) => (
            <ExtraCard data={data} key={data?.id} />
          ))}
        </div>

        {/* <div className="flex flex-wrap justify-around ">
          {ourTeam.map((data) => (
            <OurTeam data={data} key={data?.id} />
          ))}
        </div> */}

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
