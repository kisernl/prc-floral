
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, Store, Heart, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const RetailRewards = () => {
  const benefits = [
    "No cost to you - shop as you normally would",
    "Participating retailers donate 2-5% of your purchase",
    "Support local businesses while helping families",
    "Easy online signup and management",
    "Monthly impact reports showing your contribution"
  ];

  const retailers = [
    { name: "Local Grocery Store", percentage: "3%" },
    { name: "Community Pharmacy", percentage: "2%" },
    { name: "Family Restaurant", percentage: "5%" },
    { name: "Clothing Boutique", percentage: "4%" },
    { name: "Home Goods Store", percentage: "3%" },
    { name: "Coffee Shop", percentage: "2%" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <ShoppingCart className="h-20 w-20 text-rose-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Shop & Give Back</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Turn your everyday shopping into donations for families in need. 
              Our retail rewards program lets you support our mission without spending an extra penny.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-sage-800 text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-sage-800 mb-4">1. Sign Up</h3>
                <p className="text-sage-600">
                  Register for our retail rewards program with your basic information. 
                  It's completely free and takes just a few minutes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-10 w-10 text-sage-600" />
                </div>
                <h3 className="text-2xl font-bold text-sage-800 mb-4">2. Shop</h3>
                <p className="text-sage-600">
                  Shop at participating local retailers as you normally would. 
                  Present your rewards card or provide your phone number at checkout.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-sage-800 mb-4">3. Impact</h3>
                <p className="text-sage-600">
                  Retailers automatically donate a percentage of your purchase to support 
                  our family programs. You'll receive monthly impact reports.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg">
                Sign Up Now - It's Free!
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-sage-800 text-center mb-12">Program Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-sage-800 mb-6">Why Join?</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sage-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Card className="border-sage-200">
                    <CardHeader>
                      <CardTitle className="text-sage-800">Monthly Impact Example</CardTitle>
                      <CardDescription>See how your shopping makes a difference</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sage-600">Grocery shopping:</span>
                          <span className="font-semibold text-sage-800">$6.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sage-600">Dining out:</span>
                          <span className="font-semibold text-sage-800">$4.50</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sage-600">Other purchases:</span>
                          <span className="font-semibold text-sage-800">$2.25</span>
                        </div>
                        <hr className="border-sage-200" />
                        <div className="flex justify-between text-lg font-bold">
                          <span className="text-sage-800">Monthly donation:</span>
                          <span className="text-rose-600">$12.75</span>
                        </div>
                        <p className="text-sm text-sage-600 mt-3">
                          This could provide pregnancy tests for 2-3 women or contribute to counseling sessions.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Participating Retailers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-sage-800 text-center mb-12">Participating Retailers</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {retailers.map((retailer, index) => (
                  <div key={index} className="bg-sage-50 p-6 rounded-lg text-center">
                    <Store className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-sage-800 mb-2">{retailer.name}</h3>
                    <div className="text-2xl font-bold text-rose-600">{retailer.percentage}</div>
                    <div className="text-sm text-sage-600">donation rate</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-sage-600 mb-4">More retailers joining regularly!</p>
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                  View Full List
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up CTA */}
        <section className="py-16 bg-gradient-to-br from-rose-50 to-sage-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of community members who are already making a difference 
              through their everyday shopping.
            </p>
            <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Sign Up for Retail Rewards
            </Button>
            <p className="text-sm text-sage-600 mt-4">
              Questions? Contact us at rewards@floralprc.org or call (555) 123-4567
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RetailRewards;
