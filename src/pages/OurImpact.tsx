
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Heart, Users, Baby, Home } from 'lucide-react';

const OurImpact = () => {
  const stats = [
    { icon: Home, number: "11,000+", label: "Families Served" },
    { icon: Baby, number: "800+", label: "Babies Born" },
    { icon: Heart, number: "13,000+", label: "Counseling Sessions" },
    { icon: Users, number: "25,000+", label: "Lives Touched" }
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
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Our Impact</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              For nearly three decades, Floral Pregnancy Center has been a source of strength and support 
              for families in our community. See how your generosity creates lasting change.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">By the Numbers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-10 w-10 text-rose-600" />
                  </div>
                  <div className="text-4xl font-bold text-sage-800 mb-2">{stat.number}</div>
                  <div className="text-sage-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Impact */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Program Impact</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Pregnancy Support Services</h3>
                <p className="text-sage-600 text-lg leading-relaxed mb-4">
                  Our comprehensive pregnancy support has helped thousands of women make informed decisions 
                  about their pregnancies with confidence and peace of mind.
                </p>
                <ul className="space-y-2 text-sage-600">
                  <li>• Free pregnancy testing and ultrasounds</li>
                  <li>• Options counseling and decision support</li>
                  <li>• Medical referrals and healthcare coordination</li>
                  <li>• Emotional support throughout pregnancy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Parenting Education</h3>
                <p className="text-sage-600 text-lg leading-relaxed mb-4">
                  Our parenting classes have equipped new and expecting parents with the knowledge 
                  and confidence they need to raise healthy, happy children.
                </p>
                <ul className="space-y-2 text-sage-600">
                  <li>• Newborn care and safety classes</li>
                  <li>• Breastfeeding support and education</li>
                  <li>• Child development workshops</li>
                  <li>• Positive discipline strategies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Material Assistance</h3>
                <p className="text-sage-600 text-lg leading-relaxed mb-4">
                  Through our community partnerships and generous donors, we've provided essential 
                  items to help families get started on the right foot.
                </p>
                <ul className="space-y-2 text-sage-600">
                  <li>• Baby supplies and clothing</li>
                  <li>• Car seats and safety equipment</li>
                  <li>• Diapers and formula assistance</li>
                  <li>• Maternity clothes and supplies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-sage-800 mb-4">Community Outreach</h3>
                <p className="text-sage-600 text-lg leading-relaxed mb-4">
                  We actively engage with our community to raise awareness and provide education 
                  about the resources available to families in need.
                </p>
                <ul className="space-y-2 text-sage-600">
                  <li>• Health fairs and community events</li>
                  <li>• Educational workshops at schools</li>
                  <li>• Partnership with local organizations</li>
                  <li>• Volunteer training and development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">Real Stories, Real Impact</h2>
            <p className="text-xl text-sage-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Behind every statistic is a real person whose life has been touched by the generosity 
              and care of our community. Read the inspiring stories of hope and transformation.
            </p>
            <Link to="/stories">
              <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Read Their Stories
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurImpact;
