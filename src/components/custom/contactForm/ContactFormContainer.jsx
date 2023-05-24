import { useFormik } from "formik";
import ContactForm from "./ContactForm";
import * as Yup from "yup";
import swal from "sweetalert";


const ContactFormContainer = () => {

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (data) => {
      console.log(data);
      swal("Good job!", "Your message was sent!", "success");
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("This field is required")
        .min(3, "The name should have a minimum of 3 letters."),
      email: Yup.string()
        .email("The entered text doesnt match with an email acount")
        .required("This field is required"),
      message: Yup.string()
        .required("This field is required")
        .min(3, "The name should have a minimum of 3 letters."),
    }),
    validateOnChange: false,
  });
  return (
    <ContactForm
      values={values}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ContactFormContainer;
