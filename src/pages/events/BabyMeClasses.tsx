
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BabyMeClasses = () => {
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
                <h1 className="text-4xl font-bold text-sage-800">Baby & Me Classes</h1>
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Educational
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center text-sage-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Starts</p>
                    <p>March 20, 2024</p>
                  </div>
                </div>
                <div className="flex items-center text-sage-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Time</p>
                    <p>10:00 AM - 11:30 AM</p>
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
              <h2 className="text-3xl font-bold text-sage-800 mb-6">Class Information</h2>
              <div className="prose prose-lg max-w-none text-sage-600">
                <p className="text-xl leading-relaxed mb-6">
                  Weekly classes for new parents covering infant care, development, and bonding. Registration required.
                </p>
                
                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">What You'll Learn</h3>
                <ul className="space-y-2">
                  <li>Infant feeding techniques and schedules</li>
                  <li>Safe sleep practices and SIDS prevention</li>
                  <li>Diaper changing and bathing basics</li>
                  <li>Understanding your baby's cues and needs</li>
                  <li>Bonding activities and developmental play</li>
                  <li>Postpartum self-care for parents</li>
                </ul>

                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Class Format</h3>
                <p>These interactive classes run for 6 weeks and include hands-on demonstrations, group discussions, and Q&A sessions with certified instructors.</p>

                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Who Should Attend</h3>
                <p>Perfect for new parents, expecting parents, or anyone caring for an infant. Partners and support persons are welcome!</p>
              </div>

              <div className="mt-12 text-center">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
                  Register Now
                </Button>
                <p className="text-sage-600 mt-4">Limited spots available - register today!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BabyMeClasses;
