import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "PixelBoost transformed our outdated website into a modern, high-performing platform. Our conversion rate increased by 180% within the first month!",
      author: {
        name: "Sarah Johnson",
        title: "CEO, TechStart Inc.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
      }
    },
    {
      rating: 5,
      text: "The team's attention to detail and expertise in performance optimization made our site lightning fast. Customer satisfaction has never been higher.",
      author: {
        name: "Michael Chen", 
        title: "Founder, EcoSolutions",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
      }
    },
    {
      rating: 5,
      text: "Professional, reliable, and results-driven. PixelBoost didn't just redesign our website—they transformed our entire online presence.",
      author: {
        name: "Emily Rodriguez",
        title: "Owner, Creative Studio", 
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
      }
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "98%", label: "Client Retention" }
  ];

  return (
    <div>
      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-testimonials">What Our Clients Say</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-testimonials-description">
              Don't just take our word for it. Here's what business owners say about working with PixelBoost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg" data-testid={`testimonial-${index}`}>
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed" data-testid={`testimonial-text-${index}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.author.image} 
                    alt={`${testimonial.author.name} - ${testimonial.author.title}`}
                    className="w-12 h-12 rounded-full mr-4"
                    data-testid={`testimonial-avatar-${index}`}
                  />
                  <div>
                    <div className="font-semibold text-gray-900" data-testid={`testimonial-name-${index}`}>
                      {testimonial.author.name}
                    </div>
                    <div className="text-gray-600 text-sm" data-testid={`testimonial-title-${index}`}>
                      {testimonial.author.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 bg-white p-8 rounded-2xl shadow-lg" data-testid="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
