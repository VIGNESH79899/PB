import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Home() {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" data-testid="heading-hero">
                  Boost Your Website's{" "}
                  <span className="gradient-text">
                    Performance
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed" data-testid="text-hero-description">
                  Professional website enhancement services that transform your online presence. From redesigns to performance optimization, we make your website work harder for your business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" data-testid="button-view-services">
                  <Button className="btn-primary text-lg px-8 py-4 h-auto">
                    View Our Services
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4 h-auto" data-testid="button-watch-demo">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center" data-testid={`stat-${index}`}>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern startup office workspace" 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="img-hero"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium" data-testid="text-enhancing">Enhancing your website...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
