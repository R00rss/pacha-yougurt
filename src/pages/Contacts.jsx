import React from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/Card";

const Contacts = () => {
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
      <section className="flex flex-col lg:flex-row gap-6 mx-5 lg:mx-auto lg:justify-center my-5">
        <div className="mr-auto lg:mr-0 w-[min(75%,600px)]">
          <Card content={mision} />
        </div>
        <div className="ml-auto lg:ml-0 w-[min(75%,600px)]">
          <Card content={vision} />
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
