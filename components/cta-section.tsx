import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/cycling-route-urban-city-map-lines.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6 text-balance">
            {"Ready to Upgrade Your Ride?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {"Join thousands of cyclists who have transformed their riding experience with our smart accessories."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              Shop All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
