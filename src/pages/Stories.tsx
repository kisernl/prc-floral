
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Quote } from 'lucide-react';

const Stories = () => {
  const stories = [
    {
      name: "Sarah M.",
      title: "A Mother's Journey",
      excerpt: "When I first came to Hope Pregnancy Center, I was scared and didn't know what to do. The staff welcomed me with open arms and helped me understand all my options.",
      story: "I was 19 and pregnant, feeling completely overwhelmed. The counselors at Hope Pregnancy Center didn't judge me - they just listened and provided the support I needed. Today, my daughter is 5 years old and thriving. I can't imagine my life without her, and I'm so grateful for the guidance I received during those uncertain times."
    },
    {
      name: "Maria L.",
      title: "Finding Strength",
      excerpt: "The parenting classes at Hope Pregnancy Center gave me the confidence I needed to be the mother I wanted to be.",
      story: "As a first-time mom, I had so many questions and fears. The parenting classes taught me everything from how to change a diaper to understanding my baby's development. The other moms in the class became my support system, and we still meet regularly. Hope Pregnancy Center didn't just help me during pregnancy - they helped me become a confident parent."
    },
    {
      name: "Jennifer K.",
      title: "A Second Chance",
      excerpt: "After a difficult first pregnancy, Hope Pregnancy Center helped me navigate my second pregnancy with hope and confidence.",
      story: "My first pregnancy ended in loss, and when I became pregnant again, I was filled with anxiety. The counselors at Hope Pregnancy Center understood my fears and provided the emotional support I needed. They connected me with other women who had similar experiences, and together we found healing. My son is now 2 years old, and I volunteer at the center to help other women who are walking similar paths."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Stories of Hope</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Every family that walks through our doors has a unique story. 
              Here are just a few examples of how your support creates lasting change in real lives.
            </p>
          </div>
        </section>

        {/* Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {stories.map((story, index) => (
                <div key={index} className="bg-sage-50 rounded-lg p-8 md:p-12">
                  <div className="flex items-start space-x-4 mb-6">
                    <Quote className="h-8 w-8 text-rose-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-sage-800 mb-2">{story.title}</h3>
                      <p className="text-rose-600 font-semibold">{story.name}</p>
                    </div>
                  </div>
                  <blockquote className="text-sage-700 text-lg leading-relaxed italic mb-6">
                    "{story.excerpt}"
                  </blockquote>
                  <p className="text-sage-600 leading-relaxed">
                    {story.story}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Story */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Heart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-sage-800 mb-6">Share Your Story</h2>
              <p className="text-xl text-sage-600 mb-8 leading-relaxed">
                Has Hope Pregnancy Center been part of your journey? We'd love to hear how our services 
                have impacted your life. Your story could inspire and encourage others facing similar challenges.
              </p>
              <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Contact Us to Share
              </button>
            </div>
          </div>
        </section>

        {/* Privacy Notice */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-sage-500">
                <strong>Privacy Notice:</strong> All stories are shared with permission. 
                Names have been changed to protect privacy. If you'd like to share your story, 
                you can choose to remain anonymous or use your real name - whatever makes you most comfortable.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stories;
