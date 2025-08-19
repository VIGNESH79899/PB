import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses", 
      price: "$999",
      period: "one-time",
      features: [
        "Basic Website Redesign",
        "Mobile Responsiveness", 
        "Basic SEO Setup",
        "30 Days Support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      description: "Best for growing businesses",
      price: "$2,499", 
      period: "one-time",
      features: [
        "Complete Website Redesign",
        "Performance Optimization",
        "Advanced SEO Package",
        "Security Enhancements", 
        "90 Days Support"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "$4,999",
      period: "one-time", 
      features: [
        "Complete Digital Transformation",
        "Advanced Performance Optimization",
        "Enterprise SEO Strategy",
        "Advanced Security Suite",
        "1 Year Support & Maintenance"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div>
      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-pricing">Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-pricing-description">
              Choose the perfect plan for your business needs. All plans include our commitment to quality and ongoing support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all relative ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary to-primary/90 text-white transform scale-105"
                    : "bg-white border-2 border-gray-200 hover:border-primary"
                }`}
                data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold" data-testid="badge-popular">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-4 ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                    {plan.description}
                  </p>
                  <div className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </div>
                  <div className={`${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                    {plan.period}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center" data-testid={`feature-${index}-${featureIndex}`}>
                      <Check className={`mr-3 w-5 h-5 ${plan.popular ? "text-blue-200" : "text-secondary"}`} />
                      <span className={plan.popular ? "text-white" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 px-6 font-semibold rounded-lg transition-all ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                  variant={plan.popular ? "secondary" : "outline"}
                  data-testid={`button-${plan.name.toLowerCase()}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4" data-testid="text-custom-solution">Need a custom solution? We're here to help.</p>
            <Button className="bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-3 rounded-lg font-semibold hover:from-secondary/80 hover:to-secondary transition-all" data-testid="button-custom-quote">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
