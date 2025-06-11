
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Options: A Guide for Expecting Mothers",
      excerpt: "Every pregnancy journey is unique. Learn about the different paths available and how our counselors can help you make informed decisions.",
      date: "March 15, 2024",
      author: "Dr. Sarah Johnson",
      category: "Support"
    },
    {
      id: 2,
      title: "The Importance of Prenatal Care",
      excerpt: "Discover why early and regular prenatal care is crucial for both mother and baby's health, and how our medical team can support you.",
      date: "March 10, 2024",
      author: "Nurse Maria Rodriguez",
      category: "Health"
    },
    {
      id: 3,
      title: "Building a Support Network During Pregnancy",
      excerpt: "Learn how to create a strong support system during your pregnancy journey, including family, friends, and community resources.",
      date: "March 5, 2024",
      author: "Linda Chen, LCSW",
      category: "Community"
    },
    {
      id: 4,
      title: "Nutrition Tips for a Healthy Pregnancy",
      excerpt: "Essential nutrition guidelines and meal planning tips to support your health and your baby's development during pregnancy.",
      date: "February 28, 2024",
      author: "Jennifer Martinez, RD",
      category: "Health"
    },
    {
      id: 5,
      title: "Preparing for Life After Baby",
      excerpt: "Practical advice for new parents on preparing for the changes and joys that come with welcoming a new baby into your family.",
      date: "February 22, 2024",
      author: "Dr. Sarah Johnson",
      category: "Parenting"
    },
    {
      id: 6,
      title: "Mental Health and Pregnancy",
      excerpt: "Understanding the emotional aspects of pregnancy and how to maintain good mental health throughout your journey.",
      date: "February 15, 2024",
      author: "Linda Chen, LCSW",
      category: "Support"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Our Blog</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with helpful articles, tips, and stories from our team of 
              medical professionals and counselors.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-sage-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sage-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-sage-500 text-sm">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-sage-800 mb-4 hover:text-rose-600 transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    
                    <p className="text-sage-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-100">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-rose-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Heart className="h-12 w-12 text-rose-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-sage-800 mb-6">Stay Updated</h2>
              <p className="text-xl text-sage-600 mb-8 leading-relaxed">
                Subscribe to our newsletter to receive the latest articles, updates, 
                and helpful resources directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:border-rose-500 min-w-0"
                />
                <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
