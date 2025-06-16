
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.innerHTML = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

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
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Get in Touch</h2>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
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

                  {/* Contact Action Buttons */}
                  <div className="bg-sage-50 p-6 rounded-lg space-y-4">
                    <h3 className="text-xl font-bold text-sage-800 mb-4">Connect With Us Today</h3>
                    
                    <a href="tel:+15551234567">
                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3">
                        <Phone className="mr-3 h-5 w-5" />
                        Call Us Now: (555) 123-4567
                      </Button>
                    </a>
                    
                    <a href="mailto:info@hopepregnancycenter.org?subject=Support%20Request&body=Hello%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20your%20services.%0A%0AThank%20you">
                      <Button variant="outline" className="w-full border-sage-300 text-sage-700 hover:bg-sage-100 py-3">
                        <Mail className="mr-3 h-5 w-5" />
                        Send Us an Email
                      </Button>
                    </a>
                    
                    <div className="mt-6 p-4 bg-white rounded-lg border border-sage-200">
                      <p className="text-sm text-sage-600 text-center">
                        <strong>Confidential & Free:</strong> All our services are completely confidential 
                        and provided at no cost to you.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="space-y-6">
                  <div className="bg-sage-50 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.319!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27c3b0b5e5%3A0x8e34c60d89e50d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1638360800000!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hope Pregnancy Center Location"
                    ></iframe>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" 
                      alt="Welcoming office environment"
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-sage-800 text-center mb-8">Send Us a Message</h2>
              <p className="text-lg text-sage-600 text-center mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <iframe 
                  data-tally-src="https://tally.so/embed/31geD1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="200" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Sample PRC form"
                ></iframe>
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
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <p className="text-xl text-sage-600 leading-relaxed">
                    If you're in crisis or need immediate assistance, don't hesitate to reach out. 
                    Our 24/7 helpline is staffed by trained counselors ready to provide support.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80" 
                    alt="Supportive counseling session"
                    className="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
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
