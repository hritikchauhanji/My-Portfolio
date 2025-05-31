import { useEffect, useState } from "react";
import { NavbarMain, HeroMain, HeroGradient, SubHeroSection, AboutMeMain, SkillsMain, SubSkills, ExperienceMain, ProjectsMain, ContactMeMain, FooterMain } from "./components";
import { ThemeProvider } from "./context/ThemeSwitcher/theme"
import HelperSection from "./components/HelperSection";



function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <main className="font-body">
          <NavbarMain />
          <HeroMain />
          <HeroGradient />
          <SubHeroSection />
          <AboutMeMain />
          <SkillsMain />
          <SubSkills />
          <ExperienceMain />
          <ProjectsMain />
          <ContactMeMain />
          <FooterMain />
          {/* <HelperSection /> */}
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
