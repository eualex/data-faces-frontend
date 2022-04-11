import Image from "next/image";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import { useCallback, useRef, useState } from "react";
import { notify } from "@/utils/helpers/notify.helper";
import { api } from "@/utils/services/axios.service";

import { Loading } from "@/components/shared/form";

import * as S from "./CaptureImageSection.styles";
import { usePrisioner } from "@/context/PrisionerContext";

const videoConstraints = {
  width: 500,
  height: 300,
  facingMode: "user",
};

export function CaptureImageSection() {
  const { setImage, setName } = usePrisioner()

  const webcamRef = useRef(null);
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const capture = useCallback(async () => {
    webcamRef.current.getScreenshot()

    if (webcamRef.current.canvas) {
      webcamRef.current.canvas.toBlob(async (blob: Blob) => {
        setIsLoading(true)

        try {
          const formData = new FormData();

          formData.append("file", blob);

          const { data } = await api.post("/person/identify", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            params: {
              groupId: "prisioners_02",
            },
          });

          setImage(data.imageURL)
          setName(data.nome)

          notify('success', 'Usuário reconhecido')

          setTimeout(() => {
            push('/')
          }, 1500)
        } catch (err) {
          console.log(err);
          notify("error", "Ocorreu um erro ao buscar este usuário");
        } finally {
          setIsLoading(false);
        }
      });
    }
  }, [push, setImage, setName]);

  return (
    <S.Container>
      {isLoading && <Loading />}

      <S.Header>
        <Image src="/logo.svg" alt="data face" width={400} height={250} />
      </S.Header>

      <S.WebcamContainer>
        <Webcam
          ref={webcamRef}
          width={400}
          height={250}
          audio={false}
          screenshotQuality={1}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />

        <S.Description>
          Posicione-se no quadro amarelo a sua frente e olhe para a câmera
        </S.Description>

        <S.Button onClick={capture}>
          <p>Buscar informações</p>

          <FiArrowRight size={20} />
        </S.Button>
      </S.WebcamContainer>
    </S.Container>
  );
}
