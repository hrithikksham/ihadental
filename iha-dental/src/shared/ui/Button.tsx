import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-xl px-5 py-3 font-medium transition-all duration-200",

        variant === "primary" &&
          "bg-[var(--color-primary)] text-white hover:opacity-90",

        variant === "secondary" &&
          "bg-[var(--color-secondary)] text-white hover:opacity-90",

        variant === "outline" &&
          "border border-gray-300 bg-white hover:bg-gray-100",

        className
      )}
      {...props}
    />
  );
}