import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Event {
  title: string | React.ReactNode;
  date: string;
  endDate?: string;
  time?: string;
  location?: string;
  description: string;
  type: string;
  slug: string;
  isLive: boolean;
  reflectionUrl?: string | null;
}

const Events = () => {
  const allEvents: Event[] = [
    {
      title: "Annual Hope Gala",
      date: "April 6, 2029",
      endDate: null,
      time: "6:00 PM - 10:00 PM",
      location: "Grand Ballroom, Downtown Hotel",
      description: "Join us for an elegant evening of dinner, entertainment, and celebration as we honor the families and volunteers who make our mission possible.",
      type: "Fundraiser",
      slug: "annual-hope-gala",
      isLive: false,
      reflectionUrl: null
    },
    {
      title: "Baby & Me Classes",
      date: "March 20, 2029",
      endDate: "May 1, 2029",
      time: "10:00 AM - 11:30 AM",
      location: "Floral PRC",
      description: "Weekly classes for new parents covering infant care, development, and bonding. Registration required.",
      type: "Educational",
      slug: "baby-me-classes",
      isLive: true,
      reflectionUrl: null
    },
    {
      title: "Community Health Fair",
      date: "July 6, 2029",
      time: "9:00 AM - 3:00 PM",
      location: "City Park Pavilion",
      description: "Free health screenings, information booths, and family activities. We'll have a booth with pregnancy resources and information.",
      type: "Community",
      slug: "community-health-fair",
      isLive: true,
      reflectionUrl: null
    },
    {
      title: "Volunteer Training Session",
      date: "April 12, 2029",
      time: "6:00 PM - 8:00 PM",
      location: "Floral PRC",
      description: "Orientation and training for new volunteers. Learn about our services and how you can make a difference.",
      type: "Volunteer",
      slug: "volunteer-training",
      isLive: true,
      reflectionUrl: null
    },
    {
      title: "Holiday Gift Drive",
      date: "December 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Floral PRC",
      description: "Thanks to our amazing community, we collected over 500 gifts for families in need during the holiday season.",
      type: "Community",
      slug: "holiday-gift-drive-2024",
      isLive: false,
      reflectionUrl: null
    },
    {
      title: <span>Sample Event <span className="text-sm">(from C+C)</span></span>,
      date: "December 21, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Anoka, MN",
      description: "This is a sample event. BUT, do checkout the beautiful photo essay by Jennifer Floyd linked below.",
      type: "Community",
      slug: "sample-event-2024",
      isLive: false,
      reflectionUrl: "https://coffeeandcrumbs.substack.com/p/become-a-child-at-christmas"
    },
    {
      title: "Walk for Life",
      date: "September 9, 2024",
      time: "8:00 AM - 12:00 PM",
      location: "Riverside Park",
      description: "Our inaugural Walk for Life raised over $15,000 and brought awareness to our mission throughout the community.",
      type: "Fundraiser",
      slug: "walk-for-life-2024",
      isLive: false,
      reflectionUrl: null
    }
  ];

  // Sort events by date (newest first for past events, soonest first for upcoming)
  const sortedEvents = [...allEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Categorize events
  const upcomingEvents = sortedEvents
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    });

  // Get past events (excluding today) and take the 3 most recent
  const recentEvents = [...sortedEvents]
    .reverse() // Reverse to get newest first for past events
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate < today;
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-sage-800 mb-6">Events</h1>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              Join us at our upcoming events to learn more about our mission, connect with our community, 
              and discover ways to make a difference in the lives of families.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Upcoming Events</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-sage-50 rounded-lg p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-sage-800">{event.title}</h3>
                        <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {event.type}
                        </span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sage-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                          {event.endDate && ` - ${event.endDate}`}
                        </div>
                        <div className="flex items-center text-sage-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sage-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-sage-600 leading-relaxed">{event.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      {event.isLive ? (
                        <Link to={`/events/${event.slug}`}>
                          <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                            More Info
                          </Button>
                        </Link>
                      ) : (
                        <Button disabled className="bg-gray-400 text-white cursor-not-allowed">
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-16 bg-sage-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Types of Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-sage-800 mb-3">Fundraisers</h3>
                <p className="text-sage-600">
                  Special events that raise funds to support our programs and services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <Users className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-sage-800 mb-3">Educational</h3>
                <p className="text-sage-600">
                  Classes and workshops for parents, families, and community members.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <Calendar className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-sage-800 mb-3">Community</h3>
                <p className="text-sage-600">
                  Outreach events that connect us with the broader community.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md">
                <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-sage-800 mb-3">Volunteer</h3>
                <p className="text-sage-600">
                  Training sessions and appreciation events for our volunteers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">Recent Events</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentEvents.map((event, index) => (
                  <div key={index} className="bg-sage-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-sage-800 mb-2">{event.title}</h3>
                    <p className="text-sage-600 font-semibold mb-3">{event.date}
                      {event.endDate && ` - ${event.endDate}`}
                    </p>
                    <p className="text-sage-600 mb-4">{event.description}</p>
                    {event.reflectionUrl ? (
                      <a href={event.reflectionUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-rose-600 hover:bg-rose-700 text-white w-full">
                          Reflections
                        </Button>
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-rose-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">Stay Connected</h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to be the first to know about upcoming events, volunteer opportunities, and ways to get involved.
            </p>
            <a 
              href="https://coffeeandcrumbs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
                Subscribe on Substack
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
