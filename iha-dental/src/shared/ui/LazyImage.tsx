import { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement>;

export default function LazyImage(props: Props) {
  return (
    <img
      loading="lazy"
      decoding="async"
      className="h-auto w-full"
      {...props}
    />
  );
}