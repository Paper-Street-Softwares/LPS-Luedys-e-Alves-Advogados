import React, { useState } from "react";
import content from "../../content/content";
import { Carousel } from "primereact/carousel";
import SectionArea from "../sectionElements/SectionArea";
import ButtonReflexo from "../interactives/ButtonReflexo";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";

import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import imgGoogle from "../../assets/imgs/logo/logoGoogle.webp";

function SocialProof({ colorMode }) {
  const responsiveOptions = [
    {
      breakpoint: "3000px",
      numVisible: 3,
      numScroll: 2,
    },
    {
      breakpoint: "1024px",
      numVisible: 2,
      numScroll: 1,
    },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
  ];
  const imagens = Object.values(content.texts.socialProof.images);

  const productTemplate = (item) => {
    return (
      <div className="flex justify-center px-2">
        <img
          src={item}
          alt="imagens de fedback"
          className="max-w-[800px] w-full rounded-lg border border-white"
          width={634}
          height={625}
        />
      </div>
    );
  };

  return (
    <SectionArea className={`bg-darkOpacity`}>
      <SectionWrapper>
        {/* <SectionHeaderNovo
          miniTitle={content.texts.socialProof.minitag}
          title={content.texts.socialProof.title}
          subtitle={content.texts.socialProof.subtitle}
          colorMode={colorMode}
        /> */}

        <section className="bg-black rounded-xl p-5 desktop1:p-10">
          <div className="flex w-full justify-between relative flex-col desktop1:flex-row">
            <div className="text-white font-secondFont tablet1:w-[400px] mx-auto">
              <section className="flex items-center gap-2 mb-3 w-full justify-center desktop1:justify-start">
                <img
                  src={imgGoogle}
                  alt="Logomarca do Google"
                  className="w-5"
                />{" "}
                <p className="text-[14px] opacity-70 font-light">
                  Avaliações Google
                </p>
              </section>
              <section className="mb-6 w-full text-center desktop1:text-start">
                <h1 className="text-title4 max-w-[300px] mx-auto desktop1:m-0 leading-10">
                  O que nossos clientes falam de nós
                </h1>
              </section>
              <section className="flex gap-4 mb-6 justify-center desktop1:justify-start">
                <h1 className="text-title4">4.9</h1>
                <div>
                  <div className="flex">
                    <Star
                      className="text-yellow-300"
                      fill="#fde047"
                      width={20}
                      height={20}
                    />
                    <Star
                      className="text-yellow-300"
                      fill="#fde047"
                      width={20}
                      height={20}
                    />
                    <Star
                      className="text-yellow-300"
                      fill="#fde047"
                      width={20}
                      height={20}
                    />
                    <Star
                      className="text-yellow-300"
                      fill="#fde047"
                      width={20}
                      height={20}
                    />
                    <Star
                      className="text-yellow-300"
                      fill="#fde047"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="text-sm opacity-70 font-light">Excelente</p>
                </div>
              </section>
            </div>

            <div className="desktop1:w-[500px] desktop2:w-[800px] pb-6">
              <MotionDivDownToUp>
                <div className="w-full mb-6">
                  <Carousel
                    value={imagens}
                    numScroll={1}
                    numVisible={2}
                    showNavigators
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
                    circular
                    showIndicators={false}
                    autoplayInterval={5000}
                  />
                </div>
              </MotionDivDownToUp>
            </div>
          </div>

          {/* <MotionDivDownToUp className={`mt-6`}>
            <ButtonReflexo
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                </svg>
              }
              link="https://tintim.link/whatsapp/065f4e87-42ce-42c4-87f2-420a05c17133/f5b25419-0c1b-4165-95a0-93e1edd1ac0f"
              label={content.texts.socialProof.ctaButtonText}
              colorMode={colorMode}
            />
          </MotionDivDownToUp> */}
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default SocialProof;
