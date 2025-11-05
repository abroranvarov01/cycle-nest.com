import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Smart Bike Computer",
    price: "$199",
    image: "/modern-cycling-computer-display-gps.jpg",
    features: ["GPS Navigation", "Heart Rate Monitor", "Bluetooth Sync"],
  },
  {
    name: "LED Safety Lights",
    price: "$49",
    image: "/bicycle-led-safety-lights-modern.jpg",
    features: ["360° Visibility", "USB Rechargeable", "Auto Brightness"],
  },
  {
    name: "Smart Lock Pro",
    price: "$129",
    image: "/smart-bicycle-lock-technology.jpg",
    features: ["Fingerprint Access", "Alarm System", "App Control"],
  },
  {
    name: "Power Meter Pedals",
    price: "$599",
    image: "/cycling-power-meter-pedals-technology.jpg",
    features: ["Dual-Sided Power", "ANT+ Compatible", "Precision Sensors"],
  },
]

export function ProductsGrid() {
  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 text-balance">
            {"Featured Products"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Premium accessories designed for performance and reliability."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 hover:scale-105 border-border"
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{product.name}</h3>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
