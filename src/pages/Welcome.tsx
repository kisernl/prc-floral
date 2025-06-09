
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Quote } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Welcome to Hope Pregnancy Center</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              A personal message from our Executive Director
            </p>
          </div>
        </section>

        {/* Welcome Letter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-sage-50 rounded-lg p-8 md:p-12">
                <div className="flex items-center justify-center mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80" 
                    alt="Sarah Johnson, Executive Director"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-sage-800 mb-2">Sarah Johnson</h2>
                  <p className="text-rose-600 font-semibold text-lg">Executive Director</p>
                </div>

                <div className="space-y-6 text-sage-700 leading-relaxed">
                  <div className="flex items-start">
                    <Quote className="h-8 w-8 text-rose-500 flex-shrink-0 mr-4 mt-1" />
                    <div>
                      <p className="text-lg mb-6">
                        Dear Friend,
                      </p>
                      
                      <p className="mb-6">
                        Welcome to Hope Pregnancy Center, where every story matters and every life is precious. 
                        For over 15 years, we have been a beacon of hope in our community, providing compassionate 
                        support to women and families during one of life's most significant journeys.
                      </p>

                      <p className="mb-6">
                        When I first joined Hope Pregnancy Center, I was struck by the profound impact that genuine 
                        care and support can have on a person's life. Every day, I witness the transformation that 
                        occurs when someone feels truly seen, heard, and valued. Whether someone is facing an 
                        unplanned pregnancy, needs parenting resources, or simply wants a safe space to explore 
                        their options, we are here with open arms and open hearts.
                      </p>

                      <p className="mb-6">
                        Our mission goes beyond providing services – we're building a community where every family 
                        can thrive. From our free pregnancy testing and ultrasounds to our comprehensive parenting 
                        classes and ongoing support programs, we walk alongside families every step of the way. 
                        We believe that with the right support, every person can make informed decisions and build 
                        the future they envision for themselves and their children.
                      </p>

                      <p className="mb-6">
                        What makes our center special is not just our services, but our people. Our dedicated staff 
                        and volunteers bring warmth, expertise, and unwavering commitment to this work. We understand 
                        that each person who walks through our doors has a unique story, and we honor that by 
                        providing personalized, judgment-free care.
                      </p>

                      <p className="mb-6">
                        Whether you're seeking support for yourself, looking for ways to get involved in our mission, 
                        or simply want to learn more about what we do, I invite you to explore our website and 
                        discover the many ways Hope Pregnancy Center serves our community. Together, we're not just 
                        changing individual lives – we're strengthening families and building a more compassionate world.
                      </p>

                      <p className="mb-6">
                        Thank you for taking the time to learn about our work. If you have any questions or would 
                        like to connect, please don't hesitate to reach out. We're here for you, and we're honored 
                        to be part of your journey.
                      </p>

                      <p className="font-semibold">
                        With warmth and gratitude,
                      </p>
                      
                      <div className="mt-4">
                        <img 
                          src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&w=300&q=80" 
                          alt="Sarah Johnson signature"
                          className="h-16 object-contain"
                        />
                        <p className="font-semibold text-sage-800">Sarah Johnson</p>
                        <p className="text-rose-600">Executive Director</p>
                        <p className="text-sm text-sage-600">Hope Pregnancy Center</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-rose-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Heart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-sage-800 mb-6">Ready to Connect?</h2>
              <p className="text-xl text-sage-600 mb-8 leading-relaxed">
                We're here to support you every step of the way. Reach out today to learn more about 
                our services or to schedule a confidential appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  Contact Us
                </a>
                <a href="/services" className="border-2 border-sage-300 text-sage-700 hover:bg-sage-50 font-semibold py-3 px-8 rounded-lg transition-colors">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Welcome;
