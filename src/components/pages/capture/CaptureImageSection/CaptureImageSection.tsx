import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as S from "./CaptureImageSection.styles";
import axios from "axios";
import { Loading } from "@/components/shared/form";
import { notify } from "@/utils/helpers/notify";
import { useRouter } from "next/router";

const videoConstraints = {
  width: 500,
  height: 300,
  facingMode: "user",
};

export function CaptureImageSection() {
  const webcamRef = useRef(null);
  const { push } = useRouter()

  const [isLoading, setIsLoading] = useState(false);
  // const [image, setImage] = useState('');

  const capture = useCallback(async () => {
    // const imageSrc = webcamRef.current.getScreenshot();

    // setImage(imageSrc)

    setIsLoading(true)

    setTimeout(() => {
      push('/')
    }, 2000)
  }, [push]);

  // async function handleSubmitImage() {
    // try {
    //   const { data } = await axios.post("/api/image", formData);

    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    //   notify("error", "Ocorreu um erro ao buscar este usuário");
    // } finally {
    //   setIsLoading(false);
    // }

    // const formData = new FormData();

    // formData.append("file", image)

    // setIsLoading(true)
  // }

  return (
    <S.Container>
      {isLoading && <Loading />}

      <S.Header>
        <Image src="/logo.svg" alt="data face" width={400} height={250} />
      </S.Header>

      <S.WebcamContainer>
        <Webcam
          ref={webcamRef}
          width={300}
          height={200}
          audio={false}
          screenshotQuality={1}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />

        <S.Description>
          Posicione-se no quadro amarelo a sua frente e olhe para a câmera
        </S.Description>

        <S.Button onClick={capture}>
          <p>Tirar foto</p>

          <FiArrowRight size={20} />
        </S.Button>
      </S.WebcamContainer>
    </S.Container>
  );
}
