
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Who We Are</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              We are a compassionate community dedicated to supporting families during one of life's most important journeys. 
              Our mission is built on love, hope, and unwavering support for every person who walks through our doors.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-sage-800 mb-6">Our Mission</h2>
                <p className="text-sage-600 text-lg leading-relaxed mb-6">
                  To provide compassionate care, practical support, and hope to individuals and families 
                  facing unplanned pregnancies. We believe every life has value and every person deserves 
                  to be treated with dignity and respect.
                </p>
                <p className="text-sage-600 text-lg leading-relaxed">
                  Through our comprehensive services, we empower families to make informed decisions 
                  and provide ongoing support throughout their journey.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=600&q=80" 
                  alt="Compassionate care and support"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-rose-100 rounded-full p-6">
                  <Heart className="h-12 w-12 text-rose-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Subpages */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Learn More About Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <Users className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Our Team</h3>
                <p className="text-sage-600 mb-6">
                  Meet the dedicated professionals who make our mission possible every day.
                </p>
                <Link to="/about/team">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                    Meet Our Team
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <BookOpen className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Our Story</h3>
                <p className="text-sage-600 mb-6">
                  Discover how Hope Pregnancy Center began and the journey that brought us here.
                </p>
                <Link to="/about/story">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                    Read Our Story
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <Heart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Our Impact</h3>
                <p className="text-sage-600 mb-6">
                  See the difference we're making in our community and the lives we've touched.
                </p>
                <Link to="/about/impact">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                    View Our Impact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section with Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" 
                  alt="Community support and care"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sage-800 mb-6">Our Values</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sage-800">Compassion</h3>
                      <p className="text-sage-600">We approach every person with empathy and understanding.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sage-800">Community</h3>
                      <p className="text-sage-600">We believe in the power of community support and connection.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sage-800">Education</h3>
                      <p className="text-sage-600">We provide resources and education to empower informed decisions.</p>
                    </div>
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

export default About;
