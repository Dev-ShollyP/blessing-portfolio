// =============================================================================
// BLESSING — AI VIDEO CREATOR PORTFOLIO DATA STORE
// Centralized configuration and video project registry.
// Easily update this file to add new videos, modify descriptions, or edit links.
// =============================================================================

var PORTFOLIO_DATA = {
  profile: {
    name: "Blessing",
    brandName: "Blessing | AI Video Creator",
    title: "AI Video Creator & Visual Storyteller",
    tagline: "I TURN IDEAS INTO VISUAL STORIES.",
    headlineSupport: "I create engaging AI-powered videos, commercial advertisements, virtual influencer lifestyle content, and cinematic stories that bring creative ideas to life.",
    avatar: "./profile photo.jpeg",
    status: "Available for Commercial & Creative Projects",
    tools: [
      { name: "Google Flow", role: "AI Video Scene Generation & Consistency", icon: "sparkles" },
      { name: "CapCut", role: "Video Assembly, Pacing, Sound Effects & Polish", icon: "scissors" },
      { name: "Prompt Engineering", role: "Photorealistic & Cinematic Visual Direction", icon: "terminal" },
      { name: "Audio & Sound Design", role: "Foley, Voiceover & Emotional Soundscapes", icon: "volume-2" }
    ],
    contacts: {
      phone: "09011364204",
      phoneInternational: "+2349011364204",
      whatsappNumber: "09011364204",
      whatsappUrl: "https://wa.me/2349011364204?text=Hi%20Blessing,%20I'd%20like%20to%20discuss%20an%20AI%20video%20project",
      youtube: "https://www.youtube.com/@Blessing_Cooks",
      youtubeChannelName: "@Blessing_Cooks",
      email: "blessing.aivideo6@gmail.com",
      location: "Lagos, Nigeria · Available Worldwide"
    }
  },

  stats: [
    { value: "6+", label: "Specializations", icon: "award" },
    { value: "100%", label: "End-to-End AI", icon: "check-circle-2" },
    { value: "9:16", label: "Mobile-First", icon: "smartphone" },
    { value: "4K", label: "Ultra HD Polish", icon: "sparkles" }
  ],

  categories: [
    { id: "all", name: "All Work", count: 6, icon: "grid" },
    { id: "production", name: "AI Video Production", count: 1, icon: "clapperboard" },
    { id: "commercial", name: "Commercial & Ads", count: 1, icon: "megaphone" },
    { id: "storytelling", name: "AI Storytelling", count: 1, icon: "book-open" },
    { id: "lifestyle", name: "Lifestyle & Influencer", count: 1, icon: "user-check" },
    { id: "social", name: "Social Media Content", count: 1, icon: "trending-up" },
    { id: "editing", name: "Short-Form & Editing", count: 1, icon: "film" }
  ],

  projects: [
    {
      id: "cheesy-potato-balls",
      title: "Cheesy Potato Balls — End-to-End AI Cooking Story",
      shortTitle: "Cheesy Potato Balls",
      specialization: "AI Video Production",
      category: "production",
      categoryLabel: "AI Video Production",
      duration: "01:33",
      videoFile: "./AI Video Production.mp4",
      poster: "./thumbnails/ai-video-production.jpg",
      badge: "Multi-Scene Production",
      tagline: "Multi-scene character consistency and kitchen culinary narrative.",
      demonstrates: "Ability to turn an idea into a complete AI-generated video, from creating multiple scenes and locations to delivering a cohesive, edited final video with consistent characters.",
      summary: "A friend visits Blessing, relaxes in the living room watching television, and speaks about craving cheesy potato balls. Blessing moves into the kitchen to prepare them step-by-step, assembling a delicious culinary creation.",
      whyRecommended: [
        "Involves multiple scenes and distinct physical locations (living room & kitchen).",
        "Features realistic AI characters interacting naturally.",
        "Combines engaging lifestyle storytelling with culinary cooking.",
        "Maintains strong visual consistency in character appearance and environment.",
        "Demonstrates complete production assembly rather than isolated clips."
      ],
      role: "Creative Concept, Prompt Engineering (Google Flow), Character Continuity, Scene Sequencing, Audio & Pacing (CapCut).",
      tools: ["Google Flow", "CapCut", "Audio Design"],
      aspectRatio: "9:16 Vertical",
      featured: true
    },
    {
      id: "commercial-ad",
      title: "AI Commercial Production — Product Advertisement",
      shortTitle: "Product Spec Advertisement",
      specialization: "AI Commercial and Advertisement Videos",
      category: "commercial",
      categoryLabel: "AI Commercial & Ads",
      duration: "00:34",
      videoFile: "./Commercial & AD.mp4",
      poster: "./thumbnails/commercial-ad.jpg",
      badge: "Commercial Concept",
      tagline: "High-conversion promotional video designed to showcase product value.",
      demonstrates: "Ability to craft videos that promote a product, brand, or service with persuasive visual hooks, premium lighting, and a clear call to action.",
      summary: "A punchy, attractive AI commercial created to showcase product appeal, communicate brand benefits, and drive viewer action. Demonstrates high commercial viability for e-commerce, beauty, FMCG, and modern brands.",
      whyRecommended: [
        "Specifically engineered with a commercial and promotional purpose.",
        "Showcases product aesthetics with alluring lighting and framing.",
        "Communicates core value proposition in under 35 seconds.",
        "Concludes with an actionable call to action for buyers.",
        "Perfect demonstration of spec advertising for paying brand clients."
      ],
      role: "Art Direction, Commercial Concept, AI Scene Prompting, Dynamic Cut, Sound Mix.",
      tools: ["Google Flow", "CapCut", "Sound Effects"],
      aspectRatio: "9:16 Vertical",
      featured: true
    },
    {
      id: "what-i-eat-in-a-day",
      title: "What I Eat in a Day — Virtual Influencer Lifestyle Vlog",
      shortTitle: "What I Eat in a Day",
      specialization: "AI Lifestyle and Influencer Videos",
      category: "lifestyle",
      categoryLabel: "Lifestyle & Influencer",
      duration: "00:37",
      videoFile: "./LifeStyle & Influencer.mp4",
      poster: "./thumbnails/lifestyle-influencer.jpg",
      badge: "Virtual Influencer",
      tagline: "Realistic AI character lifestyle vlog in relatable everyday environments.",
      demonstrates: "Ability to create believable AI characters who appear to live, speak, cook, interact, and share relatable daily experiences as social media creators.",
      summary: "Blessing opens the video holding her phone in a selfie-vlog introduction, guiding viewers through a full day of meals including breakfast, fresh fruit, a traditional swallow meal for lunch, snacks, and dinner.",
      whyRecommended: [
        "Presents an AI persona in a relatable everyday lifestyle context.",
        "Authentic handheld influencer-style POV camera angle.",
        "Covers multiple routine activities across different times of day.",
        "Demonstrates how brands can deploy virtual brand ambassadors."
      ],
      role: "Character Identity Design, POV Framing, Routine Scripting, Pace Editing.",
      tools: ["Google Flow", "CapCut"],
      aspectRatio: "9:16 Vertical",
      featured: true
    },
    {
      id: "breakfast-smoothie",
      title: "Breakfast Smoothie — Short-Form Recipe Assembly & Narration",
      shortTitle: "Breakfast Smoothie Recipe",
      specialization: "Short-Form Video Creation and Editing",
      category: "editing",
      categoryLabel: "Short-Form & Editing",
      duration: "00:41",
      videoFile: "./Short form video.mp4",
      poster: "./thumbnails/short-form-video.jpg",
      badge: "Short-Form Video",
      tagline: "Step-by-step breakfast smoothie preparation, scene assembly, rhythmic pacing, and clean culinary narration.",
      demonstrates: "Ability to assemble generated culinary scenes with precision, maintain character and action continuity in the kitchen, synchronize pacing to recipe steps, and deliver a polished short-form tutorial.",
      summary: "A vibrant short-form cooking demonstration where Blessing prepares a healthy breakfast smoothie with fresh strawberries, bananas, and milk. Highlights seamless scene assembly, appetizing food visuals, blending audio, and polished closing presentation.",
      whyRecommended: [
        "Clear step-by-step structure from ingredient selection to blending and serving.",
        "Natural kitchen character interactions wearing the 'Blessing Cooks' branded apron.",
        "High sensory appeal with dynamic ingredient prep and creamy pour shot.",
        "Fast-paced, punchy editing optimized for YouTube Shorts, Reels, and TikTok saves."
      ],
      role: "Prompt Generation, Culinary Scene Direction, CapCut Assembly, Audio Synch & Polish.",
      tools: ["Google Flow", "CapCut", "Voiceover Synch"],
      aspectRatio: "9:16 Vertical",
      featured: true
    },
    {
      id: "market-day-shopping",
      title: "Market Day Shopping — Social Media Video Content",
      shortTitle: "Market Day Shopping",
      specialization: "Social Media Video Content",
      category: "social",
      categoryLabel: "Social Media Content",
      duration: "00:37",
      videoFile: "./Social Media Video content.mp4",
      poster: "./thumbnails/social-media-content.jpg",
      badge: "Social Media Content",
      tagline: "Vibrant local market vlog capturing authentic interactions, street ambiance, and grocery shopping.",
      demonstrates: "Ability to engineer engaging video content built specifically for short-form platforms (YouTube Shorts, TikTok, Instagram Reels) with authentic cultural lifestyle hooks and high viewer retention.",
      summary: "A captivating social media vlog following Blessing on a bustling market day as she shops for fresh produce, interacts with local market vendors, selects fresh vegetables, and navigates the vibrant street atmosphere.",
      whyRecommended: [
        "Rich, bustling open-air market environment with authentic street atmosphere.",
        "Natural character interaction and transaction with a local market produce vendor.",
        "Optimized for short-form mobile viewing with instant lifestyle hooks and high engagement.",
        "Bridges relatable cultural storytelling with dynamic pacing and social-first appeal."
      ],
      role: "Creative Direction, Environmental Scene Prompting, Lifestyle Timing, Sound Design.",
      tools: ["Google Flow", "CapCut", "Sound Design"],
      aspectRatio: "9:16 Vertical",
      featured: true
    },
    {
      id: "dont-turn-around",
      title: "Don't Turn Around — Cinematic AI-Powered Storytelling",
      shortTitle: "Don't Turn Around",
      specialization: "AI-Powered Storytelling",
      category: "storytelling",
      categoryLabel: "AI Storytelling",
      duration: "02:10",
      videoFile: "./Storytelling.mp4",
      poster: "./thumbnails/storytelling.jpg",
      badge: "Cinematic Narrative",
      tagline: "Narrative tension, character emotion, dialogue, and suspenseful comedy.",
      demonstrates: "Ability to tell an extended story using AI-generated characters, expressive emotional performances, contextual background scenery, dialogue, and suspenseful storytelling.",
      summary: "A captivating standalone narrative Short exploring an eerie yet comedic premise where looking behind brings unexpected consequences. Delivers character acting, suspenseful atmosphere, and narrative resolution over two full minutes.",
      whyRecommended: [
        "Strong narrative arc with tension building and comedic relief.",
        "Demonstrates continuity of character emotions and facial reactions.",
        "Over two minutes of uninterrupted scene-to-scene narrative cohesion.",
        "Proves capability for episodic web-series and brand stories."
      ],
      role: "Scriptwriting, Scene Atmosphere Prompts, Tension Pacing, Cinematic Score.",
      tools: ["Google Flow", "CapCut", "Cinematic Audio"],
      aspectRatio: "9:16 Vertical",
      featured: true
    }
  ],

  services: [
    {
      id: "commercials",
      title: "AI Commercials & Product Spec Ads",
      description: "Promote your brand, skincare line, perfume, food business, or tech app with eye-catching AI video commercials featuring studio-grade lighting and clear calls to action.",
      icon: "sparkles",
      highlights: ["Product showcases & 3D aesthetics", "Spec ads & brand teasers", "Clear visual hook & CTA", "High-conversion mobile format"]
    },
    {
      id: "storytelling",
      title: "AI Storytelling & Cinematic Short Films",
      description: "Bring narrative concepts to life with expressive AI characters, emotive dialogue, atmosphere building, and episodic storytelling designed to grip audiences.",
      icon: "film",
      highlights: ["Multi-scene narrative cohesion", "Character emotion & performance", "Suspense, drama & comedy", "Episodic web content"]
    },
    {
      id: "lifestyle",
      title: "Virtual Influencer & Lifestyle Vlogs",
      description: "Create believable AI personas that introduce products, share 'Day in the Life' routines, and interact with your target demographic in familiar lifestyle settings.",
      icon: "user-check",
      highlights: ["Realistic everyday environments", "Handheld selfie & vlog aesthetics", "Virtual brand ambassador creation", "Relatable social presence"]
    },
    {
      id: "food-content",
      title: "AI Cooking & Food Content (Blessing Cooks)",
      description: "Delicious culinary visuals, kitchen step-by-step demonstrations, recipe tutorials, and appetizing food narratives inspired by the Blessing Cooks channel.",
      icon: "utensils",
      highlights: ["Appetizing culinary visuals", "Step-by-step recipe flow", "Cooking tutorials & tips", "Cross-cultural food narratives"]
    },
    {
      id: "social-media",
      title: "Viral Social Media Shorts & Reels",
      description: "High-retention video content crafted for YouTube Shorts, TikTok, and Instagram Reels with 3-second visual hooks, cultural market vlogs, and dynamic pacing.",
      icon: "trending-up",
      highlights: ["Strong 3-second opening hooks", "Authentic lifestyle & market vlogs", "Algorithmic retention optimization", "Trendy sound design & text overlays"]
    },
    {
      id: "post-production",
      title: "AI Video Editing & CapCut Assembly",
      description: "Professional assembly of AI clips into seamless final videos, complete with cinematic sound design, Foley, royalty-free music, captions, and color grading.",
      icon: "scissors",
      highlights: ["Precise scene transition cuts", "Dynamic sound effects & Foley", "Voiceover synchronization", "Exported in high-definition formats"]
    }
  ],

  workflow: [
    {
      step: "01",
      title: "Concept & Narrative Scripting",
      description: "We define the story arc, character personalities, emotional beats, visual aesthetic, and key hook to guarantee maximum audience engagement.",
      icon: "file-text"
    },
    {
      step: "02",
      title: "Character Continuity & Scene Direction",
      description: "Using Google Flow, I carefully engineer prompts that lock down character features, attire, environment lighting, and camera angles across every shot.",
      icon: "camera"
    },
    {
      step: "03",
      title: "AI Video Generation",
      description: "Generating fluid motion, character interactions, realistic micro-movements, and lifelike expressions that bring the script to life.",
      icon: "cpu"
    },
    {
      step: "04",
      title: "CapCut Assembly & Pacing",
      description: "Arranging scenes with intentional rhythm, eliminating dead air, applying smooth transitions, and timing cuts to the story rhythm.",
      icon: "layers"
    },
    {
      step: "05",
      title: "Sound Design, Voiceover & Polish",
      description: "Layering ambient soundscapes, foley, punchy sound effects, custom voiceovers, and color grading for a clean, broadcast-ready finish.",
      icon: "volume-2"
    }
  ],

  faqs: [
    {
      question: "What tools do you use to create your AI videos?",
      answer: "My primary workflow utilizes Google Flow for generating lifelike AI video scenes and character consistency, combined with CapCut for professional video editing, rhythmic pacing, transition assembly, audio design, sound effects, and voiceover synchronization."
    },
    {
      question: "Can you create AI videos for my business or brand?",
      answer: "Yes! I create commercial spec ads, product promotion videos, social media Reels/Shorts, and virtual influencer content tailored to your brand identity, product line, or marketing campaigns."
    },
    {
      question: "How do you ensure character consistency across different scenes?",
      answer: "Character consistency is one of the most critical aspects of professional AI video creation. By using precise seed prompting, facial landmark anchoring, and controlled scene sequencing in Google Flow, I ensure that characters retain their identity, wardrobe, and features across multiple camera angles and environments."
    },
    {
      question: "What is your typical turnaround time for a project?",
      answer: "Most short-form social videos (30-60 seconds) take between 2 to 4 business days, including concept generation, scene rendering, editing, and sound design. Multi-scene commercial productions or longer narrative shorts (1-2 minutes) typically take 4 to 7 business days."
    },
    {
      question: "Can you produce videos in widescreen (16:9) as well as vertical (9:16)?",
      answer: "Absolutely. While my current featured reel highlights mobile-first vertical formats (ideal for YouTube Shorts, Instagram Reels, and TikTok), I can generate and edit in 16:9 widescreen for websites, YouTube main videos, pitch decks, and presentations."
    }
  ]
};
