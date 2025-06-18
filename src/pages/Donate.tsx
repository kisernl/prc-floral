import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Gift, Users, Star, ExternalLink, ShoppingBag } from 'lucide-react';
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

        {/* Online Giving Portal */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Online Giving */}
                <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-8 text-center">
                  <Heart className="h-16 w-16 text-rose-600 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-sage-800 mb-6">Online Giving Portal</h2>
                  <p className="text-sage-600 mb-8 leading-relaxed">
                    Make a secure donation through our online giving portal. Choose from one-time gifts or set up recurring monthly donations to provide ongoing support for families in need.
                  </p>
                  <Button 
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 text-lg mb-4"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Give Online Now
                  </Button>
                  <p className="text-sm text-sage-500">
                    Secure, encrypted donation processing
                  </p>
                </div>

                {/* Retail Rewards */}
                <div className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-lg p-8 text-center">
                  <ShoppingBag className="h-16 w-16 text-sage-600 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-sage-800 mb-6">Shop & Support</h2>
                  <p className="text-sage-600 mb-8 leading-relaxed">
                    Support Floral PRC while you shop! Sign up for retail rewards programs that donate a percentage of your purchases to our organization at no extra cost to you.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 py-4 text-lg mb-4"
                    onClick={() => window.open('https://docs.google.com/document/d/1Zu7q4EsS0q_GdRx9hmnHvzjuKPK0jAybmDniTnRyhjo/edit?usp=sharing', '_blank', 'noopener,noreferrer')}
                  >
                    <Gift className="mr-2 h-5 w-5" />
                    View Retail Partners
                  </Button>
                  <p className="text-sm text-sage-500">
                    Amazon Smile, Kroger Plus, and more
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
              <h3 className="text-3xl font-bold text-sage-800 text-center mb-12">Your Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {impactItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
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
              <div className="bg-white p-8 rounded-lg text-center shadow-md border border-sage-200">
                <Gift className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">In-Kind Donations</h3>
                <p className="text-sage-600 mb-6">
                  Donate baby supplies, maternity clothes, or other essential items that directly benefit our clients.
                </p>
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                  View Wish List
                </Button>
              </div>

              <div className="bg-white p-8 rounded-lg text-center shadow-md border border-sage-200">
                <Users className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Volunteer</h3>
                <p className="text-sage-600 mb-6">
                  Give your time and talents to support our mission. We have opportunities for every skill set and schedule.
                </p>
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                  Learn More
                </Button>
              </div>

              <div className="bg-white p-8 rounded-lg text-center shadow-md border border-sage-200">
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
