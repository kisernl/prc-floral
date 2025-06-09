
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Heart, Calendar, Users } from 'lucide-react';

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="bg-sage-50 py-6">
          <div className="container mx-auto px-4">
            <Link to="/about" className="inline-flex items-center text-sage-600 hover:text-rose-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Who We Are
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Our Story</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Every great mission begins with a single act of compassion. 
              Discover how Hope Pregnancy Center grew from a simple vision to a beacon of hope in our community.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sage-800 mb-2">1995 - The Beginning</h3>
                    <p className="text-sage-600 text-lg leading-relaxed">
                      Hope Pregnancy Center was founded by a group of community volunteers who saw the need 
                      for compassionate support for women facing unplanned pregnancies. Starting in a small 
                      office with just two volunteers, we began offering free pregnancy tests and emotional support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sage-800 mb-2">2005 - Expanding Our Reach</h3>
                    <p className="text-sage-600 text-lg leading-relaxed">
                      As our community grew, so did our services. We expanded to include counseling services, 
                      parenting classes, and material assistance. Our team grew to include licensed counselors 
                      and medical professionals, allowing us to serve families more comprehensively.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sage-800 mb-2">2015 - A New Home</h3>
                    <p className="text-sage-600 text-lg leading-relaxed">
                      Thanks to the generosity of our community, we moved into our current facility - 
                      a welcoming space designed specifically to provide comfort and privacy for our clients. 
                      This milestone allowed us to serve even more families with dignity and care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sage-800 mb-2">Today - Continuing Our Mission</h3>
                    <p className="text-sage-600 text-lg leading-relaxed">
                      Nearly three decades later, we continue to serve our community with the same heart 
                      and dedication that inspired our founding. We've supported thousands of families 
                      and remain committed to providing hope, help, and healing for generations to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision for Future */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">Looking Forward</h2>
            <p className="text-xl text-sage-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              As we look to the future, we remain committed to evolving our services to meet the changing 
              needs of our community while staying true to our founding values of compassion, dignity, and hope.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
