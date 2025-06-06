
import React, { useState } from 'react';
import { Heart, Gift, Users, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [isMonthly, setIsMonthly] = useState(false);

  const donationAmounts = [25, 50, 100, 250, 500];

  const impactMessages = {
    25: "Provides essential baby supplies for one family",
    50: "Funds a comprehensive health consultation", 
    100: "Supports educational resources for expecting parents",
    250: "Covers prenatal vitamins for 5 families for a month",
    500: "Funds our family support program for a week"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-800 mb-4">
            Your Gift Makes a Difference
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Every donation directly supports families in our community, providing them with 
            the resources, care, and hope they need during their pregnancy journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-sage-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Gift className="mr-3 h-6 w-6" />
                  Make Your Donation
                </CardTitle>
                <CardDescription className="text-rose-100">
                  Choose your donation amount and frequency
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Monthly/One-time toggle */}
                  <div className="flex bg-sage-100 rounded-lg p-1">
                    <button
                      onClick={() => setIsMonthly(false)}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                        !isMonthly 
                          ? 'bg-white text-sage-800 shadow-sm' 
                          : 'text-sage-600 hover:text-sage-800'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setIsMonthly(true)}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                        isMonthly 
                          ? 'bg-white text-sage-800 shadow-sm' 
                          : 'text-sage-600 hover:text-sage-800'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>

                  {/* Amount selection */}
                  <div className="grid grid-cols-3 gap-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedAmount === amount
                            ? 'border-rose-500 bg-rose-50 text-rose-700'
                            : 'border-sage-200 hover:border-sage-300 text-sage-700'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                    <input
                      type="number"
                      placeholder="Other"
                      className="p-3 rounded-lg border-2 border-sage-200 focus:border-rose-500 outline-none"
                      onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    />
                  </div>

                  {/* Impact message */}
                  <div className="bg-sage-50 rounded-lg p-4">
                    <p className="text-sage-700 text-sm">
                      <strong>${selectedAmount} {isMonthly ? 'monthly' : ''}</strong> - {impactMessages[selectedAmount] || "Provides vital support to families in need"}
                    </p>
                  </div>

                  <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 text-lg">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate ${selectedAmount} {isMonthly ? 'Monthly' : 'Now'}
                  </Button>

                  <p className="text-xs text-sage-600 text-center">
                    Hope Pregnancy Center is a 501(c)(3) organization. Your donation is tax-deductible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-sage-100">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Family Support</h3>
                <p className="text-sage-600 text-sm">Comprehensive care and guidance for expecting families</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-sage-100">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Baby Essentials</h3>
                <p className="text-sage-600 text-sm">Diapers, formula, clothes, and other necessities</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-sage-100">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Health Services</h3>
                <p className="text-sage-600 text-sm">Medical consultations and prenatal care support</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-sage-100">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Education</h3>
                <p className="text-sage-600 text-sm">Parenting classes and educational resources</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-sage-100">
              <h3 className="text-2xl font-semibold text-sage-800 mb-4">Every Dollar Counts</h3>
              <p className="text-sage-700 mb-4">
                Your generosity directly impacts the lives of families in our community. 
                Together, we're building a foundation of hope and support for every child and family.
              </p>
              <div className="flex items-center text-sm text-sage-600">
                <Heart className="h-4 w-4 text-rose-500 mr-2" />
                <span>95% of donations go directly to family support programs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
