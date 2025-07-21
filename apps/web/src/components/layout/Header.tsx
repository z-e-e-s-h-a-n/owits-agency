"use client";
import React from "react";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@workspace/ui/components/avatar";
import { ChevronDown, Dot, Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/destinations", label: "DESTINATION" },
    { href: "/services", label: "SERVICES" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="flex items-center gap-4 py-4">
      <span className="text-2xl font-bold m-auto">Traventure</span>
      <nav className="flex-center gap-4 flex-1">
        <ul className="flex items-center gap-6 mx-auto bg-card px-4 py-2 rounded-full">
          {navLinks.map((link) => {
            const isActive = pathname.endsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn("flex-center", isActive && "text-link")}
                >
                  {isActive && <Dot strokeWidth={4} />}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-4">
          <div className="space-x-2">
            <Button size="icon" variant="outline" className="rounded-full">
              <Heart />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full">
              <ShoppingBag />
            </Button>
            <ThemeSwitch />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-start [&>span]:leading-5">
                <span className="text-sm text-muted-foreground">Hello !</span>
                <span className="flex-center font-medium">
                  Muhammad <ChevronDown className="size-4" />
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent></DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}

export default Header;
