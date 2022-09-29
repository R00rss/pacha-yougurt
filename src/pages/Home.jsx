import React from "react";
// import CardInfo from "../components/CardInfo";
import iconPacha from "../assets/icons/pachaicon.png";
import Layout from "../components/layout/Layout";
import utensilios from "../assets/images/maquetado/utensilios.jpeg";
import laptop from "../assets/images/maquetado/laptop.jpeg";
const Home = () => {
  const contentExample = {
    title: "Pacha Yougurt",
    body: "¡Sabor, sabor y mucha nutrición! ",
    img: iconPacha,
    titleImg: "Pacha Yougurt",
  };
  return (
    <Layout>
      <section className="flex flex-col gap-5 justify-center my-5 mx-auto w-4/5">
        <div className="flex flex-row justify-center items-center gap-5">
          <section className="min-w-[500px] shadow-2xl  flex flex-col gap-3 justify-center items-center bg-[#ffffff] rounded-[30px] p-4 aspect-[14/9]">
            <img
              className="w-32 h-20 bg-transparent"
              src={iconPacha}
              alt={"Pacha Yougurt"}
            />
            <h1 className="text-center text-6xl font-medium text-lime-500">
              Pacha Yougurt
            </h1>
            <p className="magic-italic text-4xl">
              ¡Sabor, sabor y mucha nutrición!
            </p>
          </section>
          <section className="text-xl flex flex-col gap-3 justify-center items-center bg-[#b8f0b591] shadow-2xl rounded-[30px] p-4 ">
            <p>
              Pacha Yogurt es una empresa ecuatoriana que surgió con la idea de
              crear un yogurt delicioso y muy nutritivo con sabor a aguacate.
            </p>
          </section>
        </div>
        <div className="flex flex-row justify-center items-center gap-5 mx-6">
          <section className="text-xl flex flex-col gap-3 justify-center items-center bg-[#b8f0b591] shadow-2xl rounded-[30px] p-4 ">
            <p>
              Además creamos utensilios y empaques biodegradables con la pepa
              del aguacate o palta, que son amigables con el ambiente, debido a
              que se degradan en aproximadamente 160 días.
            </p>
          </section>
          <section>
            <img
              className="w-[1000px]  h-full rounded-3xl"
              src={utensilios}
              alt="utensilios"
            />
          </section>
        </div>
        <div className="flex flex-row justify-center items-center gap-5 mx-6">
          <section>
            <img
              className="w-[2000px] h-full rounded-3xl"
              src={laptop}
              alt="laptop"
            />
          </section>
          <section className="text-xl flex flex-col gap-3 justify-center items-center bg-[#b8f0b591] shadow-2xl rounded-[30px] p-4 ">
            <p>
              Ecuador hoy en día exporta aguacate de gran calidad a otros
              países, con una gran aceptación, debido a su agradable sabor y
              precio. Nuestras metas se desarrollan en base a la creación de un
              yogurt de aguacate saludable, con un precio accesible, un empaque
              amigable con el ambiente y que se convierta en una empresa que
              brinde fuentes de trabajo para las familias ecuatorianas. Pacha
              Yogurt... Sabor, sabor y mucha nutrición!
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
