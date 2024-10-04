"use client";

import Image from "next/image";
import React, { MouseEvent, useState } from "react";

interface Props {
  emitClick(): void
}


export const HomeCover = ({ emitClick }: Props) => {


  const handleClick = (ev: MouseEvent) => {
    // setOutClass('animate__bounceOutUp');
    emitClick();
  }

  return (
    <section className={`min-h-screen w-full bg-amethyst fixed z-50 flex flex-col justify-center items-center`}>

      <h1 className="ternurin_question_animation mb-8 text-6xl font-bold text-lilac">???</h1>

      <div className="ternurin_question_animation cursor-pointer"
      onClick={ handleClick }
      >
        
        <Image
          className="mb-8 flex aspect-square bg-lilac hover:shadow-lilac shadow-lg rounded-xl p-4 transition-all"
          src={"/canichi_question.png"}
          alt="canichi_question"
          width={300}
          height={300}
        ></Image>
      </div>
    </section>
  );
};
