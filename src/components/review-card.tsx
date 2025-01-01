import { Star } from 'lucide-react'
import Image from "next/image"

export function ReviewCard() {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 text-white">
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="ml-2 bg-white/20 px-2 py-1 rounded text-xs md:text-sm">
          153 awesome reviews
        </span>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src="https://lh3.googleusercontent.com/a-/ALV-UjWU0Zt0JuTUAyp2lYxLHgfcnMoBFjSZAZEC84lN-DlnSRI555l6=w75-h75-p-rp-mo-ba2-br100"
          alt="Review avatar"
          width={48}
          height={48}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
        />
        <p className="text-base md:text-lg">
          "I absolutely love Fit Zone Gym! The staff is incredibly friendly and always willing to help. 
          <br />
          The equipment is top-notch and well-maintained."
        </p>
      </div>
    </div>
  )
}

