import { HomeContainer, Layout, Section } from "./Home.styles"
import { LeftSide } from "./LeftSide"
import { Main } from "./Main"
import { RightSide } from "./RightSide"



export const Home = () => {
  return (
    <HomeContainer>
      <Section>
        <h5><a>Hiring in a hurry? - </a></h5>
        <p>Find talent pros in record time with UpWork and keep buiness moving</p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </HomeContainer>
  )
}
