import CommonButton from "@/component/utils/CommonButton/CommonButton";
import SmallTitle from "@/component/utils/SmallTitle/SmallTitle";
import Image from "next/image";
import React from "react";
import image1 from "../../../assets/Rectangle 33.jpg";
import image2 from "../../../assets/Rectangle 34.jpg";
import image3 from "../../../assets/Combined Shape.png";

const SelectedDestination = () => {
  return (
    <div className="py-8">
      <div className="container flex gap-10 justify-center items-center">
        <div className="space-y-5 w-[50%]">
          <SmallTitle
            SmallTitle={"We have more than 1000 selected Destination"}
            SmallDescription={
              "You can choose one of many option that we have on our website. Every destination have been 4+ star rated by our user before. You can search by clicking our button on below of the this text man."
            }
          ></SmallTitle>
          <CommonButton
            ButtonValue={"Search Destination"}
            NavegateLink={"/tour"}
          ></CommonButton>
        </div>
        <div className="h-[600px] p-4 w-[50%] relative">
          <Image
            alt="Image"
            height={150}
            width={150}
            src={image3}
            className="absolute top-[20%] right-[19%]"
          ></Image>
          <Image
            alt="Image"
            height={350}
            width={350}
            src={image1}
            className="rounded-xl border-[4px] border-WhiteColor absolute top-4 left-4"
          ></Image>
          <Image
            alt="Image"
            height={350}
            width={350}
            src={image2}
            className="rounded-xl border-[4px] border-WhiteColor absolute bottom-4 right-4"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SelectedDestination;
