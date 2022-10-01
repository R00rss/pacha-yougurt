import React from "react";
import Card from "../components/Card";
import Layout from "../components/layout/Layout";

const AboutUs = () => {
  const mision = {
    title: "Misión",
    body: "Producir un Yogurt de Aguacate y utensilios biodegradables, bajo las mejores condiciones en cuanto a calidad, higiene, nutrición, a fin de obtener como resultado que cada cliente se sienta satisfecho y feliz al consumir un producto delicioso y de gran aporte nutritivo.",
  };
  const vision = {
    title: "Visión",
    body: "Posicionar nuestra marca en Ecuador, con el Yogurt de Aguacate y sus utensilios biodegradables, utilizando tecnología de punta, con personal de calidad, con un precio económico y accesible y sobre todo siendo una empresa socialmente responsable, al crear un producto sano, nutritivo y amigable con el medio ambiente.",
  };
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center py-5 gap-5">
        <section className="flex flex-col lg:flex-row gap-6 mx-5 lg:mx-auto lg:justify-center ">
          <div className="mr-auto lg:mr-0 w-[min(75%,600px)]">
            <Card content={mision} />
          </div>
          <div className="ml-auto lg:ml-0 w-[min(75%,600px)]">
            <Card content={vision} />
          </div>
        </section>
        {/* <section className="w-full"> */}
        <iframe
          className="w-[min(900px,70%)] aspect-[6/10] md:aspect-video"
          src="https://www.youtube.com/embed/xllCUHt_yzc?vq=hd1080"
          title="Pacha Yogurt: yogurt de aguacate y utensilios"
          frameBorder={0}
          allowFullScreen={true}
        ></iframe>
        {/* <iframe
          className="w-[min(900px,70%)] aspect-[6/10] md:aspect-video"
          id="player"
          marginHeight={0}
          marginWidth={0}
          allowFullScreen={true}
          src="https://www.youtube.com/watch?v=xllCUHt_yzc&ab_channel=BeatrizPalacios"
          frameBorder={0}
          referrerPolicy="no-referrer-when-downgrade"
          scrolling="no"
        ></iframe> */}
        {/* </section> */}
      </div>
    </Layout>
  );
};

export default AboutUs;
