import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { GroupClasses } from "@/components/group-classes"
import { Pricing } from "@/components/pricing"
import { AboutContact } from "@/components/about-contact"
import { Footer } from "@/components/footer"

const groupClassesData = [
  {
    title: "Build strength and confidence with our specialized programs",
    description: "Our strength training programs are tailored to help you build muscle, increase power, and boost your overall fitness. Our expert coaches will guide you through proper techniques and personalized routines.",
    benefits: [
      "Customized workout plans",
      "Focus on proper form and technique",
      "Progressive overload for continuous improvement"
    ],
    imageUrl: "https://img.freepik.com/free-photo/strong-man-training-gym_1303-23478.jpg",
    borderTitle: "Strength Training"
  },
  {
    title: "Transform your body with high-intensity interval training",
    description: "Our HIIT classes are designed to burn fat, improve cardiovascular fitness, and boost your metabolism. Get ready for an intense, full-body workout that delivers results.",
    benefits: [
      "Efficient 45-minute sessions",
      "Burn calories even after your workout",
      "Suitable for all fitness levels"
    ],
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5fdfeb249d00c472c28c8e82/1702926795699-H0NCF8P0VV8N77A4IVBA/exercise-gym-trainer-weights.jpg",
    borderTitle: "Personal Training"
  },
  {
    title: "Get fit while having fun with our group CrossFit classes",
    description: "Our group classes are designed to challenge and motivate you in a supportive environment. Whether you're a beginner or an experienced athlete, our coaches will help you achieve your fitness goals.",
    benefits: [
      "Just 30 minutes long",
      "Warm up & workout included",
      "Fun is guaranteed"
    ],
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipN_PFrBU7KrCgJL3oSiuZoVTKZWJ3Hdg-XJ3xAY=s680-w680-h510",
    borderTitle: "Member Only Events"
  },
  {
    title: "Transform your body with high-intensity interval training",
    description: "Our HIIT classes are designed to burn fat, improve cardiovascular fitness, and boost your metabolism. Get ready for an intense, full-body workout that delivers results.",
    benefits: [
      "Efficient 45-minute sessions",
      "Burn calories even after your workout",
      "Suitable for all fitness levels"
    ],
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipP4Krx1xON0yiWIV0vKi_hSdRmx33i9Jya_MzVs=s1360-w1360-h1020",
    borderTitle: "Great Equipment"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      {groupClassesData.map((data, index) => (
        <GroupClasses
          key={index}
          title={data.title}
          description={data.description}
          benefits={data.benefits}
          imageUrl={data.imageUrl}
          imageOnRight={index % 2 !== 0}
          borderTitle={data.borderTitle}
        />
      ))}
      <Pricing />
      <AboutContact />
      <Footer />
    </main>
  )
}

