import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl"
  };

  return (
    <div className={cn("font-serif font-bold", sizeClasses[size], className)}>
      <span className="bg-gradient-gold bg-clip-text text-transparent">
        Fernanda Varella
      </span>
      <div className="text-sm font-medium text-gray-medium mt-1">
        BEAUTY ACADEMY
      </div>
    </div>
  );
};