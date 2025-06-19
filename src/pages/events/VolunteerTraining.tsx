
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const VolunteerTraining = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4">
            <Link to="/events" className="inline-flex items-center text-sage-600 hover:text-rose-600 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-4xl font-bold text-sage-800">Volunteer Training Session</h1>
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Volunteer
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center text-sage-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>April 12, 2024</p>
                  </div>
                </div>
                <div className="flex items-center text-sage-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Time</p>
                    <p>6:00 PM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center text-sage-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>Floral PRC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-sage-800 mb-6">Training Information</h2>
              <div className="prose prose-lg max-w-none text-sage-600">
                <p className="text-xl leading-relaxed mb-6">
                  Orientation and training for new volunteers. Learn about our services and how you can make a difference.
                </p>
                
                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Training Topics</h3>
                <ul className="space-y-2">
                  <li>Overview of Floral PRC mission and services</li>
                  <li>Confidentiality and professional boundaries</li>
                  <li>Client interaction guidelines</li>
                  <li>Available volunteer opportunities</li>
                  <li>Safety procedures and protocols</li>
                  <li>Support resources for volunteers</li>
                </ul>

                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Volunteer Opportunities</h3>
                <ul className="space-y-2">
                  <li>Client advocates and mentors</li>
                  <li>Administrative support</li>
                  <li>Event planning and coordination</li>
                  <li>Community outreach</li>
                  <li>Educational program assistance</li>
                </ul>

                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">What to Bring</h3>
                <p>Please bring a valid ID and any completed volunteer application forms. Light refreshments will be provided.</p>
              </div>

              <div className="mt-12 text-center">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
                  Register for Training
                </Button>
                <p className="text-sage-600 mt-4">Required for all new volunteers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerTraining;
