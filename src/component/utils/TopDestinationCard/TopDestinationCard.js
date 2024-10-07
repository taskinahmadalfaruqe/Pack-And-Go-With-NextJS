import Image from "next/image";
import React from "react";

const TopDestinationCard = ({ ImageLInk }) => {
  return (
    <div>
      <div>
        <Image
          alt="Top Destination Image"
          width={250}
          height={250}
          src={ImageLInk}
          className="rounded-md"
        ></Image>
      </div>
      <div></div>
    </div>
  );
};

export default TopDestinationCard;
