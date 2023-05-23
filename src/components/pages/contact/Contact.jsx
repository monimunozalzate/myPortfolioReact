import { Element } from "react-scroll";
import Navbar from "../../custom/navbar/Navbar";
import { Box } from "@mui/material";
import styles from "./Contact.module.css";
import ContactFormContainer from "../../custom/contactForm/ContactFormContainer";

const Contact = () => {
  return (
    <Element
      name="ContactID"
      style={{ backgroundColor: "#242424", position:'relative' }}
    >
      <ContactFormContainer />
      <img
        src="src/assets/images/pattern-rings.svg"
        alt="rings"
        className={styles.bottomRings}
      />
      <hr className={styles.bottomHr} />
      <Box className={styles.footerContainer}>
        <Navbar />
      </Box>
    </Element>
  );
};

export default Contact;
