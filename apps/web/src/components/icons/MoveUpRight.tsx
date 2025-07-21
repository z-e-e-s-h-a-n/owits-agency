import { Button, type ButtonProps } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import React from "react";

interface IconProps extends ButtonProps {
  iconCn?: string;
}

function MoveUpRight({ className, iconCn, ...props }: IconProps) {
  return (
    <Button
      size="icon"
      variant="secondary"
      {...props}
      className={cn("rounded-full size-12", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52.81 52.81"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.1"
        className={cn("size-8", iconCn)}
      >
        <path d="M23.5,16.5l-1.2,1.2c2.5,2.5,5.9,3.4,9.1,2.9l-14.5,14.5 1.2,1.2 14.5-14.5c-.5,3.1.4,6.6,2.9,9.1l1.2-1.2c-3.3-3.3-3.3-8.6,0-11.9l-1.2-1.2c-3.3,3.3-8.6,3.3-11.9,0Z" />
      </svg>
    </Button>
  );
}

export default MoveUpRight;
