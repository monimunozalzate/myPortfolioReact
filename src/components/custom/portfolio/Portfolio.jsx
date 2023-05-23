import { Box, Typography } from "@mui/material";
import { Link } from "react-scroll";
import styles from "./Portfolio.module.css";
import Card from "../card/Card";

const Portfolio = () => {
  return (
    <>
      <Box className={styles.flex}>
        <Typography variant="h1" className={styles.title}>
          Projects
        </Typography>
        <Link smooth={true} delay={500} to="ContactID" className={styles.link}>
          CONTACT ME
        </Link>
      </Box>
      <Box>
        <Card />
      </Box>
    </>
  );
};

export default Portfolio;
