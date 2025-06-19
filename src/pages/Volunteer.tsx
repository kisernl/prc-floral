
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, Calendar, Clock, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Volunteer = () => {
  const volunteerRoles = [
    {
      title: "Client Advocate",
      time: "4-6 hours/week",
      description: "Provide emotional support and practical assistance to clients during their visits.",
      requirements: ["Compassionate heart", "Good listening skills", "Completed training program"]
    },
    {
      title: "Administrative Support",
      time: "2-4 hours/week",
      description: "Help with office tasks, data entry, filing, and general administrative duties.",
      requirements: ["Basic computer skills", "Attention to detail", "Reliable schedule"]
    },
    {
      title: "Event Coordinator",
      time: "Varies by event",
      description: "Help plan and execute fundraising events, community outreach, and educational programs.",
      requirements: ["Event planning experience helpful", "Creative thinking", "Team player"]
    },
    {
      title: "Childcare Assistant",
      time: "2-3 hours/week",
      description: "Provide childcare during classes and appointments for clients with children.",
      requirements: ["Experience with children", "Background check required", "Patience and energy"]
    },
    {
      title: "Mentor",
      time: "2-3 hours/week",
      description: "Provide ongoing support and friendship to clients through their pregnancy journey.",
      requirements: ["Life experience", "Commitment to long-term relationship", "Empathetic nature"]
    },
    {
      title: "Community Educator",
      time: "1-2 hours/month",
      description: "Represent our organization at community events and health fairs.",
      requirements: ["Public speaking comfort", "Knowledge of our services", "Outgoing personality"]
    }
  ];

  const benefits = [
    "Make a meaningful difference in families' lives",
    "Gain valuable experience and skills",
    "Connect with like-minded community members",
    "Flexible scheduling to fit your lifestyle",
    "Ongoing training and support",
    "Volunteer appreciation events and recognition"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Volunteer With Us</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Join our team of dedicated volunteers and make a lasting impact in the lives of families in our community. 
              Your time, skills, and compassion can change lives.
            </p>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-sage-800 mb-6">Why Volunteer?</h2>
                <p className="text-sage-600 text-lg leading-relaxed mb-6">
                  Volunteering with Floral Pregnancy Center isn't just about giving back – it's about being part of 
                  a community that believes in the value of every life and the power of compassionate support.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sage-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img src={`${import.meta.env.BASE_URL}/images/mom_baby_2.png`} alt="mom and baby" className="w-full h-full object-cover rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Volunteer Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerRoles.map((role, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-sage-800 mb-2">{role.title}</h3>
                  <div className="flex items-center text-rose-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">{role.time}</span>
                  </div>
                  <p className="text-sage-600 mb-4 leading-relaxed">{role.description}</p>
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {role.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-sage-600">• {req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">How to Get Started</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-sage-800 mb-2">Apply</h3>
                  <p className="text-sage-600">Complete our online volunteer application form.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-sage-800 mb-2">Interview</h3>
                  <p className="text-sage-600">Meet with our volunteer coordinator to discuss opportunities.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-sage-800 mb-2">Training</h3>
                  <p className="text-sage-600">Complete our comprehensive volunteer training program.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-sage-800 mb-2">Serve</h3>
                  <p className="text-sage-600">Begin making a difference in your community!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training & Support */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-sage-800 mb-6">Training & Support</h2>
              <p className="text-xl text-sage-600 mb-8 leading-relaxed">
                We believe in setting our volunteers up for success. That's why we provide comprehensive training 
                and ongoing support to ensure you feel confident and prepared in your role.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-6 rounded-lg">
                  <Users className="h-12 w-12 text-rose-500 mb-4" />
                  <h3 className="text-xl font-bold text-sage-800 mb-3">Initial Training</h3>
                  <p className="text-sage-600">
                    Our 16-hour training program covers our mission, policies, communication skills, 
                    and specific role responsibilities. Training is provided free of charge.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <Calendar className="h-12 w-12 text-rose-500 mb-4" />
                  <h3 className="text-xl font-bold text-sage-800 mb-3">Ongoing Education</h3>
                  <p className="text-sage-600">
                    Monthly workshops, guest speakers, and continuing education opportunities 
                    help you grow in your volunteer role and stay current with best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Take the first step toward becoming a volunteer. We'd love to hear from you and discuss 
              how your unique skills and passions can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScdYMEcNFmS1Te7c1MnbEd4NI8zE1ka2awL-JjShxVwQJzlww/viewform?usp=header/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-3">
                  Apply to Volunteer
                </Button>
              </a>
              <a href="tel:+2187296697">
                <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50 text-lg px-8 py-3 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (218) 729-6697
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
