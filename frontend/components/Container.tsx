interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={`container lg:max-w-6xl px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
}
