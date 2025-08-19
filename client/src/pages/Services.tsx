import { Palette, Rocket, Search, Shield, Smartphone, Users, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Website Redesign",
      description: "Complete visual overhaul with modern design principles, improved user experience, and brand alignment.",
      features: ["Modern UI/UX Design", "Brand Integration", "Conversion Optimization"]
    },
    {
      icon: Rocket,
      title: "Performance Optimization", 
      description: "Speed up your website with advanced optimization techniques and performance monitoring.",
      features: ["Page Speed Optimization", "Image Compression", "Code Minification"]
    },
    {
      icon: Search,
      title: "SEO Enhancement",
      description: "Improve search engine rankings with comprehensive SEO optimization and content strategy.",
      features: ["Technical SEO Audit", "Keyword Optimization", "Content Strategy"]
    },
    {
      icon: Shield,
      title: "Security Improvements",
      description: "Protect your website with advanced security measures and regular vulnerability assessments.",
      features: ["SSL Certificate Setup", "Security Scanning", "Backup Solutions"]
    },
    {
      icon: Smartphone,
      title: "Mobile Responsiveness",
      description: "Ensure perfect display across all devices with responsive design and mobile optimization.",
      features: ["Responsive Design", "Touch Optimization", "Cross-browser Testing"]
    },
    {
      icon: Users,
      title: "UI/UX Improvements",
      description: "Enhance user experience with intuitive navigation and user-centered design principles.",
      features: ["User Journey Mapping", "Accessibility Compliance", "Conversion Rate Optimization"]
    }
  ];

  const maintenanceService = {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and 24/7 support to keep your website running smoothly and securely.",
    features: [
      "Regular Updates", "Security Monitoring", "Performance Tracking",
      "24/7 Support", "Backup Management", "Content Updates"
    ]
  };

  return (
    <div>
      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-services">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-services-description">
              Comprehensive website enhancement services designed to boost your online performance and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                  data-testid={`service-card-${index}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Maintenance & Support - Full Width */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all" data-testid="service-maintenance">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl flex items-center justify-center mb-6">
                  <Settings className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{maintenanceService.title}</h3>
                <p className="text-gray-600 mb-6">
                  {maintenanceService.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    maintenanceService.features.slice(0, 3),
                    maintenanceService.features.slice(3, 6)
                  ].map((column, columnIndex) => (
                    <ul key={columnIndex} className="space-y-2 text-gray-600">
                      {column.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                  alt="Website enhancement analytics dashboard" 
                  className="rounded-xl shadow-lg w-full"
                  data-testid="img-maintenance"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
