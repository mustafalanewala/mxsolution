import { Nav } from "@/components/site/Nav";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SmoothScroll } from "@/components/SmoothScroll";

/**
 * The whole page is the ask. No preamble section above it — anyone who
 * clicked "Let's talk" has already been sold, and a second pitch here
 * only puts distance between them and the form.
 *
 * No floating WhatsApp button either: the channel list is right there.
 */
export default function ContactPage() {
  return (
    <SmoothScroll>
      <Nav />
      <main id="main-content">
        <Contact
          lines={["Let's talk."]}
          intro="Tell us what's not working. We'll tell you what we think it actually is, and what it would take to fix — before anyone talks about a quote."
          className="pt-14 md:pt-16 lg:pt-28"
        />
      </main>
      <SiteFooter />
    </SmoothScroll>
  );
}
