import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Gift, Users, Star, ExternalLink, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Donate = () => {
  const impactItems = [
    { amount: "$25", impact: "Provides pregnancy tests for 5 women" },
    { amount: "$50", impact: "Covers one counseling session" },
    { amount: "$100", impact: "Supplies baby items for a new family" },
    { amount: "$250", impact: "Sponsors a complete parenting class series" },
    { amount: "$500", impact: "Funds ultrasound services for 10 women" },
    { amount: "$1000", impact: "Supports our program for an entire week" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Make a Difference</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Your generosity provides hope, support, and life-changing resources to families in our community. 
              Every donation, no matter the size, makes a meaningful impact.
            </p>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Online Giving */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-sage-800 mb-8">Online Giving</h2>
                  <div className="bg-sage-50 p-8 rounded-lg mb-6">
                    <Heart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                    <p className="text-sage-700 mb-6">
                      Make a secure one-time or recurring donation through our online giving portal. 
                      Your gift directly supports families in our community.
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 text-lg mb-4"
                    onClick={() => window.open('https://giving.portal.link', '_blank')}
                  >
                    <Gift className="mr-2 h-5 w-5" />
                    Give Online Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-sm text-sage-600">
                    Secure online donations processed instantly
                  </p>
                </div>

                {/* Retail Rewards Program */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-sage-800 mb-8">Shop & Give Back</h2>
                  <div className="bg-rose-50 p-8 rounded-lg mb-6">
                    <ShoppingCart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                    <p className="text-sage-700 mb-6">
                      Support our mission while you shop! Sign up for our retail rewards program 
                      and participating local retailers will donate a percentage of your purchases.
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white py-4 text-lg mb-4"
                    onClick={() => window.open('/retail-rewards', '_blank')}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Learn About Retail Rewards
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-sm text-sage-600">
                    Turn everyday shopping into donations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Information */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-sage-800 mb-8 text-center">Your Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {impactItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-sage-800">{item.amount}</div>
                        <div className="text-sage-600">{item.impact}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Other Ways to Give</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg text-center shadow-md border border-sage-100">
                <Gift className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">In-Kind Donations</h3>
                <p className="text-sage-600 mb-6">
                  Donate baby supplies, maternity clothes, or other essential items that directly benefit our clients.
                </p>
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                  View Wish List
                </Button>
              </div>

              <div className="bg-white p-8 rounded-lg text-center shadow-md border border-sage-100">
                <Users className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Volunteer</h3>
                <p className="text-sage-600 mb-6">
                  Give your time and talents to support our mission. We have opportunities for every skill set and schedule.
                </p>
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                  Learn More
                </Button>
              </div>

              <div className="bg-white p-8 rounded-lg text-center shadow-md border border-sage-100">
                <Star className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Fundraise</h3>
                <p className="text-sage-600 mb-6">
                  Organize a fundraising event in your community or start a peer-to-peer campaign to support our work.
                </p>
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-8">Financial Transparency</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-sage-600 mb-8 leading-relaxed">
                We believe in complete transparency about how your donations are used. 
                Every dollar is carefully stewarded to maximize impact for the families we serve.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-rose-600 mb-2">85%</div>
                  <div className="text-sage-600">Direct Programs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-sage-600 mb-2">10%</div>
                  <div className="text-sage-600">Administration</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-sage-600 mb-2">5%</div>
                  <div className="text-sage-600">Fundraising</div>
                </div>
              </div>
              <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                View Annual Report
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
