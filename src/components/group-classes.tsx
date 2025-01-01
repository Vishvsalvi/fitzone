import { Check } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface GroupClassesProps {
  title: string
  description: string
  borderTitle: string
  benefits: string[]
  imageUrl: string
  imageOnRight: boolean
}

export function GroupClasses({ title, description, benefits, imageUrl, imageOnRight, borderTitle }: GroupClassesProps) {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container px-8 md:px-12 lg:px-16">
        <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${imageOnRight ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`space-y-8 ${imageOnRight ? 'lg:order-first' : 'lg:order-last'}`}>
            <Badge 
              variant="outline" 
              className="border-[#96F95D] text-[#96F95D] rounded-full px-6 py-2 text-base"
            >
              {borderTitle}
            </Badge>
            
            <h2 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-white/80 text-lg">
              {description}
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#96F95D] flex items-center justify-center">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-white text-xl">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className={`relative aspect-[16/12] rounded-3xl overflow-hidden ${imageOnRight ? 'lg:order-last' : 'lg:order-first'}`}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

