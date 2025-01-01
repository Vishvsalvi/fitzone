import { Badge } from "@/components/ui/badge"

export function AboutContact() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <Badge 
            variant="outline" 
            className="border-white/20 text-white rounded-full px-6 py-1.5 mb-6 text-base"
          >
            About Fitzone Gym
          </Badge>
          <h2 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-center max-w-4xl mb-6">
            Hi! We're a local gym in Virar.
          </h2>
          <p className="text-white/80 text-base md:text-xl text-center max-w-3xl">
            Fitzone Gym was started by Owner 1 and Owner 2 in 2012. It's our mission to help people in Virar get fit, stay healthy, and live life on their terms without fitness being an obstacle.
          </p>
        </div>

        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden w-full">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://www.thisispaddington.com/cms/images/articles/thumbnails/_1200x630_crop_center-center_82_none/The-Gym-Group-Sports-Day.jpg?mtime=1650971035')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  )
}

