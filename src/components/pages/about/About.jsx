import { Box } from "@mui/material";
import Info from "../../custom/info/Info";
import Languages from "../../custom/languages/Languages";
import styles from './About.module.css';

const About = () => {
  return (
    <Box  className={styles.aboutContainer} id='about'>
       <img
        src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341047/react-portfolio-frontendMentor/images/pattern-rings_px1dhk.svg"
        alt="rings"
        className={styles.rings}
      />
      <Info />
      <Languages />
      <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341047/react-portfolio-frontendMentor/images/pattern-rings_px1dhk.svg" alt="rings" className={styles.bottomRing} />
    </Box>
  );
};

export default About;
