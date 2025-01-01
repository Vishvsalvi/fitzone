import { Badge } from "@/components/ui/badge"
import { ButtonCTA } from "./button-cta"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Month to\nMonth",
    price: 16500,
    features: [
      "All classes",
      "All member events",
      "Full gym access",
    ],
    renewal: "Charges every month\nunless you cancel",
  },
  {
    name: "6 Month\nMembership",
    price: 14500,
    features: [
      "All classes",
      "All member events",
      "Full gym access",
    ],
    renewal: "Charges every 6 months\nunless you cancel",
  },
  {
    name: "1 Year\nMembership",
    price: 12500,
    features: [
      "All classes",
      "All member events",
      "Full gym access",
    ],
    renewal: "Charges every year\nunless you cancel",
  },
]

export function Pricing() {
  return (
    <section className="bg-[#2A3D28] py-16 md:py-24">
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <Badge 
            variant="outline" 
            className="border-white/20 text-white rounded-full px-6 py-1.5 mb-6 text-base"
          >
            Membership
          </Badge>
          <h2 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-center max-w-3xl">
            Crushing your health and fitness goals starts here...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">{plan.name}</h3>
              <p className="mb-8">
                <span className="text-[#2A3D28] text-4xl font-bold">₹{plan.price}</span>
                <span className="text-gray-600">/mo</span>
              </p>
              <ul className="space-y-4 mb-8 w-full">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5 text-[#2A3D28]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mb-6 whitespace-pre-line">
                {plan.renewal}
              </p>
              {/* <ButtonCTA className="text-white w-full bg-black hover:bg-black/90">
                Start 7 day free trial
              </ButtonCTA> */}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-[#2A3D28]/60 backdrop-blur-sm rounded-[32px] p-8 flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-lg mb-6">
                {index === 1 && '"6 months after joining I lost 15lbs and I\'m getting stronger."'}
                {index === 2 && '"I\'ve gotten so much stronger after joining! It\'s insane. My deadlift increased by 65lbs."'}
                {index === 3 && '"While I am passionate about health and fitness, this gym is more like a community to me than anything!"'}
              </p>
              <img
                src="https://lh3.googleusercontent.com/a-/ALV-UjWU0Zt0JuTUAyp2lYxLHgfcnMoBFjSZAZEC84lN-DlnSRI555l6=w75-h75-p-rp-mo-ba2-br100"
                alt="Member"
                className="w-16 h-16 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

