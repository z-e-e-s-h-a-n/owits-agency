import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

interface SocialIconsProps {
  variant?: "hero" | "footer";
  className?: string;
}

function SocialIcons({ variant = "hero", className }: SocialIconsProps) {
  const iconList = [
    {
      Icon: FaFacebook,
      href: "",
      label: "Facebook",
      forVariant: ["footer"],
    },
    {
      Icon: FaInstagram,
      href: "",
      label: "Instagram",
      forVariant: ["hero", "footer"],
    },

    {
      Icon: FaLinkedin,
      href: "",
      label: "LinkedIn",
      forVariant: ["hero", "footer"],
    },
    {
      Icon: FaYoutube,
      href: "",
      label: "YouTube",
      forVariant: ["footer"],
    },
    {
      Icon: FaXTwitter,
      href: "",
      label: "X",
      forVariant: ["hero", "footer"],
    },
  ];

  return variant === "hero" ? (
    <div className={cn("flex flex-col rounded-2xl border", className)}>
      {iconList.map(({ Icon, href, label, forVariant }) => {
        if (!forVariant.includes(variant)) return null;
        return (
          <Button
            key={label}
            variant="outline"
            size="icon"
            className="rounded-full"
            href={href}
            aria-label={label}
          >
            <Icon />
          </Button>
        );
      })}
    </div>
  ) : (
    <div className="flex items-center gap-2">
      {iconList.map(({ Icon, href, label, forVariant }) => {
        if (!forVariant.includes(variant)) return null;
        return (
          <Link
            key={label}
            href={href}
            className="text-muted-foreground hover:text-link"
            aria-label={label}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}

export default SocialIcons;
