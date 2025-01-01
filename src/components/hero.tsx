import { ButtonCTA } from "./button-cta"
import { ReviewCard } from "./review-card"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image with darker overlay */}
<div
  className="absolute inset-0 bg-black/70 z-10"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://scontent.fbom37-1.fna.fbcdn.net/v/t39.30808-6/427997169_7134734373292518_5388948031405210096_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=NwkOMn2kQGIQ7kNvgG2x6qK&_nc_zt=23&_nc_ht=scontent.fbom37-1.fna&_nc_gid=ANtF2euLsiFspCYEUaj__7m&oh=00_AYD35GklXeF_DJnIdPxDb4bBgHzZuhHdlx7SxUoxjbTSaQ&oe=6779846F')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
/>

      {/* Content */}
      <div className="container relative z-20 px-4 pt-32 md:pt-40 pb-16 md:pb-20 flex flex-col items-center text-center gap-6 md:gap-8">
        <h1 className="tracking-tighter text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight">
          Crush your health and fitness goals in no time
        </h1>
        <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-2xl">
          It doesn't matter if your goal is to get stronger, burn fat, or to just stay fit our
          world class coaches will guide you every step of the way.
        </p>
        <ButtonCTA className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6">Start your journey</ButtonCTA>
        <div className="mt-8 md:mt-12">
          <ReviewCard />
        </div>
      </div>
    </div>
  )
}

