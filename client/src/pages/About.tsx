import { Check } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Expert Team",
      description: "Certified developers and designers with years of experience"
    },
    {
      title: "Proven Results", 
      description: "Track record of improving website performance by 300%+"
    },
    {
      title: "Full Support",
      description: "Ongoing maintenance and support for long-term success"
    }
  ];

  return (
    <div>
      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-about">About PixelBoost</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-about-description">
              We're a team of passionate web developers and designers dedicated to transforming websites into powerful business tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900" data-testid="heading-mission">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed" data-testid="text-mission-description">
                At PixelBoost, we believe every business deserves a website that not only looks exceptional but performs flawlessly. Our comprehensive enhancement services ensure your online presence drives real results.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`feature-${index}`}>
                    <div className="w-6 h-6 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Web development technology workspace" 
                className="rounded-2xl shadow-xl w-full"
                data-testid="img-about"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
