import { About, Header, Projects } from "../components";
import { Skills } from "../components/Skills";

export const Home = () => {
  return (
    <div>
      <Header />
      <About/>  
      <Skills/>
      <Projects/>
    </div>
  );
};
