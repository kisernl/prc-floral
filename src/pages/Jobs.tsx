
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Jobs = () => {
  const openPositions = [
    {
      title: "Pregnancy Counselor",
      department: "Counseling Services",
      type: "Full-time",
      location: "Main Campus",
      salary: "$45,000 - $55,000",
      description: "Provide compassionate counseling and support to clients facing unplanned pregnancies.",
    },
    {
      title: "Volunteer Coordinator",
      department: "Community Outreach",
      type: "Part-time",
      location: "Main Campus",
      salary: "$25,000 - $30,000",
      description: "Recruit, train, and manage volunteers across our various programs and initiatives.",
    },
    {
      title: "Medical Assistant",
      department: "Medical Services",
      type: "Full-time",
      location: "Main Campus",
      salary: "$38,000 - $45,000",
      description: "Support medical staff in providing quality healthcare services to our clients.",
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="bg-sage-50 py-6">
          <div className="container mx-auto px-4">
            <Link to="/about/team" className="inline-flex items-center text-sage-600 hover:text-rose-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Our Team
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Join Our Team</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Make a difference in the lives of families in our community. We're looking for 
              passionate individuals who share our commitment to providing compassionate care and support.
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Open Positions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-sage-50 rounded-lg p-6 border border-sage-200">
                  <h3 className="text-2xl font-bold text-sage-800 mb-2">{position.title}</h3>
                  <p className="text-rose-600 font-semibold mb-4">{position.department}</p>
                  <p className="text-sage-600 mb-4">{position.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sage-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{position.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sage-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sage-600">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm">{position.salary}</span>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-bold text-sage-800 mb-4">Meaningful Work</h3>
                <p className="text-sage-600">Make a real difference in the lives of families and children every day.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-sage-800 mb-4">Supportive Environment</h3>
                <p className="text-sage-600">Work alongside passionate professionals who care about your growth.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-sage-800 mb-4">Competitive Benefits</h3>
                <p className="text-sage-600">Health insurance, retirement plans, and professional development opportunities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
