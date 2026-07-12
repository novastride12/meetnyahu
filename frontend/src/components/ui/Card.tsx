import type { ReactNode, CSSProperties } from "react";
import { cn } from "../../lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Card({
  children,
  className,
  style,
}: CardProps) {
  return (
    <div
      className={cn("card", className)}
      style={style}
    >
      {children}
    </div>
  );
}