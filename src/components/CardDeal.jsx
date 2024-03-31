import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover superior deals <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Elevating your global presence with expert lead-generation solutions.

Empowering businesses worldwide through cutting-edge eCommerce strategies.
      </p>

      <Button styles={`mt-10`} link="/contact" />
    </div>

    <div className={layout.sectionImg}>
      <img
        src="https://res.cloudinary.com/doetxxo94/image/upload/v1711822396/TopShelfBrands/lead-gen_fjjwop.png"
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default CardDeal;
