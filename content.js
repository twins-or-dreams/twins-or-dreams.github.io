// All editable content lives here. Anything in [square brackets] is a placeholder.
window.CONTENT = {
  shortName: "R-WM @ ICLR 2027",
  title: "Twins or Dreams?",
  subtitle: "World Models for Robot Learning",
  tagline: ["Robots can learn in a copy of the world or in a dream of it.", "Which one should they trust?"],
  // Hero badges. Set placeholder: true for a dashed, to-be-confirmed look.
  badges: [
    { text: "ICLR 2027", primary: true },
    { text: "San Francisco, CA" },
    { text: "29 April" },
    { text: "Room XX", placeholder: true },
  ],
  contactEmail: "[contact@email.tbd]",
  iclrUrl: "https://iclr.cc/",

  about:
    "Robots cannot learn everything by trial and error in the real world. Robot data is scarce and every real test costs time and hardware. " +
    "World models predict how the world responds to a robot's actions, so robots can learn, plan and be evaluated in imagination instead.",

  twinsDreams: {
    twins: {
      name: "Twins",
      kind: "Digital twins",
      line: "Reconstruct a specific scene inside a physics simulator.",
      pros: "Faithful. Physics holds up through contact.",
      cons: "Narrow. Built one scene at a time.",
    },
    dreams: {
      name: "Dreams",
      kind: "Video world models",
      line: "Learn how the world looks and moves from internet-scale video.",
      pros: "Broad. Transfers across objects, tasks and scenes.",
      cons: "Unfaithful. Objects can warp or vanish on contact.",
    },
    shared:
      "The line between them is blurring, and both face the same open problems. Pixels do not reveal mass or friction. " +
      "Long rollouts drift. And we cannot yet tell when an imagined outcome can be trusted. " +
      "This workshop asks what a robot's world model must capture, and how it should be built, combined and trusted.",
  },

  topicsIntro: "Six open problems at the heart of the workshop.",
  topics: [
    {
      group: "Build",
      items: [
        {
          title: "What to represent",
          text: "Pixels, latent features, 3D structure and physical parameters each capture different parts of the world, at different costs.",
          question: "Which representation makes a model useful for control rather than only realistic?",
        },
        {
          title: "Actions and hidden properties",
          text: "A robot's world model must respond to its actions and to properties it cannot see, such as mass, friction and contact force.",
          question: "How can these be learned from pixels, interaction or touch?",
        },
      ],
    },
    {
      group: "Combine",
      items: [
        {
          title: "Physics and data",
          text: "Digital twins encode physics explicitly. Video world models learn it from data. Hybrids are emerging from both sides.",
          question: "Which knowledge should be specified, which learned, and how should the two meet?",
        },
        {
          title: "World models and foundation models",
          text: "Large pretrained models now generate robot video, predict actions and even build simulated scenes.",
          question: "Where do world models fit alongside policies and general-purpose models, and can one model generalize across tasks, scenes and robots?",
        },
      ],
    },
    {
      group: "Trust",
      items: [
        {
          title: "Long-horizon reliability",
          text: "Small prediction errors compound over long rollouts, and planners exploit them.",
          question: "How can imagined rollouts stay reliable, and how can a robot tell when they are not?",
        },
        {
          title: "Evaluation",
          text: "World models are increasingly used to test robot policies, yet they can hallucinate success, and benchmarks reward visual quality.",
          question: "What should a benchmark measure before a world model is trusted with real decisions?",
        },
      ],
    },
  ],

  speakersNote: "Voices from both directions.",
  speakers: [
    { name: "[Speaker Name]", affiliation: "[Affiliation]", url: "", photo: "assets/placeholder-person.svg" },
    { name: "[Speaker Name]", affiliation: "[Affiliation]", url: "", photo: "assets/placeholder-person.svg" },
    { name: "[Speaker Name]", affiliation: "[Affiliation]", url: "", photo: "assets/placeholder-person.svg" },
    { name: "[Speaker Name]", affiliation: "[Affiliation]", url: "", photo: "assets/placeholder-person.svg" },
    { name: "[Speaker Name]", affiliation: "[Affiliation]", url: "", photo: "assets/placeholder-person.svg" },
    { name: "[Speaker Name]", affiliation: "[Affiliation]", url: "", photo: "assets/placeholder-person.svg" },
  ],

  scheduleNote: "Tentative. One day, in person.",
  schedule: [
    { time: "[09:00]", session: "Opening remarks" },
    { time: "[09:15]", session: "Invited talk: [Speaker Name]" },
    { time: "[09:55]", session: "Invited talk: [Speaker Name]" },
    { time: "[10:35]", session: "Coffee break" },
    { time: "[11:00]", session: "Lightning talks" },
    { time: "[11:40]", session: "Invited talk: [Speaker Name]" },
    { time: "[12:20]", session: "Lunch" },
    { time: "[13:30]", session: "Poster session" },
    { time: "[14:30]", session: "Invited talk: [Speaker Name]" },
    { time: "[15:10]", session: "Invited talk: [Speaker Name]" },
    { time: "[15:50]", session: "Panel discussion: Twins or Dreams?", highlight: true },
    { time: "[16:50]", session: "Best paper award and closing" },
  ],

  cfp: {
    intro:
      "We welcome work on world models for robots, from digital twins and learned simulators to video and latent world models, and everything in between. " +
      "Submissions are non-archival, so work in progress and papers under review elsewhere are welcome.",
    tracks: [
      { name: "Full papers", detail: "Up to 4 pages" },
      { name: "Tiny papers", detail: "Up to 2 pages, for early ideas and late-breaking results" },
    ],
    submitLabel: "Submit on OpenReview",
    submitUrl: "",
    dates: [
      { label: "Submission deadline", value: "[TBD, around 1 February 2027]" },
      { label: "Notification", value: "[TBD, by 26 February 2027]" },
      { label: "Camera ready", value: "[TBD]" },
      { label: "Workshop", value: "29 April 2027" },
    ],
  },
  cfpTopics: [
    "Digital twins and real-to-sim",
    "Video and world action models",
    "Latent world models",
    "Hybrid physics and learning",
    "Touch and multimodal prediction",
    "Planning and RL in imagination",
    "Policy evaluation with world models",
    "Uncertainty and failure detection",
    "Cross-embodiment generalization",
    "Benchmarks and metrics",
    "Safety",
  ],
  cfpTopicsNote: "We welcome work in progress, comparisons of different world models on the same task, and negative results.",

  // Max 8. Photos: put each image in assets/ and set the path.
  organizers: [
    { name: "Nikolaos Tsagkas", affiliation: "University of Amsterdam", url: "https://tsagkas.github.io/", photo: "assets/tsagkas.jpg" },
    { name: "Christian Gumbsch", affiliation: "University of Amsterdam", url: "https://cgumbsch.github.io/", photo: "assets/gumbsh.png" },
    { name: "Sathya Bhethanabhotla", affiliation: "University of Amsterdam", url: "", photo: "assets/sathya.jpg" },
    { name: "Abhinav Valada", affiliation: "University of Freiburg", url: "https://rl.informatik.uni-freiburg.de/people/valada", photo: "assets/valada.jpeg" },
    { name: "Efstratios Gavves", affiliation: "University of Amsterdam", url: "https://www.egavves.com/", photo: "assets/gavves.jpeg" },
    { name: "[Organizer Name]", affiliation: "[Affiliation]", url: "", photo: "assets/placeholder-person.svg" },
    { name: "[Organizer Name]", affiliation: "[Affiliation]", url: "", photo: "assets/placeholder-person.svg" },
    { name: "[Organizer Name]", affiliation: "[Affiliation]", url: "", photo: "assets/placeholder-person.svg" },
  ],

  previous: [
    { name: "Robot World Models (R-WM)", venue: "RSS 2026, Sydney", url: "https://robot-worldmodels.github.io/" },
  ],

  sponsors: [{ name: "[Sponsor]" }, { name: "[Sponsor]" }, { name: "[Sponsor]" }],
};
