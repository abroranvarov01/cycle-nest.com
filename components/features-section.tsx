import { Card } from "@/components/ui/card"
import { MapPin, Gauge, Battery, Smartphone } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time route mapping and navigation with turn-by-turn directions for every journey.",
  },
  {
    icon: Gauge,
    title: "Performance Metrics",
    description: "Monitor speed, distance, cadence, and calories burned with precision sensors.",
  },
  {
    icon: Battery,
    title: "Long Battery Life",
    description: "Extended battery performance ensures your devices last through the longest rides.",
  },
  {
    icon: Smartphone,
    title: "Smart Connectivity",
    description: "Seamless integration with your smartphone for notifications and music control.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {"Technology That Moves With You"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Every accessory is engineered to enhance your cycling experience with cutting-edge features."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:bg-secondary/10 transition-all duration-300 hover:scale-105 border-border"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
