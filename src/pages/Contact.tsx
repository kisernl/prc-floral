
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
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-sage-800 mb-8">Get in Touch</h2>
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
              </div>

              {/* Contact Form */}
              <div className="bg-sage-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-sage-800 mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sage-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sage-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sage-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sage-700 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Schedule Appointment</option>
                      <option value="services">Questions About Services</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donation Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sage-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3">
                    Send Message
                  </Button>
                </form>
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
                <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-3">
                  Call (555) 123-4567
                </Button>
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
