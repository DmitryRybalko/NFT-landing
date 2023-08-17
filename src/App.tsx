import "./App.css";
import PageWrapper from "./components/PageWrapper/Wrapper";
import Header from "./layout/header/Header";
import ArtSection from "./layout/sections/ArtSection/ArtSection";
import Main from "./layout/sections/Main/Main";
import NftSection from "./layout/sections/NftSection/NftSection";

function App() {
  return (
    <PageWrapper>
      <Header />
      <Main />
      <ArtSection />
      <NftSection />
    </PageWrapper>
  );
}

export default App;
