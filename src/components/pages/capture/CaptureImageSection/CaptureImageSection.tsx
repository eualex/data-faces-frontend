import Image from "next/image";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import { useCallback, useRef, useState } from "react";
import { notify } from "@/utils/helpers/notify.helper";
import { api } from "@/utils/services/axios.service";

import { Loading } from "@/components/shared/form";

import * as S from "./CaptureImageSection.styles";

const videoConstraints = {
  width: 500,
  height: 300,
  facingMode: "user",
};

export function CaptureImageSection() {
  const webcamRef = useRef(null);
  const { push } = useRouter()

  const [isLoading, setIsLoading] = useState(false);

  const capture = useCallback(async () => {
    setIsLoading(true)

    webcamRef.current.canvas.toBlob(async (blob: Blob) => {
      try {
        const formData = new FormData()
  
        formData.append('files', blob)
  
        const { data } = await api.post("/person/identify", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          params: {
            groupId: 'prisioners_02'
          }
        });
  
        console.log(data);
      } catch (err) {
        console.log(err);
        notify("error", "Ocorreu um erro ao buscar este usuário");
      } finally {
        setIsLoading(false);
      }
    })
  }, []);

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
