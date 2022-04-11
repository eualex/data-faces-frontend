import { usePrisioner } from "@/context/PrisionerContext";
import Image from "next/image";
import * as S from "./Aside.styles";

export function Aside() {
  const { image, name } = usePrisioner();

  const splittedName = name.split(' ')

  const shortName = splittedName.length > 2 ? `${splittedName[0]} ${splittedName[1]}` : name

  return (
    <S.Container>
      <S.AsideHeader>
        <Image
          src={"/logo.svg"}
          alt="logo data-faces"
          width={190}
          height={60}
        />
      </S.AsideHeader>

      <S.Wrapper>
        <S.HighlightInformation>
          <S.ImageContainer>
            <Image
              src="/man.svg"
              alt="Representação facial de um presidiário"
              layout="fill"
              objectFit="cover"
            />
          </S.ImageContainer>

          <h1>{shortName}</h1>
          <p>Pavilhão B</p>
        </S.HighlightInformation>

        <S.UserDetail>
          <div>
            <p>Nome completo</p>
            <h3>{name}</h3>
          </div>
          <div>
            <p>Idade</p>
            <h3>32 anos</h3>
          </div>
          <div>
            <p>Regime</p>
            <h3>Condicional</h3>
          </div>
          <div>
            <p>Pavilhão</p>
            <h3>Pavilhão B</h3>
          </div>
          <div>
            <p>Forma de remissão</p>
            <h3>Remissão Parcial</h3>
          </div>
          <div>
            <p>Cela</p>
            <h3>226</h3>
          </div>
        </S.UserDetail>
      </S.Wrapper>
    </S.Container>
  );
}
