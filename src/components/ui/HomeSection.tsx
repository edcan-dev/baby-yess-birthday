"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FeaturedMomentsPhoto } from "@/interfaces";

import { FeaturedMomentCard, HomeCover, Card } from "@/components";

interface Props {
  featuredMomentsPhotos: FeaturedMomentsPhoto[];
}

export const HomeSection = ({ featuredMomentsPhotos }: Props) => {

  const [isCoverShowed, setCoverShowed] = useState(true);
  const [isOutAnimationTriggered, setOutAnimationTriggered] = useState(false);

  const handleClick = () => {
    setOutAnimationTriggered((isAnimationTriggered) => !isAnimationTriggered);
  };

  useEffect(() => {
    if (!isOutAnimationTriggered) return;

    const timeoutId = setTimeout(() => {
      setCoverShowed((isCoverShowed) => !isCoverShowed);
    }, 1500);

    return () => {
      clearInterval(timeoutId);
    };
  }, [isOutAnimationTriggered]);

  const birthDay = new Date(2000, 9, 4);
  const today = new Date();
  const diasTotales = (birthDay: Date, today: Date) => {
    let dif = birthDay.getTime() - (today.getTime() - 1000 * 3600);
    let totalDays = Math.ceil(dif / (1000 * 3600 * 24));
    return totalDays > 0 ? totalDays : totalDays * -1;
  };
  const daysCount = diasTotales(birthDay, today);


  return (
    <>
      {/* Ternurin Question */}
      {isCoverShowed && (
        <div
          className={isOutAnimationTriggered ? " home_cover_out_animation" : ""}
        >
          <HomeCover emitClick={handleClick} />
        </div>
      )}

      <section className="min-h-[200px] bg-gradient-to-b from-amethyst via-lilac to-mint flex flex-col items-center">
        <div className="px-4 py-8 flex flex-col items-center justify-center">
          <h1 className="font-bold text-white text-center text-4xl mb-8">
            Hace {daysCount} días
          </h1>

          <h2 className="font-bold text-white text-center text-2xl mb-12">
            Nació alguien muy, muy especial...
          </h2>

          <Image
            className="mb-12 canichi_animation"
            src={"/canichi.png"}
            alt="canichi"
            width={500}
            height={500}
          ></Image>

          <h2 className="font-bold text-white text-center text-2xl mb-8">
            Así es, estamos hablando de mi enorme bebé
          </h2>
          <h2 className="font-bold text-white text-center text-2xl mb-8">
            A continuación, una lista de adjetivos relacionados:
          </h2>

          <ul className="text-white text-2xl mb-8">
            <li className="hover:text-amethyst transition-all">
              - Mi enorme, enorme, enorme.
            </li>
            <li className="hover:text-amethyst transition-all">
              - Mi tortita (Este último es nuevo).
            </li>
            <li className="hover:text-amethyst transition-all">
              - La número uno!
            </li>
            <li className="hover:text-amethyst transition-all">
              - Baby Alive.
            </li>
            <li className="hover:text-amethyst transition-all">
              - Mi canichi emosa, emosa, emosa
            </li>
          </ul>

          <h2 className="font-bold text-white text-center text-2xl mb-8">
            Y la lista sigue y seguirá
          </h2>
          <h2 className="font-bold text-white text-center text-2xl mb-8">
            Así como nuestros memorables mejores momentos 💜🌷
          </h2>
        </div>

        {featuredMomentsPhotos.map((featuredMoment) => (
          <FeaturedMomentCard
            key={featuredMoment.id}
            featuredMomentPhoto={featuredMoment}
          />
        ))}

        <div className="px-4 pt-8 pb-6 flex flex-col items-center justify-center w-full max-w-[500px]">
          <h1 className="font-bold text-amethyst text-2xl mb-8">
            Intenté con todo mi amor conseguir tulipanes para ti, amor de mi
            vida.
          </h1>
          <h1 className="font-bold text-amethyst text-xl mb-8">
            En todos lados me dijeron que no había, por el frío...
          </h1>
          <h1 className="font-bold text-amethyst text-2xl mb-8">
            Pero decidí hacerte estos con mis manitas, aunque queda pendiente
            darte los verdaderos, mi emosa.
          </h1>
          <h1 className="font-bold text-amethyst text-3xl text-center">
              Feliz cumpleaños, mi Yess, mi bebé 💜
          </h1>
        </div>

        <div className="w-full">
          {/* Tulips */}
          <Card emoji="🌷" hueA={270} hueB={270} />
        </div>

      </section>
    </>
  );
};