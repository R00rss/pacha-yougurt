import React from "react";

const Card = ({ content }) => {
  return (
    <section className="text-slate-900 bg-transparent w-full h-full border-none ">
      <h1 className=" shadow-2xlitalic p-[0.5rem_0.75rem] rounded-t-lg bg-lime-500 text-center font-medium text-4xl">
        {content?.title}
      </h1>
      <div className="shadow-2xl bg-[rgba(255,255,255,0.36)] p-[0.5rem_0.75rem] rounded-lg text-xl">
        <p>{content?.body}</p>
      </div>
    </section>
  );
};

export default Card;
