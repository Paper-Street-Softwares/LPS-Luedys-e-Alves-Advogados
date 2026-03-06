import React, { useState, useRef, useEffect } from "react";
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
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1280px",
      numVisible: 2,
      numScroll: 1,
    },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
  ];
  const imagens = Object.values(content.texts.socialProof.images);

  const productTemplate = (item) => {
    return (
      <div className="flex justify-center px-2 py-2">
        <img
          src={item}
          alt="imagens de fedback"
          className="max-w-[800px] w-full rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)]"
          width={634}
          height={625}
        />
      </div>
    );
  };

  const [page, setPage] = useState(0);
  const carouselRef = useRef(null);

  const totalPages = imagens.length - 1 + 1;

  const next = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  let text, textOpacity, bgContainer;

  switch (colorMode) {
    case "light":
      bgContainer = "bg-white";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;

    case "dark":
      bgContainer = "bg-black";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      break;

    case "defaultDark":
      bgContainer = "bg-white";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;

    case "defaultLight":
      bgContainer = "bg-white";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
  }

  return (
    <SectionArea paddingTopAndBottom={false} className={``}>
      <SectionWrapper>
        {/* <SectionHeaderNovo
          miniTitle={content.texts.socialProof.minitag}
          title={content.texts.socialProof.title}
          subtitle={content.texts.socialProof.subtitle}
          colorMode={colorMode}
        /> */}

        <section
          className={`rounded-xl p-5 w-full desktop1:px-10 pt-10 pb-5 max-w-[1215px] my-6 tablet1:my-10 desktop1:my-12 ${bgContainer}`}
        >
          <div className="flex w-full justify-between relative flex-col desktop1:flex-row desktop1:gap-6">
            <div className="font-secondFont tablet1:w-[400px] desktop1:w-[310px] mx-auto desktop1:mx-0">
              <section className="flex items-center gap-2 mb-3 w-full justify-center desktop1:justify-start">
                <img
                  src={imgGoogle}
                  alt="Logomarca do Google"
                  className="w-5"
                />{" "}
                <p className={`text-[14px] font-light ${textOpacity}`}>
                  Avaliações Google
                </p>
              </section>
              <section className="mb-6 w-full text-center desktop1:text-start">
                <h1
                  className={`text-title4 max-w-[310px] mx-auto desktop1:m-0 font-bold leading-10 ${text}`}
                >
                  O que nossos clientes falam de nós
                </h1>
              </section>
              <section className="flex gap-4 mb-6 justify-center mx-auto desktop1:mx-0 desktop1:justify-start w-fit">
                <h1 className={`text-title4 ${textOpacity}`}>4.9</h1>
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

              <div className="flex gap-3 mt-4 justify-center mb-4 desktop1:justify-start">
                <button
                  aria-label="Botão de passar imagens de feedback"
                  onClick={prev}
                  className="p-2 rounded-full bg-black/10 shadow"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  aria-label="Botão de passar imagens de feedback"
                  onClick={next}
                  className="p-2 rounded-full bg-black/10 shadow"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="desktop1:w-[600px] desktop2:w-[700px] desktop3:w-[800px]">
              <div className="w-full">
                <Carousel
                  ref={carouselRef}
                  value={imagens}
                  numScroll={1}
                  numVisible={3}
                  showNavigators={false}
                  responsiveOptions={responsiveOptions}
                  itemTemplate={productTemplate}
                  circular
                  showIndicators={false}
                  page={page}
                />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default SocialProof;
