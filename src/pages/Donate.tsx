import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Gift, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Donate = () => {
  const donationAmounts = [25, 50, 100, 250, 500, 1000];
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

        {/* Donation Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Donation Amounts */}
                <div>
                  <h2 className="text-3xl font-bold text-sage-800 mb-8">Choose Your Donation</h2>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        className="p-4 border-2 border-sage-200 rounded-lg text-center hover:border-rose-500 hover:bg-rose-50 transition-colors"
                      >
                        <span className="text-2xl font-bold text-sage-800">${amount}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="custom-amount" className="block text-sage-700 font-medium mb-2">
                      Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-sage-600">$</span>
                      <input
                        type="number"
                        id="custom-amount"
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-sage-800 mb-4">Donation Type</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="radio" name="donation-type" value="one-time" className="mr-3" defaultChecked />
                        <span className="text-sage-700">One-time donation</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="donation-type" value="monthly" className="mr-3" />
                        <span className="text-sage-700">Monthly recurring donation</span>
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 text-lg">
                    Donate Now
                  </Button>
                </div>

                {/* Impact Information */}
                <div>
                  <h3 className="text-3xl font-bold text-sage-800 mb-8">Your Impact</h3>
                  <div className="space-y-4">
                    {impactItems.map((item, index) => (
                      <div key={index} className="bg-sage-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
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
            </div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Other Ways to Give</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg text-center shadow-md">
                <Gift className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">In-Kind Donations</h3>
                <p className="text-sage-600 mb-6">
                  Donate baby supplies, maternity clothes, or other essential items that directly benefit our clients.
                </p>
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                  View Wish List
                </Button>
              </div>

              <div className="bg-white p-8 rounded-lg text-center shadow-md">
                <Users className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Volunteer</h3>
                <p className="text-sage-600 mb-6">
                  Give your time and talents to support our mission. We have opportunities for every skill set and schedule.
                </p>
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                  Learn More
                </Button>
              </div>

              <div className="bg-white p-8 rounded-lg text-center shadow-md">
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
        <section className="py-16 bg-white">
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
