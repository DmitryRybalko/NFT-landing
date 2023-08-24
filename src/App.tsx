import PageWrapper from "./components/PageWrapper/Wrapper";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import ArtSection from "./layout/sections/ArtSection/ArtSection";
import ArtistsSection from "./layout/sections/ArtistsSection/ArtistsSection";
import Main from "./layout/sections/Main/Main";
import NftSection from "./layout/sections/NftSection/NftSection";
import SubscribeSection from "./layout/sections/SubscribeSection/SubscribeSection";

function App() {
  return (
    <PageWrapper>
      <Header />
      <Main />
      <ArtSection />
      <NftSection />
      <ArtistsSection />
      <SubscribeSection />
      <Footer />
    </PageWrapper>
  );
}

export default App;
