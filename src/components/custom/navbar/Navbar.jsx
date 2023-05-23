import styles from "../info/Info.module.css";
import { Box, IconButton, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box className={styles.navbar}>
      <Typography variant="body1" color={"#FFFFFF"} className={styles.name}>
        adamkeyes
      </Typography>
      <Box className={styles.iconsBox}>
        <IconButton>
          <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341046/react-portfolio-frontendMentor/images/icon-github_w1nlic.svg" alt="github" />
        </IconButton>
        <IconButton>
          <img
            src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341045/react-portfolio-frontendMentor/images/icon-frontend-mentor_vrfs6h.svg"
            alt="fontend mentor"
          />
        </IconButton>
        <IconButton>
          <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341046/react-portfolio-frontendMentor/images/icon-linkedin_ktqpvj.svg" alt="linkedin" />
        </IconButton>
        <IconButton>
          <img src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683341046/react-portfolio-frontendMentor/images/icon-twitter_ji2ut6.svg" alt="twitter" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
