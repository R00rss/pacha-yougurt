import React from "react";
const CardInfo = ({ content }) => {
  return (
    <section className="w-xl hover:scale-105 duration-150 ease-in-out cursor-pointer aspect-square bg-no-repeat bg-cover p-[1.1rem_0.75rem] rounded-[50px] border-none bg-[#ffffff] shadow-lg flex flex-col justify-center items-center gap-3">
      {content.img && content.titleImg && (
        <img
          className="w-30 h-20 bg-transparent"
          src={content.img}
          alt={content.titleImg}
        />
      )}
      <h1 className="text-center text-5xl font-medium text-lime-500">
        {content?.title}
      </h1>
      <p className="magic-italic text-3xl">{content?.body}</p>
    </section>
  );
};

export default CardInfo;
