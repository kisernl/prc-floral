
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
              Reach out to us anytime you need support, have questions, or want to learn more about our services.
            </p>
          </div>
        </section>

        {/* Contact Information - First Row */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Get in Touch</h2> */}
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Left Column - All Contact Details and Connect */}
                <div className="space-y-8">
                  {/* Contact Details */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sage-800 mb-1">Call or Text</h3>
                        <p className="text-sage-600">(218) 729-6697</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sage-800 mb-1">Email</h3>
                        <p className="text-sage-600">clinic@floralprc.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sage-800 mb-1">Address</h3>
                        <p className="text-sage-600">123 Hope Street<br />Caring City, CC 12345</p>
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
                        <p className="text-sm text-sage-500 mt-2">24/7 helpline always available</p>
                      </div>
                    </div>
                  </div>

                  {/* Connect With Us */}
                  <div className="bg-sage-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-sage-800 mb-4">Connect With Us Today</h3>
                    
                    <a href="tel:+2187296697">
                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 mb-4">
                        <Phone className="mr-3 h-5 w-5" />
                        Call Us: (218) 729-6697
                      </Button>
                    </a>
                    
                    <a href="mailto:clinic@floralprc.com">
                      <Button variant="outline" className="w-full border-sage-300 text-sage-700 hover:bg-sage-100 py-3 mb-4">
                        <Mail className="mr-3 h-5 w-5" />
                        Send Us an Email
                      </Button>
                    </a>
                    
                    <div className="p-4 bg-white rounded-lg border border-sage-200">
                      <p className="text-sm text-sage-600 text-center">
                        <strong>Confidential & Free:</strong> All our services are completely confidential 
                        and provided at no cost to you.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form and Map */}
                <div className="space-y-8">
                  {/* Contact Form */}
                  <div>
                    <h2 className="text-3xl font-bold text-sage-800 mb-8">Send Us a Message</h2>
                    <p className="text-lg text-sage-600 mb-8">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                    <div className="bg-white rounded-lg shadow-sm p-8 border border-sage-200">
                      <iframe 
                        data-tally-src="https://tally.so/embed/31geD1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                        loading="lazy" 
                        width="100%" 
                        height={200}
                        frameBorder={0} 
                        marginHeight={0} 
                        marginWidth={0} 
                        title="Sample PRC form"
                      ></iframe>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-sage-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.319!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27c3b0b5e5%3A0x8e34c60d89e50d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1638360800000!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Floral PRC Location"
                    ></iframe>
                  </div>
                </div>
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
