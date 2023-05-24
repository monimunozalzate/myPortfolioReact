import { useFormik } from "formik";
import ContactForm from "./ContactForm";
import * as Yup from "yup";
import swal from "sweetalert";
// import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const ContactFormContainer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
console.log("hi from sent email")
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          swal("Good job!", "Email sent!", "success");
        },
        (error) => {
          // show the user an error
          swal("There was a mistake!", "Try again!", "error");
        }
      );
  };

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
      form={form}
      sendEmail={sendEmail}
    />
  );
};

export default ContactFormContainer;
