"use client"

import { useRef, useEffect } from 'react'
import Image from 'next/image'


export function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      text: "CrossFit Gym has completely transformed my fitness journey. The coaches are amazing and the community is so supportive!",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWU0Zt0JuTUAyp2lYxLHgfcnMoBFjSZAZEC84lN-DlnSRI555l6=w75-h75-p-rp-mo-ba2-br100",
    },
    {
      name: "Jane Smith",
      text: "I've never felt stronger or more confident. The variety in workouts keeps me motivated and coming back for more.",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWU0Zt0JuTUAyp2lYxLHgfcnMoBFjSZAZEC84lN-DlnSRI555l6=w75-h75-p-rp-mo-ba2-br100",
    },
    {
      name: "Mike Johnson",
      text: "The results speak for themselves. I've lost 30 pounds and gained a ton of muscle. Best decision I've ever made!",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWU0Zt0JuTUAyp2lYxLHgfcnMoBFjSZAZEC84lN-DlnSRI555l6=w75-h75-p-rp-mo-ba2-br100",
    },
    {
      name: "Sarah Williams",
      text: "As a beginner, I was intimidated at first, but the coaches and members made me feel so welcome. Now I can't imagine my life without CrossFit!",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWU0Zt0JuTUAyp2lYxLHgfcnMoBFjSZAZEC84lN-DlnSRI555l6=w75-h75-p-rp-mo-ba2-br100",
    },
  ]
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="bg-gray-900 py-16 md:py-24 overflow-hidden">
      <div className="container px-4 mb-12">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          What our members say
        </h2>
        <p className="text-white/80 text-center text-lg md:text-xl max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our amazing community has to say about their CrossFit journey.
        </p>
      </div>
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden"
        style={{ width: '200%' }}
      >
        {testimonials.map((testimonial, index) => (
          
          <div 
            key={index} 
            className="flex-none w-[calc(100%/4)] px-4"
          >
            <div className="bg-black rounded-3xl p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full mr-4"
                /> */}
                <h3 className="text-white text-xl font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-white/80 flex-grow">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

