
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users, Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AnnualHopeGala = () => {
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
                <h1 className="text-4xl font-bold text-sage-800">Annual Hope Gala</h1>
                <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Fundraiser
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center text-sage-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>March 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-center text-sage-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Time</p>
                    <p>6:00 PM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center text-sage-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>Grand Ballroom, Downtown Hotel</p>
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
                  Join us for an elegant evening of dinner, entertainment, and celebration as we honor the families and volunteers who make our mission possible.
                </p>
                
                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">What to Expect</h3>
                <ul className="space-y-2">
                  <li>Elegant three-course dinner prepared by award-winning chefs</li>
                  <li>Live entertainment featuring local musicians and performers</li>
                  <li>Silent auction with unique items and experiences</li>
                  <li>Inspiring stories from families we've served</li>
                  <li>Recognition of outstanding volunteers and supporters</li>
                </ul>

                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Dress Code</h3>
                <p>Semi-formal to formal attire. We encourage guests to dress elegantly for this special evening.</p>

                <h3 className="text-2xl font-bold text-sage-800 mt-8 mb-4">Tickets</h3>
                <p>Individual tickets: $150 per person</p>
                <p>Table sponsorship (8 guests): $1,200</p>
                <p>All proceeds support our programs and services for families in need.</p>
              </div>

              <div className="mt-12 text-center">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
                  Coming Soon
                </Button>
                <p className="text-sage-600 mt-4">Registration will open soon!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnnualHopeGala;
