import { Grid } from "@mui/material";
import { projects } from "../../../utils/projects";
import CardComponent from "../cardComponent/CardComponent";
import styles from '../portfolio/Portfolio.module.css'

const Card = () => {
  
  return (
    <Grid container style={{ gap: "1rem", justifyContent: "space-between" }} className={styles.cardsContainer}>
      {projects.map((project) => {
        return (
          <CardComponent key={project.id} project={project}/>
        );
      })}
    </Grid>
  );
};

export default Card;
