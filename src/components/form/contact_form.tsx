"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextInputDefault from "../elements/text_input";
import TextAreaDefault from "../elements/text_area";
import DefaultButton from "../elements/button";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is null.");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_xc4entj",
        "template_8q5tqac",
        formRef.current,
        "5f70tOLJLNf3SMjU2"
      );
      console.log("SUCCESS!", result.text);
      alert("Message sent successfully!");

      // Reset the form fields
      formRef.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex flex-col space-y-12 mb-32 md:mb-40"
    >
      <TextInputDefault lable="Name" name="user_name" />
      <TextInputDefault lable="Email" name="user_email" />
      <TextAreaDefault lable="Message" name="message" rows={5} />
      <DefaultButton title="Send Message" type="submit" />
    </form>
  );
};

export default ContactForm;
