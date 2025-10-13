"use client";

import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "@workspace/ui/lib/utils";

interface ImageProps extends NextImageProps {
  src: string;
  wrapperCn?: string;
}

function Image({ src, wrapperCn, ...props }: ImageProps) {
  return (
    <div className={cn("relative overflow-hidden", wrapperCn)}>
      <NextImage {...props} src={src} />
    </div>
  );
}

export default Image;
