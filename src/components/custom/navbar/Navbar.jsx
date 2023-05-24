import styles from "../info/Info.module.css";
import { Box, IconButton, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box className={styles.navbar}>
      <Typography variant="body1" color={"#FFFFFF"} className={styles.name}>
        monicaMunoz
      </Typography>
      <Box className={styles.iconsBox}>
        <a href="https://github.com/monimunozalzate">
          <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341046/react-portfolio-frontendMentor/images/icon-github_w1nlic.svg" alt="github" />
        </a>
        <a href="https://www.frontendmentor.io/profile/monimunozalzate">
          <img
            src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341045/react-portfolio-frontendMentor/images/icon-frontend-mentor_vrfs6h.svg"
            alt="fontend mentor"
          />
        </a>
        <a href="https://www.linkedin.com/in/monicamunozalzate/">
          <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341046/react-portfolio-frontendMentor/images/icon-linkedin_ktqpvj.svg" alt="linkedin" />
        </a>
        {/* <a href="">
          <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341046/react-portfolio-frontendMentor/images/icon-twitter_ji2ut6.svg" alt="twitter" />
        </a> */}
      </Box>
    </Box>
  );
};

export default Navbar;
