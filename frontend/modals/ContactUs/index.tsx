import Container from "@/components/Container";
import ContactDetails from "./ContactDetails";
import ContactFrom from "./ContactFrom";

export default function ContactUs() {
  return (
    <section className="bg-neutral-950 text-white py-8 md:py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <ContactDetails />
          <ContactFrom />
        </div>
      </Container>
    </section>
  );
}
