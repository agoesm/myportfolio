import React from "react";

type ContactInfoProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const ContactInfo = ({ icon, label, value }: ContactInfoProps) => {
  return (
    <div className="flex flex-col items-start space-y-1">
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="text-sm">{label}</h3>
      </div>
      <p className="text-base">{value}</p>
    </div>
  );
};

export default ContactInfo;
