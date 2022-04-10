import { Flex } from "@/components/shared/layout";
import { Box } from "@/components/shared/layout/Box/Box";
import Image from "next/image";
import * as S from "./PrisonSenteceSection.styles";

export function PrisonSenteceSection() {
  return (
    <S.Container>
      <S.Header>
        <h1>Informações da pena</h1>

        <hr />
      </S.Header>

      <Box css={{ marginTop: "20px" }}>
        <Box.Title>Média de satisfação</Box.Title>
        <Box.Content css={{ padding: "30px 0" }}>
          <S.Wrapper>
            <S.Title css={{ color: "$white" }}>197</S.Title>
            <S.Description>Total de dias do regime</S.Description>
          </S.Wrapper>
          <S.Wrapper>
            <S.Title css={{ color: "#FF5C5C" }}>112</S.Title>
            <S.Description>Dias a cumprir</S.Description>
          </S.Wrapper>
          <S.Wrapper>
            <S.Title css={{ color: "#92FFB1" }}>85</S.Title>
            <S.Description>Dias remidos</S.Description>
          </S.Wrapper>
        </Box.Content>
      </Box>

      <Flex css={{ marginTop: "40px", columnGap: "20px" }}>
        <Box>
          <Box.Title>Atendimentos</Box.Title>
          <Box.Content>
            <S.ImageContainer css={{ width: "300px", height: "200px" }}>
              <Image
                src="/chart.svg"
                alt="Graficos genéricos"
                layout="fill"
                objectFit="cover"
              />
            </S.ImageContainer>
          </Box.Content>
        </Box>
        <Box>
          <Box.Title>Dias trabalhados</Box.Title>
          <Box.Content css={{ alignItems: 'center', columnGap: '50px', width: '400px', justifyContent: 'center' }}>
            <S.ImageContainer css={{ width: "145px", height: "130px" }}>
              <Image
                src="/donut.svg"
                alt="Graficos genéricos"
                layout="fill"
                objectFit="cover"
              />
            </S.ImageContainer>

            <S.WrapperGraphicContent>
              <div>
                <p>Total de dias</p>
                <h3>100</h3>
              </div>
              <div>
                <p>Dias trabalhados</p>
                <h3>84</h3>
              </div>
              <div>
                <p>Dias faltantes</p>
                <h3>16</h3>
              </div>
            </S.WrapperGraphicContent>
          </Box.Content>
        </Box>
      </Flex>
    </S.Container>
  );
}
