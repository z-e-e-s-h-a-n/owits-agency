"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@workspace/ui/components/sheet";
import { Button } from "@workspace/ui/components/button";
import { Menu, Heart, ShoppingBag } from "lucide-react";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { navLinks } from "@/constants";

const MobileNav = () => {
  const pathname = usePathname();
  const user = null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col justify-between p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold">Menu</span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-4 mb-auto">
          {navLinks.map((link) => {
            const isActive = pathname.endsWith(link.href);
            return (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-8 flex flex-col gap-4 border-t pt-6">
          <div className="flex items-center gap-3">
            <SheetClose asChild>
              <Button size="icon" variant="outline" className="rounded-full">
                <Heart className="size-5" />
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button size="icon" variant="outline" className="rounded-full">
                <ShoppingBag className="size-5" />
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <ThemeSwitch />
            </SheetClose>
          </div>

          <SheetClose asChild>
            {user ? (
              <Button className="w-full">Dashboard</Button>
            ) : (
              <Button className="w-full">Login</Button>
            )}
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
