
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "New Mother",
      content: "Hope Pregnancy Center was there for me when I felt most alone. Their compassionate staff provided not just resources, but genuine care and support throughout my entire pregnancy journey.",
      rating: 5
    },
    {
      name: "Jennifer & David",
      role: "Grateful Parents",
      content: "The parenting classes and ongoing support we received helped us feel confident and prepared. We can't thank the team enough for walking alongside us during this beautiful journey.",
      rating: 5
    },
    {
      name: "Maria L.",
      role: "Community Member",
      content: "As a volunteer, I've witnessed firsthand the incredible impact this organization has on families. The love and dedication of the staff truly makes a difference in our community.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-800 mb-4">
            Stories of Hope
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Hear from the families and community members whose lives have been 
            touched by the work we do together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-sage-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-rose-300 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-rose-400 text-rose-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-sage-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-sage-100 pt-4">
                  <div className="font-semibold text-sage-800">{testimonial.name}</div>
                  <div className="text-sm text-sage-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-sage-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-sage-800 mb-4">
              Join Our Community of Hope
            </h3>
            <p className="text-sage-700 mb-6">
              Whether you're seeking support, want to volunteer, or wish to make a donation, 
              you're helping us create a stronger, more compassionate community for all families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Share Your Story
              </button>
              <button className="border border-sage-400 text-sage-700 hover:bg-sage-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
