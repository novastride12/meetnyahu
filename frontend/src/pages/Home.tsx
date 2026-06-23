import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import RecentProjects from "../components/home/RecentProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentProjects />
    </>
  );
}