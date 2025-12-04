import { cn } from "@/lib/utils"

function Skeleton({ 
  className, 
  ariaLabel = "Carregando conteúdo...",
  ...props 
}: React.ComponentProps<"div"> & {
  ariaLabel?: string
}) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
      aria-busy="true"
      {...props}
    />
  )
}

export { Skeleton }
