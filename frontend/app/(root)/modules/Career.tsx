import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
import Image from "next/image";

export default function Career() {
  return (
    <section>
      <Container>
        <SectionName name="Career" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <h2 className="mb-4">JOIN OUR TEAM!</h2>
            <Image
              src="/worker.jpg"
              alt="worker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full mb-4 md:hidden"
            />

            <div className="space-y-4 mb-4">
              <p>
                Are you someone who thrives on finding creative solutions to
                challenges, both big and small? If so, we are looking for you.
              </p>
              <p>
                At our company, we offer an exciting and dynamic work
                environment where every day brings new opportunities to learn,
                grow, and make an impact. With a diverse range of unique
                projects, you’ll never face the same challenge twice. Whether
                it’s tackling complex technical tasks or collaborating on
                innovative designs, we encourage curiosity, creativity, and a
                solutions-oriented mindset.
              </p>
              <p>
                We pride ourselves on fostering an environment of constant
                development. Here, you’ll have the chance to enhance your
                skills, expand your knowledge, and work alongside some of the
                most talented and experienced professionals in the industry. Our
                team is united by a shared passion for excellence,
                collaboration, and pushing boundaries to deliver outstanding
                results.
              </p>
            </div>
            <Button />
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/worker.jpg"
              alt="worker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full"
            />
            <Image
              src="/dots.png"
              alt="dots"
              width={200}
              height={200}
              className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
