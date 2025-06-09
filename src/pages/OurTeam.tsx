
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Mail, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Executive Director",
      bio: "With over 15 years of experience in nonprofit leadership, Sarah brings passion and vision to our mission. She holds a Master's in Public Administration and has dedicated her career to supporting families in crisis.",
      email: "sarah@hopepregnancycenter.org",
      phone: "(555) 123-4567"
    },
    {
      name: "Dr. Maria Rodriguez",
      title: "Medical Director",
      bio: "Dr. Rodriguez provides medical oversight and ensures the highest quality of care for our clients. She is board-certified in family medicine and has 20 years of experience in women's healthcare.",
      email: "maria@hopepregnancycenter.org",
      phone: "(555) 123-4568"
    },
    {
      name: "Emily Chen",
      title: "Counseling Director",
      bio: "Emily leads our counseling services with compassion and professional expertise in family support. She holds a Master's in Clinical Psychology and specializes in crisis counseling.",
      email: "emily@hopepregnancycenter.org",
      phone: "(555) 123-4569"
    },
    {
      name: "Michael Thompson",
      title: "Development Director",
      bio: "Michael oversees fundraising and donor relations, ensuring sustainable support for our programs. He has 12 years of experience in nonprofit development and community engagement.",
      email: "michael@hopepregnancycenter.org",
      phone: "(555) 123-4570"
    },
    {
      name: "Lisa Wang",
      title: "Program Coordinator",
      bio: "Lisa manages our educational programs and community outreach initiatives. She holds a Bachelor's in Social Work and is passionate about family education and support.",
      email: "lisa@hopepregnancycenter.org",
      phone: "(555) 123-4571"
    },
    {
      name: "David Brown",
      title: "Finance Manager",
      bio: "David ensures financial integrity and manages our resources responsibly. He is a CPA with 10 years of experience in nonprofit financial management.",
      email: "david@hopepregnancycenter.org",
      phone: "(555) 123-4572"
    },
    {
      name: "Rachel Green",
      title: "Volunteer Coordinator",
      bio: "Rachel recruits, trains, and manages our wonderful team of volunteers. She has a background in human resources and volunteer management.",
      email: "rachel@hopepregnancycenter.org",
      phone: "(555) 123-4573"
    },
    {
      name: "James Wilson",
      title: "Facilities Manager",
      bio: "James maintains our facilities and ensures a safe, welcoming environment for all visitors. He has 15 years of experience in facility management and maintenance.",
      email: "james@hopepregnancycenter.org",
      phone: "(555) 123-4574"
    },
    {
      name: "Amanda Davis",
      title: "Client Services Coordinator",
      bio: "Amanda is the first point of contact for many of our clients, providing intake services and initial support. She has a background in social services and client relations.",
      email: "amanda@hopepregnancycenter.org",
      phone: "(555) 123-4575"
    }
  ];

  const boardMembers = [
    {
      name: "Dr. Patricia Smith",
      title: "Board Chair",
      background: "Former Chief of Obstetrics, Regional Medical Center"
    },
    {
      name: "Robert Anderson",
      title: "Vice Chair",
      background: "Retired CEO, Community Foundation"
    },
    {
      name: "Jennifer Martinez",
      title: "Secretary",
      background: "Attorney, Family Law Practice"
    },
    {
      name: "Thomas Lee",
      title: "Treasurer",
      background: "CPA, Local Accounting Firm"
    },
    {
      name: "Rev. Mary Johnson",
      title: "Board Member",
      background: "Pastor, Community Church"
    },
    {
      name: "Dr. William Garcia",
      title: "Board Member",
      background: "Pediatrician, Children's Healthcare"
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
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-sage-50 rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-200 to-sage-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-sage-800 mb-1">{member.name}</h3>
                  <p className="text-rose-600 font-semibold text-sm">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Board of Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-200 to-rose-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-sage-800 mb-1">{member.name}</h3>
                  <p className="text-rose-600 font-semibold text-sm mb-2">{member.title}</p>
                  <p className="text-sage-600 text-xs">{member.background}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">Join Our Team</h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Are you passionate about supporting families? We're always looking for dedicated individuals to join our mission.
            </p>
            <div className="space-x-4">
              <Link to="/jobs">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-3">
                  View Open Positions
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50 text-lg px-8 py-3">
                  General Inquiries
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Team Member Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-200 to-sage-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-sage-800">{selectedMember?.name}</h3>
              <p className="text-rose-600 font-semibold">{selectedMember?.title}</p>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sage-600">{selectedMember?.bio}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2 text-sage-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{selectedMember?.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sage-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{selectedMember?.phone}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default OurTeam;
