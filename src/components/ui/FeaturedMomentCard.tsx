import { FeaturedMomentsPhoto } from "@/interfaces";
import Image from "next/image";
import React from "react";

import './FeaturedMomentCard.css'

interface Props {
  featuredMomentPhoto: FeaturedMomentsPhoto;
}

export const FeaturedMomentCard = ({ featuredMomentPhoto }: Props) => {

  const { title, description, fileName } = featuredMomentPhoto;

  return (
    <div className="p-4 flex flex-col items-center justify-center">

      <div className="p-4 bg-amethyst rounded-xl cursor-pointer hover:shadow-lg hover:shadow-purple-950 transition-all w-full max-w-[500px] card_animation">
        <div>
          <h1 className="text-white font-bold text-xl mb-4 text-center">
            { title }
          </h1>
        </div>

        <Image
          className="w-full aspect-[3/4] object-cover rounded-xl mb-4"
          src={`/featured-moments/${ fileName }`}
          alt="aw"
          width={500}
          height={500}
        ></Image>

        <div>
          <h2 className="text-white text-xl text-center">
            { description }
          </h2>
        </div>
      </div>
    </div>
  );
};
