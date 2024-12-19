import Image from "next/image";
import Award from "@/public/award.png";
import Badge from "../Badge";

export default function ContactDetails() {
  return (
    <div>
      <div className="relative w-24 h-24">
        <Image
          src={Award}
          alt="award"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h2 className="my-4">Contact Us</h2>
      <p className="text-lg mb-4">
        Have questions, inquiries, or ideas you’d like to discuss? We’re here to
        help. Whether you’re looking to start a project, explore partnership
        opportunities, or simply learn more about our services, our team is
        ready to provide you with the support and information you need.
        <br />
        <br />
        Get in touch with us today and let’s start building something
        extraordinary together. Filling out our contact form, and we’ll respond
        as soon as possible. We look forward to hearing from you!
      </p>

      <Badge />
    </div>
  );
}
