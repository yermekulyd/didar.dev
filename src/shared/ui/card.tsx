import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/utils";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-5 rounded-xl border bg-card py-5 text-card-foreground shadow-xs",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("grid gap-2 px-5", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-5", className)}
      {...props}
    />
  );
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-5", className)}
      {...props}
    />
  );
}
