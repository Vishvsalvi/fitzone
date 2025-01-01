import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtonCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function ButtonCTA({ children, className, ...props }: ButtonCTAProps) {
  return (
    <Button
      className={cn(
        "bg-[#96F95D] text-black hover:bg-[#7ad34b] font-medium px-6 rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

