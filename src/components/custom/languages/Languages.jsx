import { Grid, Typography } from "@mui/material";
import styles from "./Languages.module.css";
const languages = [
  {
    id: 1,
    name: "React",
    time: 1,
  },
  {
    id: 2,
    name: "Next",
    time: 1,
  },
  { id: 3, name: "Redux", time: 1 },
  { id: 4, name: "HTML", time: 1 },
  { id: 5, name: "CSS", time: 1 },
  { id: 6, name: "Javascript", time: 1 },
  { id: 7, name: "Sass", time: 1 },
  { id: 8, name: "Scrum", time: 1 },
  { id: 9, name: "Figma", time: 1 },
];

const Languages = () => {
  return (
    <>
      <Grid container className={styles.grid}>
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
      <hr className={styles.horizontalLine} />
    </>
  );
};

export default Languages;
