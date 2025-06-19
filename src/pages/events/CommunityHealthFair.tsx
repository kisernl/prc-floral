
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CommunityHealthFair = () => {
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
                <h1 className="text-4xl font-bold text-sage-800">Community Health Fair</h1>
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Community
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center text-sage-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>April 6, 2024</p>
                  </div>
                </div>
                <div className="flex items-center text-sage-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Time</p>
                    <p>9:00 AM - 3:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center text-sage-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>City Park Pavilion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-sage-800 mb-6">Event Details</h2>
              <div className="prose prose-lg max-w-none text-sage-600">
                <p className="text-xl leading-relaxed mb-6">
                  Free health screenings, information booths, and family activities. We'll have a booth with pregnancy resources and information.
                </p>
                
                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Free Health Screenings</h3>
                <ul className="space-y-2">
                  <li>Blood pressure checks</li>
                  <li>Cholesterol testing</li>
                  <li>BMI assessments</li>
                  <li>Vision and hearing tests</li>
                  <li>Diabetes screening</li>
                </ul>

                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Family Activities</h3>
                <ul className="space-y-2">
                  <li>Face painting for kids</li>
                  <li>Healthy cooking demonstrations</li>
                  <li>Fitness classes and demonstrations</li>
                  <li>Children's games and activities</li>
                  <li>Information booths from local health organizations</li>
                </ul>

                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Floral PRC Booth</h3>
                <p>Visit our booth to learn about our services, meet our team, and get information about pregnancy resources, parenting classes, and support services.</p>
              </div>

              <div className="mt-12 text-center">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
                  More Info
                </Button>
                <p className="text-sage-600 mt-4">Free admission - bring the whole family!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityHealthFair;
