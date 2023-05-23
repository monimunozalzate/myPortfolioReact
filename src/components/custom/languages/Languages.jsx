import { Grid, Typography } from "@mui/material";
import styles from "./Languages.module.css";
const languages = [
  {
    id: 1,
    name: "HTML",
    time: 4,
  },
  {
    id: 2,
    name: "CSS",
    time: 4,
  },
  { id: 3, name: "Javascript", time: 4 },
  { id: 4, name: "Accessibility", time: 4 },
  { id: 5, name: "React", time: 3 },
  { id: 6, name: "Sass", time: 3 },
];

const Languages = () => {
  return (
    < >
    <Grid container  className={styles.grid}>
      {languages.map((language) => {
        return (
          <Grid item lg={4} sm={6} xs={12} key={language.id}>
            <Typography variant="h2" className={styles.language}>
              {language.name}
            </Typography>
            <Typography variant="body2" className={styles.experience}>
              {language.time} Years Experience
            </Typography>
          </Grid>
        );
      })}
    </Grid>
    <hr className={styles.horizontalLine}/>
    </>
  );
};

export default Languages;
