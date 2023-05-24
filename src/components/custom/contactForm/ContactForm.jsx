import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import styles from "./ContactForm.module.css";


const ContactForm = ({ values, errors, handleChange, handleSubmit, form, sendEmail }) => {
  
  return (
    <Grid
      onSubmit={handleSubmit}
      container
      className={styles.formContainer}
    >
      <Grid item lg={6} className={styles.left}>
        <Typography variant="h1" className={styles.title}>
          Contact
        </Typography>
        <Typography variant="body1" className={styles.paragraph}>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </Typography>
      </Grid>
      <form 
      ref={form}
      onSubmit={handleSubmit}
      className={styles.right}>
        <TextField
          id="standard-basic"
          label="NAME"
          variant="standard"
          className={styles.textField}
          name="name"
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name}
        />

        <TextField
          id="standard-basic"
          label="EMAIL"
          variant="standard"
          className={styles.textField}
          name="email"
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email}
        />
        <TextField
          id="filled-multiline-static"
          multiline
          rows={4}
          defaultValue="MESSAGE"
          variant="filled"
          className={styles.textArea}
          sx={{ padding: "none" }}
          name="message"
          onChange={handleChange}
          error={errors.message}
          helperText={errors.message}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            type="submit"
            className={styles.btn}
            onClick={sendEmail}
          >
            SEND MESSAGE
          </Button>
        </Box>
      </form>
    </Grid>
  );
};

export default ContactForm;
