import Hero from "./components/Hero";
import LeadersCardContainer from "./components/LeadersCardContainer";
import NavbarComp from "./components/Navbar";
import ProductsCardContainer from "./components/ProductsCardContainer";
function App() {
  return (
    <div>
      <NavbarComp></NavbarComp>
      <Hero></Hero>
      <ProductsCardContainer></ProductsCardContainer>
      <LeadersCardContainer></LeadersCardContainer>
    </div>
  );
}

export default App;
