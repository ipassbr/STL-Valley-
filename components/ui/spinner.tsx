import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ 
  className, 
  ariaLabel = "Carregando...",
  size = "default",
  ...props 
}: React.ComponentProps<"svg"> & {
  ariaLabel?: string
  size?: "sm" | "default" | "lg"
}) {
  const sizeClasses = {
    sm: "size-3",
    default: "size-4",
    lg: "size-6",
  }

  return (
    <Loader2Icon
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
      aria-busy="true"
      className={cn("animate-spin", sizeClasses[size], className)}
      {...props}
    />
  )
}

export { Spinner }
