import Image from "next/image";
import * as S from "./Loading.styles";

export function Loading() {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src="/logo.svg" alt="data face" width={400} height={150} />
      </S.ImageContainer>

      <S.Description>
        Carregando...
      </S.Description>
    </S.Container>
  );
}
