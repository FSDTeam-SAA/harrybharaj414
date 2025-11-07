import React from "react";

const MeetOurTeams = () => {
  const teamMembers = [
    {
      name: "Olivia Rhye",
      role: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      name: "Phoenix Baker",
      role: "Engineering Manager",
      description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      name: "Natal Craig",
      role: "Product Designer",
      description:
        "Founding design team at Figma, Former Pleo, Stripe, and Tile.",
    },
    {
      name: "Lana Steiner",
      role: "Product Manager",
      description: "Former PM for Linear, Lambda School, and On Deck.",
    },
    {
      name: "Demi Wilkinson",
      role: "Frontend Developer",
      description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    },
    {
      name: "Orlando Diggs",
      role: "Customer Success",
      description: "Lead CX at Wealthsimple, Former PagerDuty and Sgreen.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-14  mx-auto">
          {/* <p className="text-blue-600 font-semibold uppercase tracking-wide">
            
          </p> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Meet Our Clients
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The dedicated professionals guiding your journey towards successful
            immigration, work, and study opportunities abroad.
          </p>
        </header>

        {/* Team Members Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default MeetOurTeams;
