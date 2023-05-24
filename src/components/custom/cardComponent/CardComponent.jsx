import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import styles from "../card/Card.module.css";
import { useWindowSize } from "../../../utils/useWindowSize";

const CardComponent = ({ project }) => {
  const [enter, setEnter] = useState(false);
  const size = useWindowSize();

  return (
    <>
      {size.width > 900 ? (
        <Grid
          item
          lg={6}
          xs={12}
          key={project.id}
          className={styles.card}
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
        >
          <img src={project.source} alt={project.name} className={styles.img} />
          {enter && (
            <Box className={styles.linksBox}>
              <a
                rel="noopener noreferrer"
                href={project.url}
                target="_blank"
                className={styles.link}
              >
                VIEW PROJECT
              </a>
              <a
                rel="noopener noreferrer"
                href={project.code}
                target="_blank"
                className={styles.link}
              >
                VIEW CODE
              </a>
            </Box>
          )}

          <Typography variant="h2" className={styles.name}>
            {project.name}
          </Typography>
          <Typography variant="body1" className={styles.language}>
            {project.languages.join(" ")}
          </Typography>
        </Grid>
      ) : (
        <Grid
          item
          lg={6}
          xs={12}
          key={project.id}
          className={styles.card}
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
        >
          <img src={project.source} alt={project.name} className={styles.img} />

          <Typography variant="h2" className={styles.name}>
            {project.name}
          </Typography>
          <Typography variant="body1" className={styles.language}>
            {project.languages.join(" ")}
          </Typography>
          <Box className={styles.linksBox}>
            <a
              rel="noopener noreferrer"
              href="https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x/hub"
              target="_blank"
              className={styles.link}
            >
              VIEW PROJECT
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x/hub"
              target="_blank"
              className={styles.link}
            >
              VIEW CODE
            </a>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default CardComponent;
