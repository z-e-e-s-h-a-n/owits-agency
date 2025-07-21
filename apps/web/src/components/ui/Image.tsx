"use client";

import { useEffect, useState } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "@workspace/ui/lib/utils";

interface ImageProps extends NextImageProps {
  src: string;
  wrapperCn?: string;
}

function Image({ src, wrapperCn, ...props }: ImageProps) {
  const [blurDataURL, setBlurDataURL] = useState("");

  useEffect(() => {
    fetch(`/api/blur?src=${encodeURIComponent(src)}`)
      .then((res) => res.json())
      .then((data) => setBlurDataURL(data.blurDataURL));
  }, [src]);

  return wrapperCn ? (
    <div className={cn("relative overflow-hidden", wrapperCn)}>
      <NextImage
        {...props}
        src={src}
        placeholder={blurDataURL ? "blur" : undefined}
        blurDataURL={blurDataURL}
      />
    </div>
  ) : (
    <NextImage
      {...props}
      src={src}
      placeholder={blurDataURL ? "blur" : undefined}
      blurDataURL={blurDataURL}
    />
  );
}

export default Image;
