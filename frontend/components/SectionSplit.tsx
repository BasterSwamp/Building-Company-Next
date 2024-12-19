interface SectionSplitProps {
  children: React.ReactNode;
}

export default function SectionSplit({ children }: SectionSplitProps) {
  return (
    <div className="bg-[#f6fcff] md:py-24 py-8 space-y-12 md:space-y-32">
      {children}
    </div>
  );
}
