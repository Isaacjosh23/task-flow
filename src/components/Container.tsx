import type React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="bg-background w-full max-w-[120rem] m-auto p-3.5">
      {children}
    </div>
  );
}

export default Container;
