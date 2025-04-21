import Hero from "./sections/hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import EducationSection from "./sections/EducationSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
const App =()=>{
    return (
        <main>
            <div>
                <NavBar />
                <Hero />
                <ShowcaseSection />
                {/* <LogoSection /> */}
                <FeatureCards />
                <EducationSection />
                <TechStack />
                <Contact />
                <Footer />
            </div>
        </main>
    )
}
export default App