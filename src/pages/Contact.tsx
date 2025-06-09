
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Contact Us</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              We're here for you 24/7. Reach out to us anytime you need support, 
              have questions, or want to learn more about our services.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Get in Touch</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">24/7 Helpline</h3>
                      <p className="text-sage-600">(555) 123-4567</p>
                      <p className="text-sm text-sage-500">Free, confidential support anytime</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Email</h3>
                      <p className="text-sage-600">info@hopepregnancycenter.org</p>
                      <p className="text-sm text-sage-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Address</h3>
                      <p className="text-sage-600">123 Hope Street<br />Caring City, CC 12345</p>
                      <p className="text-sm text-sage-500">Free parking available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Office Hours</h3>
                      <div className="text-sage-600">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                      <p className="text-sm text-sage-500">24/7 helpline always available</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Actions */}
                <div className="bg-sage-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-sage-800 mb-6">Connect With Us Today</h3>
                  <p className="text-sage-600 mb-8 leading-relaxed">
                    Ready to reach out? Choose the method that's most comfortable for you. 
                    We're here to listen and support you with compassion and confidentiality.
                  </p>
                  
                  <div className="space-y-4">
                    <a href="tel:+15551234567">
                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 text-lg">
                        <Phone className="mr-3 h-5 w-5" />
                        Call Us Now: (555) 123-4567
                      </Button>
                    </a>
                    
                    <a href="mailto:info@hopepregnancycenter.org?subject=Support%20Request&body=Hello%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20your%20services.%0A%0AThank%20you">
                      <Button variant="outline" className="w-full border-sage-300 text-sage-700 hover:bg-sage-100 py-4 text-lg">
                        <Mail className="mr-3 h-5 w-5" />
                        Send Us an Email
                      </Button>
                    </a>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white rounded-lg border border-sage-200">
                    <p className="text-sm text-sage-600 text-center">
                      <strong>Confidential & Free:</strong> All our services are completely confidential 
                      and provided at no cost to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-rose-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Heart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-sage-800 mb-6">Need Immediate Support?</h2>
              <p className="text-xl text-sage-600 mb-8 leading-relaxed">
                If you're in crisis or need immediate assistance, don't hesitate to reach out. 
                Our 24/7 helpline is staffed by trained counselors ready to provide support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+15551234567">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-3">
                    Call (555) 123-4567
                  </Button>
                </a>
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50 text-lg px-8 py-3">
                  Walk-In Welcome
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
