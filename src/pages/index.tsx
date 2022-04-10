import { Aside, PrisonSenteceSection } from "@/components/pages/landing";
import { Flex } from "@/components/shared/layout";

export default function Home() {
  return (
    <Flex>
      <Aside />
      <PrisonSenteceSection />
    </Flex>
  )
}
