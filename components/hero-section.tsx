import { Button } from "@/components/ui/button"
import { RouteAnimation } from "@/components/route-animation"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary pt-20">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/urban-city-cycling-route-map-aerial-view.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Smart Cycling Technology
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-secondary-foreground leading-tight text-balance">
              Ride Smarter,
              <span className="text-primary block">Not Harder</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              {
                "Discover cutting-edge accessories and gadgets designed for the modern cyclist. Track your routes, monitor performance, and elevate every ride."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <RouteAnimation />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
