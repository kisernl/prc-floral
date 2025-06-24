import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Stories = () => {
  const stories = [
    {
      name: "Karen M.",
      title: <span>Sample Story <span className="text-sm">(from COFFEE + CRUMBS)</span></span>,
      excerpt: "When I’m gone and all that’s left of me are portraits, recipes, and memories, I hope my boys remember me the same way I’m learning to remember my dad.",
      story: `“You have to have the streusel topping or it isn’t banana bread,” my dad always said when talking about his favorite recipe.He stood tall when he entered the kitchen, usually dressed in orange and black, his penchant for representing his alma mater apparent from the holes in his t-shirts. He even convinced my mom to remodel the kitchen in Oregon State University colors too...`,
      storyUrl: "https://coffeeandcrumbs.substack.com/p/remember-me"
    },
    {
      name: "Maria L.",
      title: "Finding Strength",
      excerpt: "The parenting classes at Floral PRC gave me the confidence I needed to be the mother I wanted to be.",
      story: "As a first-time mom, I had so many questions and fears. The parenting classes taught me everything from how to change a diaper to understanding my baby's development. The other moms in the class became my support system, and we still meet regularly. Floral PRC didn't just help me during pregnancy - they helped me become a confident parent.",
      storyUrl: "https://coffeeandcrumbs.substack.com/p/remember-me"
    },
    {
      name: "Jennifer K.",
      title: "A Second Chance",
      excerpt: "After a difficult first pregnancy, Floral PRC helped me navigate my second pregnancy with hope and confidence.",
      story: "My first pregnancy ended in loss, and when I became pregnant again, I was filled with anxiety. The counselors at Floral PRC understood my fears and provided the emotional support I needed. They connected me with other women who had similar experiences, and together we found healing. My son is now 2 years old, and I volunteer at the center to help other women who are walking similar paths.",
      storyUrl: "https://coffeeandcrumbs.substack.com/p/remember-me"
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
                <div key={index} className="bg-sage-50 rounded-lg p-8 md:p-12 relative">
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
                  <p className="text-sage-600 leading-relaxed mb-4">
                    {story.story}
                  </p>
                  <div className="text-right absolute bottom-8 right-8">
                    <a 
                      href={story.storyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="https://coffeeandcrumbs.substack.com/t/essays" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-rose-100 hover:bg-rose-200 text-rose-600 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                More Stories
              </a>
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
                Has Floral PRC been part of your journey? We'd love to hear how our services 
                have impacted your life. Your story could inspire and encourage others facing similar challenges.
              </p>
              <Link to="/contact">
                <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  Contact Us to Share
                </button>
              </Link>
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
