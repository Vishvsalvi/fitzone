import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  image: string
  className?: string
}

export function ServiceCard({ title, image, className }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "relative aspect-square rounded-3xl overflow-hidden group cursor-pointer",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-[#2A3D28]/60 transition-all duration-300 group-hover:bg-[#2A3D28]/40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Title */}
      <div className="absolute inset-0 p-6 md:p-8 flex items-end">
        <h3 className="text-white text-2xl md:text-2xl font-bold leading-tight">
          {title}
        </h3>
      </div>
    </div>
  )
}

