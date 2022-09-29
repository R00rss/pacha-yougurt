import React from "react";
// import bgCard from "../../assets/images/layout/bg1.jpg";
import bgCard from "../assets/images/layout/bg1.jpg";
const CardInfo = ({ content }) => {
  return (
    <section
      style={{ backgroundImage: `url('${bgCard}')` }}
      className="bg-no-repeat bg-cover p-[0.25rem_0.75rem] rounded-lg border-none bg-gradient-to-r from-teal-200 to-lime-200"
    >
      <h1>{content?.title}</h1>
      <p>{content?.body}</p>
    </section>
  );
};

export default CardInfo;
