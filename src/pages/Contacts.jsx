import React from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/Card";
import wppIcon from "../assets/icons/whatsapp.png";
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
      <section className="mx-auto my-10 w-[min(1200px,80%)] flex flex-col md:flex-row justify-between rounded-xl border-none bg-gradient-to-r from-[#25e528] via-[#1edeab] to-[#daf171] shadow-2xl">
        <div className="p-2 text-[#060606] text-center flex flex-col justify-center gap-[10%] items-center">
          <h1 className=" font-semibold text-2xl">
            ¡Visítanos en nuestras instalaciones!
          </h1>
          <p className=" text-[#06060692] magic-italic text-[39px] md:text-[45px] italic">
            No te quedes sin tu Pacha Yogurt
          </p>
          <div className="flex gap-2 flex-row justify-center items-center">
            <h2 className="text-2xl">O escríbenos </h2>
            <span className="hidden lg:block text-5xl">&#x279C;</span>
            <div className="w-14">
              <a
                target={"_blank"}
                href="https://api.whatsapp.com/send?phone=961375700&text=Buenas%20tardes,%20quiero%20mi%20pacha%20yogurt!"
              >
                <img src={wppIcon} alt="wpp icon" />
              </a>
            </div>
          </div>
        </div>
        <iframe
          className="rounded-r-xl p-2  w-full md:w-[min(600px,50%)] h-[450px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.231901899953!2d-78.4739541!3d-0.1304739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x139ed87cb9fe0b7e!2sPacha%20Yogurt!5e0!3m2!1ses!2sec!4v1664580076545!5m2!1ses!2sec"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Contacts;
