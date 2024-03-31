import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src="https://res.cloudinary.com/doetxxo94/image/upload/v1711822053/TopShelfBrands/ax7gwmq5yyi3dwfwoupq.png"
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Effortlessly oversee your <br className="sm:block hidden" /> billing & invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Elite solutions tailored for global lead-generation and eCommerce success. 
      Embrace excellence in managing your finances while focusing on expanding your online presence.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;
