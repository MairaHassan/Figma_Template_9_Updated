import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/ChooseUs";
import StatsSection from "./components/StatsSection";
import MenuSection from "./components/MenuSection";
import MeetOurChef from "./components/MeetOurChef";
import LatestNewsBlog from "./components/BlogPost";
import FoodCategory1 from "./components/foodcategory";
import Testimonials from "./components/testimonial";
import Hero5 from "./components/Hero2";
import AboutUs from "./components/AboutUs";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <FoodCategory1 />
      <WhyChooseUs/>
      <StatsSection />
      <MenuSection />
      <MeetOurChef />
      <Testimonials />
      <Hero5 />
      <LatestNewsBlog />
      <Footer />
    </div>
  );
}
