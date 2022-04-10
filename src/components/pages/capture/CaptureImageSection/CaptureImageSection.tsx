import Image from "next/image";
import { FiArrowRight } from 'react-icons/fi'
import { useRef } from "react";
import Webcam from "react-webcam";
import * as S from "./CaptureImageSection.styles";

const videoConstraints = {
  width: 500,
  height: 300,
  facingMode: "user",
};

export function CaptureImageSection() {
  const webcamRef = useRef(null);

  return (
    <S.Container>
      <S.Header>
        <Image src="/logo.svg" alt="data face" width={400} height={250} />
      </S.Header>

      <S.WebcamContainer>
        <Webcam
          audio={false}
          height={300}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />

        <S.Description>
          Posicione-se no quadro amarelo a sua frente e olhe para a câmera
        </S.Description>

        <S.Button>
          <p>Tirar foto</p>

          <FiArrowRight size={20} />
        </S.Button>
      </S.WebcamContainer>
    </S.Container>
  );
}
