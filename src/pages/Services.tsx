
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Baby, Users, Home, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Pregnancy Testing & Ultrasounds",
      description: "Free, confidential pregnancy testing and ultrasound services provided by licensed medical professionals.",
      features: ["Free pregnancy tests", "Limited ultrasounds", "Medical consultations", "Results interpretation"]
    },
    {
      icon: Users,
      title: "Counseling & Support",
      description: "Professional counseling services to help you explore your options and make informed decisions.",
      features: ["Options counseling", "Decision support", "Emotional counseling", "Partner support"]
    },
    {
      icon: Baby,
      title: "Parenting Education",
      description: "Comprehensive classes and workshops to prepare you for parenthood and early child development.",
      features: ["Newborn care classes", "Breastfeeding support", "Child development", "Parenting skills"]
    },
    {
      icon: Home,
      title: "Material Assistance",
      description: "Essential items and resources to help you prepare for your baby's arrival and early care.",
      features: ["Baby clothes & supplies", "Diapers & formula", "Car seats", "Maternity items"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">What We Do</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive support services designed to empower families and 
              help them thrive during one of life's most important journeys.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="bg-sage-50 rounded-lg p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-rose-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-sage-800 mb-3">{service.title}</h3>
                      <p className="text-sage-600 text-lg leading-relaxed mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sage-600">
                            <Heart className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Our Approach</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sage-800 mb-3">1. Connect</h3>
                  <p className="text-sage-600">
                    Reach out to us through our 24/7 helpline, walk-in visits, or online contact form. 
                    We're here when you need us most.
                  </p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-sage-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sage-800 mb-3">2. Schedule</h3>
                  <p className="text-sage-600">
                    Schedule a confidential appointment that works for your schedule. 
                    All services are provided free of charge.
                  </p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sage-800 mb-3">3. Support</h3>
                  <p className="text-sage-600">
                    Receive personalized care and support tailored to your unique situation and needs. 
                    We're with you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Don't wait to get the support you need. Contact us today to schedule your free, confidential appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-3">
                Schedule Appointment
              </Button>
              <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50 text-lg px-8 py-3">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
