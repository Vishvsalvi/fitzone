import { ServiceCard } from "./service-card"

export function Services() {
  const services = [
    {
      title: "Strength\nTraining",
      image: "https://wpassets.trainingpeaks.com/wp-content/uploads/2021/02/25090028/21027-Blog-1200x675-1.jpg",
    },
    {
      title: "Personal\nTraining",
      image: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png?resize=640:*",
    },
    {
      title: "Member\nOnly Events",
      image: "https://web-back.perfectgym.com/sites/default/files/styles/460x/public/gym%20events.jpg?itok=7k4t0Hip",
    },
    {
      title: "Great\nEquipment",
      image: "https://lh3.googleusercontent.com/p/AF1QipMtZAfujzU5pwS2NHeRwL11UQE5DTSgA5tZbhYv=s1360-w1360-h1020"
      // image: "https://lh3.googleusercontent.com/p/AF1QipP4Krx1xON0yiWIV0vKi_hSdRmx33i9Jya_MzVs=s1360-w1360-h1020",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container px-8 md:px-12 lg:px-16">
        <h2 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-center mb-12 md:mb-16">
          We offer something for everybody
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

