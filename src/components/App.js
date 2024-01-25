import "../App.css";
import Header from "components/Header/Header";
import HeroSection from "components/HeroSection/HeroSection";
import DescribeSection from "components/DescribeSection/DescribeSection";
import AboutSection from "components/AboutSection/AboutSection";
import UseProductSection from "components/UseProductSection/UseProductSection";
import ContentSection from "components/ContentSection/ContentSection";
import QuestionSection from "components/QuestionSection/QuestionSection";
import InfoSection from "components/InfoSection/InfoSection";
import Footer from "components/Footer/Footer";

import { Container } from "./common/Container/Container.styled";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <HeroSection />
        <DescribeSection />
        <AboutSection />
        <UseProductSection />
        <ContentSection />
        <QuestionSection />
        <InfoSection />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
