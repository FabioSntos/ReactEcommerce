import { useState } from "react";

import { ButtonContainer, Container, Li, SlideContainer } from "./styles";

import { AnimatePresence } from "framer-motion";
import { useCallback } from "react";

export const Carousel = () => {
  const [slide, setSlide] = useState(1);

  const handleSlide = useCallback((index: number) => {
    setSlide(index);
  }, []);

  return (
    <Container>
      <SlideContainer>
        <AnimatePresence>
          {slide === 1 && <Li className="teste1"></Li>}
        </AnimatePresence>
        <AnimatePresence>
          {slide === 2 && (
            <Li
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-120%", opacity: 1 }}
            >
              <div className="liContent">
                <h3>
                  Olá, o que você está buscando? <br />
                  <strong>Criar ou migrar seu e-commerce?</strong>
                </h3>
              </div>
            </Li>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {slide === 3 && (
            <Li
              className="teste2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-120%", opacity: 1 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {slide === 4 && (
            <Li
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-120%", opacity: 1 }}
            />
          )}
        </AnimatePresence>
        <ButtonContainer>
          <button
            className={`${slide === 1 && "active"}`}
            onClick={() => handleSlide(1)}
          ></button>
          <button
            className={`${slide === 2 && "active"}`}
            onClick={() => handleSlide(2)}
          ></button>
          <button
            className={`${slide === 3 && "active"}`}
            onClick={() => handleSlide(3)}
          ></button>
          <button
            className={`${slide === 4 && "active"}`}
            onClick={() => handleSlide(4)}
          ></button>
        </ButtonContainer>
      </SlideContainer>
    </Container>
  );
};
