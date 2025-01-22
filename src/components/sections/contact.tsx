import React from "react";
import { MdEmail, MdSmartphone } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";
import ContactInfo from "../items/contact_info";
import ContactForm from "../form/contact_form";
import SectionTitle from "../elements/section_title";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center mx-10 lg:mx-auto mt-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <SectionTitle title="Contact" />

      <div className="w-full flex flex-col md:flex-row md:justify-start space-y-8 md:space-y-0 md:space-x-16 mb-20">
        <ContactInfo
          icon={<MdSmartphone className="text-primary text-2xl" />}
          label="Phone"
          value="+62 8988501207"
        />
        <ContactInfo
          icon={<MdEmail className="text-primary text-2xl" />}
          label="Email"
          value="muhammad.agus.miftah@gmail.com"
        />
        <ContactInfo
          icon={<PiMapPinFill className="text-primary text-2xl" />}
          label="Address"
          value="Jakarta, Indonesia"
        />
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
