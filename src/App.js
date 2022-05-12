import styled from "styled-components/macro";
import FontStyle from "../src/assets/Font/FontStyle"
import Header from "./componets/Header";
import Gallery from "./componets/Gallery";
import Thanks from "./Thanks";
function App() {
  return (
    <div> 
      <FontStyle/>
      <Header/>
      <Gallery/>
      <Thanks/>
    </div>
  );
}

export default App;
