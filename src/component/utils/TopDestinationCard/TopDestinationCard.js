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
      <div>
        <div>
          <h2>Mount Agung, Bali</h2>
        </div>
        <div>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua minim veniam
        </div>
        <div>
          <div>Location</div>
          <div>Indonesia</div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinationCard;
