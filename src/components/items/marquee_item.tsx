import React from "react";
import Marquee from "react-fast-marquee";

type MarqueeItemProps = {
  data: MarqueeItemData[];
  direction?: "right" | "left";
};

type MarqueeItemData = {
  icon: React.ReactNode;
  name: string;
  color: string;
};

const MarqueeItem = ({ data, direction = "left" }: MarqueeItemProps) => {
  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={50}
      pauseOnHover
      className="my-4"
    >
      <div className="inline-flex">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center mr-4 p-2 text-sm md:text-base rounded-md transition-all duration-100 hover:shadow-lg"
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                item.name === "JavaScript"
                  ? "#000"
                  : item.name === "React Native"
                  ? item.color
                  : "#fff";
              e.currentTarget.style.backgroundColor =
                item.name === "React Native" ? "#000" : item.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "black";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <span className="text-2xl mr-2 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>
            {item.name}
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeItem;
