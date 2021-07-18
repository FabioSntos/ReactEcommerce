import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import Glide from 'react-glidejs'
import './static/glide.core.min.css'
import './static/glide.theme.min.css'
import './static/glide.min.js'

import Imagem from '../../assets/backgroundSlid.png'

import {
  Container,
  BoxSingle,
  BoxWrapper,
  Img,
  LeftArrowComponent,
  RightArrowComponent,
  LeftArrow,
  RightArrow,
} from './styles'

function NextClasses() {
  const gliderRef = useRef(null)
  const leftArrowRef = useRef(null)
  const rightArrowRef = useRef(null)

  return (
    <Container>
      <strong>Proximas aulas :</strong>

      <BoxWrapper>
        <Glide
          ref={gliderRef}
          type="slider"
          perTouch={1}
          perView={3}
          startAt={0}
          focusAt={0}
          dragThreshold={false}
          rewind={false}
          leftArrowComponent={
            <LeftArrowComponent ref={leftArrowRef}>
              <ChevronLeft />
            </LeftArrowComponent>
          }
          rightArrowComponent={
            <RightArrowComponent ref={rightArrowRef}>
              <ChevronRight />
            </RightArrowComponent>
          }
          breakpoints={{
            1100: {
              perView: 4,
              focusAt: 0,
            },
            900: {
              perView: 3,
              focusAt: 0,
            },
            480: {
              perView: 2,
              focusAt: 'center',
            },
          }}
          slideClassName="glide--dragging"
        >
          <BoxSingle>
            <div>
              <Img>
                <img src={Imagem} alt="Aula" />
                <span>01:24</span>
              </Img>

              <h4></h4>

              <p>01 - Hack Baixar imagens diretament d..</p>
            </div>
          </BoxSingle>

          <BoxSingle>
            <div>
              <Img>
                <img src={Imagem} alt="Aula" />
                <span>01:24</span>
              </Img>

              <h4></h4>

              <p>01 - Hack Baixar imagens diretament d..</p>
            </div>
          </BoxSingle>

          <BoxSingle>
            <div>
              <Img>
                <img src={Imagem} alt="Aula" />
                <span>01:24</span>
              </Img>

              <h4></h4>

              <p>01 - Hack Baixar imagens diretament d..</p>
            </div>
          </BoxSingle>

          <BoxSingle>
            <div>
              <Img>
                <img src={Imagem} alt="Aula" />
                <span>01:24</span>
              </Img>

              <h4></h4>

              <p>01 - Hack Baixar imagens diretament d..</p>
            </div>
          </BoxSingle>

          <BoxSingle>
            <div>
              <Img>
                <img src={Imagem} alt="Aula" />
                <span>01:24</span>
              </Img>

              <h4></h4>

              <p>01 - Hack Baixar imagens diretament d..</p>
            </div>
          </BoxSingle>

          <BoxSingle>
            <div>
              <Img>
                <img src={Imagem} alt="Aula" />
                <span>01:24</span>
              </Img>

              <h4></h4>

              <p>01 - Hack Baixar imagens diretament d..</p>
            </div>
          </BoxSingle>
        </Glide>

        <RightArrow onClick={() => rightArrowRef.current.click()}>
          <ChevronRight />
        </RightArrow>

        <LeftArrow onClick={() => leftArrowRef.current.click()}>
          <ChevronLeft />
        </LeftArrow>
      </BoxWrapper>
    </Container>
  )
}

export default NextClasses
