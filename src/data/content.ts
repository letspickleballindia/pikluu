// ─────────────────────────────────────────────
// Centralized content for Lets Pickleball India
// Modify text, images, and links HERE only.
// ─────────────────────────────────────────────

export const siteContent = {
  /* ── Brand ── */
  brand: {
    name: "Lets Pickleball India",
    logoSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcL1fZGMiau5UypMkmaBJk02f6JyjOzgmoUZOHniI73BFwU5a0-HMtA2NpxgtAXxONikX_XWuFcICGlXz-1oh8cYNn9gsILeOxyPG0XEDS3jyKJIB29fzeJaBuMF-49AS0wuLj74QxbaYr57tt-HoXgyDgo8roIHifmVflQsGH6HtTh0BQuHAgrPiPtcZ3BeIjWRtP0Voc0eZ-qVUZbtGssHHLFZl9jTZoZD-UTTXhuSc9JwJ38QNU9yrrCDamrH3PcA",
    logoBlueSrc: "/logo-blue.png",
    logoFullBlueSrc: "/logo-full-blue.png",
    logoLargeSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYg81fNaUe8HHZQn4VFDACfW3-f0WPM4pkzQFxGB0i4oURSdgnL4B0nAZzgxSrawD6yUAOADa9iK2uaoJ9OLacge0Agopscq2h4ChkTE3upTb4qq-NQypK11Gx8AmlGDuUPWayJuXUf2AiU1jZU7ft9ceMOzSq7LWPTLHpmXEX6z_tZXnzMMYI7R_xtrj4dUn9le3w2b0Em3_eMbVmLhhjcN9iHnVzDBT6RXm4FZOvWLPSgbAvCmuRL3QG6tx-2PRUkw",
    description:
      "Dedicated to growing the sport of pickleball in India through professional coaching, events, and community building.",
  },

  /* ── Navigation ── */
  nav: {
    links: [
      { label: "Courts", href: "/courts" },
      { label: "Coaching", href: "/coach" },
      { label: "About", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
    cta: { label: "Join Us", href: "/contact" },
  },

  /* ── Hero ── */
  hero: {
    badge: "Professional Coaching & Events",
    heading: "Elevate Your Game with\nLets Pickleball India",
    location: "R&K Thakur Complex, Kandivali East",
    ctaPrimary: { label: "Book a Session", href: "/contact" },
    ctaSecondary: { label: "Our Services", href: "#services" },
    bgImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6N69ZJ3znttH53rdxtqu7nF11GXsCEqpRbnndvcSTDoFkw_SFwiR1Qeap6MoI03ZnynrhIT8wzKHbpgu_bdU5Yn1u4wtQaUG2bTgK6pzA4I0E32KzO22ezCdY6WXpXiRMzCZACYbYUoRqpT0nHvMqC92F9rLJ6RJtuXAabsQJTs6wThK2spq7Ij8MRl3nIjQDdS7cb8C9EbYNLZc_1weuj4_gmXmUUP9adnd_GGjtLT6fVMvp1HOD",
    bgAlt:
      "High-energy shot of two pickleball players engaged in a fast-paced rally on an outdoor blue and green court.",
  },

  /* ── How it Works ── */
  howItWorks: {
    badge: "Process",
    title: "How it Works",
    steps: [
      {
        number: 1,
        title: "Book a Session",
        description: "Book a session online or via phone.",
      },
      {
        number: 2,
        title: "Meet Coaches",
        description:
          "Meet our certified coaches at R&K Thakur Complex.",
      },
      {
        number: 3,
        title: "Elevate Game",
        description:
          "Elevate your game with personalized drills and strategy.",
      },
    ],
  },

  /* ── Why Choose Us ── */
  whyChooseUs: {
    badge: "Benefits",
    title: "Why Choose Us",
    cards: [
      {
        icon: "Trophy",
        title: "Experienced Coaches",
        description: "Head coaches Sameer Shinde and Onkar Gurav.",
      },
      {
        icon: "Landmark",
        title: "Premium Facilities",
        description: "Best courts in Kandivali East.",
      },
      {
        icon: "Users",
        title: "Community Focused",
        description:
          "Join a growing network of pickleball enthusiasts in India.",
      },
    ],
  },

  /* ── Services ── */
  services: {
    badge: "Comprehensive Training",
    badgeIcon: "CircleDot",
    title: "Professional Services for Every Level",
    subtitle:
      "Whether you are a beginner looking to learn the basics or an advanced player aiming for tournaments, we have you covered.",
    items: [
      {
        icon: "User",
        title: "Private Coaching",
        description:
          "One-on-one sessions tailored to your specific needs, focusing on technique, footwork, and personal development.",
        features: [
          "Personalized drills",
          "Video analysis available",
          "Flexible scheduling",
        ],
      },
      {
        icon: "Users",
        title: "Group Coaching",
        description:
          "Learn and improve alongside peers in dynamic, structured group sessions suitable for various skill levels.",
        features: [
          "Beginner to Advanced batches",
          "Strategic gameplay drills",
          "Social and competitive",
        ],
      },
      {
        icon: "Tag",
        title: "Session Packages",
        description:
          "Commit to your improvement with our multi-session packages and enjoy significant savings.",
        badge: "BEST VALUE",
        packageNote: "Best Offers for Booking\n10 to 12 Sessions",
      },
      {
        icon: "Target",
        title: "Professional Referee",
        description:
          "Ensure fair play and professional standards at your next event with our certified referee services.",
        features: [
          "Certified Referees Provided",
          "Tournament standard officiating",
        ],
      },
      {
        icon: "Award",
        title: "Event Management",
        description:
          "Complete assistance for organizing and executing successful pickleball tournaments and corporate events.",
        features: [
          "End-to-end Tournament Assistance",
          "Corporate team building",
        ],
      },
      {
        icon: "Brain",
        title: "Skills & Strategy",
        description:
          "Advanced clinics focused purely on improving complex skills, shot selection, and winning game strategies.",
        isHighlighted: true,
        ctaLabel: "Learn More",
      },
    ],
  },

  /* ── Upcoming Events ── */
  events: {
    badge: "Schedule",
    title: "Upcoming Events/Clinics",
    items: [
      {
        title: "Weekend Warrior Clinic",
        date: "Oct 15 - 16, 2023",
        venue: "R&K Thakur Complex",
        ctaLabel: "Register",
      },
      {
        title: "Mumbai Open Tournament",
        date: "Nov 5 - 6, 2023",
        venue: "R&K Thakur Complex",
        ctaLabel: "Register",
      },
    ],
  },

  /* ── Venue / Location Feature ── */
  venue: {
    badge: "+ The Venue",
    title: "Train at premium facilities in Kandivali.",
    description:
      "Our main training ground is located at R&K Thakur Complex, providing the perfect environment to focus on your game with top-tier equipment and dedicated court space.",
    address: {
      name: "R&K Thakur Complex",
      locality: "Kandivali East, Mumbai",
      full: "R&K Thakur Complex, Kandivali East, Mumbai, Maharashtra",
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcbgL793LTCvEXrqA8zFi9nF0V3T_t9qjyeevQP0K9j-3PM2o_uYRX32RBt9dLEkERB06H1AEfnfHu5DNLzKnk2F2eBlp8XtAsg_DF2iiRdQ43OW1DJzfNkjcCPl6Q0S5asK4rHE_OzzU3Ru-2YrMWnGmzQvZEUN-o95a1wJOZ51iz2XSl218draVXITYQ1KA4ZzJS5jPClZj0gthlOzwWUa0oYSmzpBfNNgh7PNQeexwEN9Nd6uLW",
    imageAlt: "A modern pickleball court setup with nets and lines clearly marked.",
    mapUrl: "https://maps.google.com/?q=R%26K+Thakur+Complex+Kandivali+East+Mumbai",
  },

  /* ── Testimonials ── */
  testimonials: {
    badge: "Testimonials",
    title: "What Our Players Say",
    items: [
      {
        rating: 5,
        quote:
          "Incredible coaching! My game has improved significantly since joining.",
        author: "Amit P.",
      },
      {
        rating: 5,
        quote:
          "The community is amazing and the facilities are top-notch.",
        author: "Priya S.",
      },
      {
        rating: 5,
        quote:
          "Great organized events and friendly competitive atmosphere.",
        author: "Rahul K.",
      },
    ],
  },

  /* ── FAQ ── */
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What equipment do I need?",
        answer: "We provide paddles and balls. Just wear comfortable athletic shoes and sportswear. If you have your own paddle, feel free to bring it along!",
      },
      {
        question: "Are there age limits?",
        answer: "Pickleball is for everyone from 8 to 80. We have programs tailored for juniors, adults, and seniors so everyone can enjoy the sport at their own pace.",
      },
      {
        question: "How do I book a group session?",
        answer: "Contact our coordinators directly via phone. You can reach Sameer at 9307153526 or Onkar at 88790 03626 to schedule a group session that fits your team.",
      },
      {
        question: "What skill levels do you cater to?",
        answer: "We welcome players of all skill levels — from complete beginners who have never held a paddle to advanced competitive players preparing for tournaments.",
      },
    ],
  },

  /* ── Join Us / Contact CTA ── */
  joinUs: {
    badge: "Ready to play?",
    title: "Join Us & Elevate Your Game!",
    subtitle:
      "Contact our head coaches directly to book your sessions or inquire about our services and upcoming events.",
    coaches: [
      {
        name: "Sameer Shinde",
        role: "Head Coach & Coordinator",
        phone: "9307153526",
        phoneDisplay: "9307153526",
      },
      {
        name: "Onkar Gurav",
        role: "Head Coach & Coordinator",
        phone: "8879003626",
        phoneDisplay: "88790 03626",
      },
    ],
    instagram: {
      handle: "@letsp_ickleball",
      url: "https://instagram.com/letsp_ickleball",
      iconSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAI5GwbqLak99ZEC4O_mwyfC8M-_xAE1LWmasRcuGTxGLDzEv884fKfaVhd0eMMf-YYf4HXmrWqbS2jO8QAkkgXQ5FxAV9hqfNXuRS-346bh3TCHuM7COSwtUXSKc55VbA2rQz0wBD6H3t8Pd_8l_E-oL8mhPtWk80gD35mkCW6qYBYMgLaUfrpgO88iaXhJSQ-NuRk0SJdaFCo3l47IhnuR2EJmYrlXvfMYHm9_UVVtIhNHdf7FQO5",
    },
  },

  /* ── Footer ── */
  footer: {
    columns: [
      {
        title: "Services",
        links: [
          { label: "Private Coaching", href: "/coach" },
          { label: "Group Coaching", href: "/coach" },
          { label: "Event Management", href: "/contact" },
          { label: "Referee Services", href: "/contact" },
        ],
      },
      {
        title: "Location",
        address: [
          "R&K Thakur Complex,",
          "Kandivali East,",
          "Mumbai, Maharashtra",
        ],
        mapLabel: "View on Map",
        mapUrl: "https://maps.google.com/?q=R%26K+Thakur+Complex+Kandivali+East+Mumbai",
      },
      {
        title: "Contact",
        contacts: [
          {
            label: "Sameer: 9307153526",
            href: "tel:+919307153526",
          },
          {
            label: "Onkar: 88790 03626",
            href: "tel:+918879003626",
          },
        ],
      },
    ],
    legal: {
      copyright: `© ${new Date().getFullYear()} Lets Pickleball India. All rights reserved.`,
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
      ],
    },
    socialLinks: [
      {
        platform: "Instagram",
        href: "https://instagram.com/letsp_ickleball",
        iconSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAtz9V_dBj_Xa1v2UIZuR3xnTfASQ3kZSLU07uo3L5cHoZ3acHB1jnxvYjOgJ6Dr5leCORaXo97WeMBPY6VK878HZ88__Ia8vEx4BFLiaB5j1Nu54LJSafHjyAjHad_jLROApjyQz_1uFKsDWr_alkh79jIFN8aIxKOgyzWub7vK6a-RROLOZfJgrUfwBlU6mQ-__kTQR4LATAlUGDFhY2w5yAv37VDTQ8OC9fWGttteEVNRXIRK6_6",
      },
    ],
  },

  /* ────────────────────────────────────────────
     SUB-PAGE CONTENT
  ──────────────────────────────────────────── */

  /* ── Courts Page ── */
  courtsPage: {
    hero: {
      badge: "Our Facilities",
      title: "World-Class Courts in Mumbai",
      subtitle:
        "Experience pickleball at its finest on our professionally maintained courts at R&K Thakur Complex.",
    },
    features: [
      {
        icon: "Ruler",
        title: "Regulation-Size Courts",
        description:
          "Our courts meet official PCI dimensions (20×44 ft) with proper non-volley zones and boundary markings.",
      },
      {
        icon: "Sun",
        title: "Outdoor & Covered Options",
        description:
          "Play under the open sky or under our covered section during monsoons — we keep the game going year-round.",
      },
      {
        icon: "ShieldCheck",
        title: "Premium Court Surface",
        description:
          "Professionally laid surfaces that provide excellent grip, consistent ball bounce, and are gentle on your joints.",
      },
      {
        icon: "Zap",
        title: "Floodlit for Night Play",
        description:
          "High-quality floodlights mean you can enjoy sessions even after sunset. Perfect for working professionals.",
      },
    ],
    amenities: {
      title: "Amenities & Facilities",
      items: [
        "Equipment rental (paddles & balls)",
        "Drinking water & refreshments",
        "Changing rooms",
        "Ample parking space",
        "Seating area for spectators",
        "First aid kit on-site",
      ],
    },
    cta: {
      title: "Ready to Hit the Court?",
      subtitle: "Book your session today and experience our premium facilities firsthand.",
      buttonLabel: "Book a Court Session",
      buttonHref: "/contact",
    },
  },

  /* ── Coach Page ── */
  coachPage: {
    hero: {
      badge: "Meet Our Coaches",
      title: "Expert Guidance for Every Player",
      subtitle:
        "Our certified coaches bring years of competitive experience and a passion for growing the sport in India.",
    },
    coaches: [
      {
        name: "Sameer Shinde",
        role: "Head Coach & Coordinator",
        phone: "9307153526",
        bio: "Sameer is a certified pickleball coach with extensive tournament experience. His coaching philosophy centers on building strong fundamentals while developing each player's unique strengths. He specializes in singles strategy, serve technique, and competitive match preparation.",
        specialties: [
          "Singles Strategy",
          "Serve & Return Technique",
          "Tournament Preparation",
          "Footwork & Positioning",
        ],
      },
      {
        name: "Onkar Gurav",
        role: "Head Coach & Coordinator",
        phone: "8879003626",
        bio: "Onkar brings a dynamic coaching style that emphasizes the fun and social aspects of pickleball alongside technical mastery. His expertise in doubles play and group dynamics makes him the go-to coach for team training and corporate events.",
        specialties: [
          "Doubles Strategy",
          "Group Coaching",
          "Corporate Events",
          "Dinking & Net Play",
        ],
      },
    ],
    philosophy: {
      title: "Our Coaching Philosophy",
      description:
        "We believe every player has the potential to excel. Our approach combines structured technical training with game-situation practice, ensuring you develop skills that translate directly to competitive play.",
      pillars: [
        {
          title: "Fundamentals First",
          description:
            "Master grip, stance, and basic shots before advancing to complex strategies.",
        },
        {
          title: "Game-Situation Training",
          description:
            "Practice scenarios you'll encounter in real matches — not just isolated drills.",
        },
        {
          title: "Personalized Feedback",
          description:
            "Every player gets tailored guidance based on their current level and goals.",
        },
      ],
    },
  },

  /* ── About Page ── */
  aboutPage: {
    hero: {
      badge: "Our Story",
      title: "About Lets Pickleball India",
      subtitle:
        "Born from a passion for the fastest-growing sport in the world, we're on a mission to make pickleball accessible to every Indian.",
    },
    mission: {
      title: "Our Mission",
      description:
        "To grow the sport of pickleball across India by providing world-class coaching, organizing competitive events, and building an inclusive community where players of all ages and skill levels can thrive.",
    },
    values: [
      {
        icon: "Heart",
        title: "Passion for the Sport",
        description:
          "We live and breathe pickleball. Our enthusiasm is contagious and drives everything we do.",
      },
      {
        icon: "Users",
        title: "Community First",
        description:
          "We're building more than a coaching business — we're building a family of pickleball enthusiasts.",
      },
      {
        icon: "TrendingUp",
        title: "Continuous Growth",
        description:
          "We're committed to improving — both our own skills and the quality of our programs for players.",
      },
      {
        icon: "Shield",
        title: "Integrity & Fair Play",
        description:
          "We uphold the highest standards of sportsmanship in every session, event, and interaction.",
      },
    ],
    stats: [
      { value: "500+", label: "Players Trained" },
      { value: "50+", label: "Events Organized" },
      { value: "2", label: "Expert Coaches" },
      { value: "4.9★", label: "Average Rating" },
    ],
  },

  /* ── Contact Page ── */
  contactPage: {
    hero: {
      badge: "Get in Touch",
      title: "Contact Us",
      subtitle:
        "Have questions? Want to book a session? Reach out to us — we'd love to hear from you.",
    },
    form: {
      title: "Send Us a Message",
      fields: [
        { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
        { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
        { name: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX", required: false },
        { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your interest in pickleball...", required: true },
      ],
      submitLabel: "Send Message",
    },
    directContact: {
      title: "Or Reach Us Directly",
      items: [
        {
          icon: "MapPin",
          title: "Visit Us",
          detail: "R&K Thakur Complex, Kandivali East, Mumbai, Maharashtra",
        },
        {
          icon: "Phone",
          title: "Call Us",
          detail: "Sameer: 9307153526 | Onkar: 88790 03626",
        },
        {
          icon: "Instagram",
          title: "Follow Us",
          detail: "@letsp_ickleball",
          href: "https://instagram.com/letsp_ickleball",
        },
      ],
    },
  },
};
