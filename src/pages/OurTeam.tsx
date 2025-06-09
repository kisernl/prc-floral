
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Executive Director",
      bio: "With over 15 years of experience in nonprofit leadership, Sarah brings passion and vision to our mission.",
      email: "sarah@hopepregnancycenter.org",
      phone: "(555) 123-4567"
    },
    {
      name: "Dr. Maria Rodriguez",
      title: "Medical Director",
      bio: "Dr. Rodriguez provides medical oversight and ensures the highest quality of care for our clients.",
      email: "maria@hopepregnancycenter.org",
      phone: "(555) 123-4568"
    },
    {
      name: "Emily Chen",
      title: "Counseling Director",
      bio: "Emily leads our counseling services with compassion and professional expertise in family support.",
      email: "emily@hopepregnancycenter.org",
      phone: "(555) 123-4569"
    }
  ];

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
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Our Team</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who bring our mission to life with compassion, 
              expertise, and unwavering commitment to serving families in our community.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-sage-50 rounded-lg p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-rose-200 to-sage-200 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-2xl font-bold text-sage-800 mb-2">{member.name}</h3>
                  <p className="text-rose-600 font-semibold mb-4">{member.title}</p>
                  <p className="text-sage-600 mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sage-600">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sage-600">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{member.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">Join Our Team</h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Are you passionate about supporting families? We're always looking for dedicated individuals to join our mission.
            </p>
            <Link to="/contact">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-3">
                Contact Us About Opportunities
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTeam;
