import Hero from "./sections/hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import EducationSection from "./sections/EducationSection"
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
            </div>
        </main>
    )
}
export default App