import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
// Hidden until the film exists. Restore this import together with the
// <VideoBand /> line in the page below.
// import { VideoBand } from "@/components/site/VideoBand";
import { Approach } from "@/components/site/Approach";
import { Work } from "@/components/site/Work";
import { Difference } from "@/components/site/Difference";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main id="main-content">
        <Hero />
        <Problem />
        {/* <VideoBand /> — hidden until we have the film */}
        <Approach />
        <Work />
        <Difference />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </SmoothScroll>
  );
}
