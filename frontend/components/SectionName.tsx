interface SectionNameProps {
  name: string;
  id?: string;
}

export default function SectionName({ name, id }: SectionNameProps) {
  return (
    <div id={id} className="flex gap-4 items-center mb-8">
      <div className="h-1 w-10 bg-primary"></div>
      <p className="uppercase font-semibold">{name}</p>
    </div>
  );
}
