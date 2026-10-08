// All editable content lives here. Anything in [square brackets] is a placeholder.
window.CONTENT = {
  shortName: "R-WM @ ICLR 2027",
  title: "Twins or Dreams?",
  subtitle: "World Models for Robot Learning",
  tagline: ["Robots can learn in a copy of the world or in a dream of it.", "Which should they trust, and when?"],
  // Hero badges. Set placeholder: true for a dashed, to-be-confirmed look.
  badges: [
    { text: "ICLR 2027" },
    { text: "San Francisco, CA" },
    { text: "April 2027" },
  ],
  contactEmail: "[contact@email.tbd]",
  iclrUrl: "https://iclr.cc/",

  about:
    "Robots cannot learn everything by trial and error in the real world. Robot data is scarce and every real test costs time and hardware. " +
    "World models predict how the world responds to a robot's actions, shifting the cost of learning, planning and evaluation from robot-hours to compute.",

  twinsDreams: {
    twins: {
      name: "Twins",
      kind: "Digital twins",
      line: "Reconstruct a specific scene inside a physics simulator.",
      pros: "Grounded. Physically consistent by construction, and answers actions never seen in data.",
      cons: "Narrow. Each scene must be scanned, rebuilt and calibrated.",
    },
    dreams: {
      name: "Dreams",
      kind: "Video world models",
      line: "Learn how the world looks and moves from internet and robot video.",
      pros: "Broad. Transfers across objects, tasks and scenes.",
      cons: "Statistical. Objects can appear or vanish on contact.",
    },
    shared:
      "Each now borrows from the other. Agents build twins, and physics solvers steer video models. " +
      "But they fail differently. Twins must estimate mass and friction, while video models never represent them. " +
      "Twins drift wherever their physics is wrong, while learned models compound their own errors. " +
      "And neither can yet say in advance when a prediction is good enough to act on. " +
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
          text: "Learned models compound small errors that planners exploit. Twins drift wherever their physics or calibration is wrong.",
          question: "How can imagined rollouts stay reliable, and how can a robot tell when they are not?",
        },
        {
          title: "Evaluation",
          text: "World models and twins are increasingly used to test robot policies, yet visual quality does not predict usefulness, and agreement with real outcomes is measured only after the fact.",
          question: "What should a benchmark measure before a world model is trusted with real decisions?",
        },
      ],
    },
  ],

  speakersNote: "Voices from twins, dreams and everything in between.",
  speakersEmpty: "Invited speakers to be announced.",
  // side: "twins" or "dreams" decides the group. status: "confirmed" or "tentative" shows a small indicator.
  // photoPos (optional) sets the crop, e.g. "50% 20%".
  speakers: [
    { name: "Yunzhu Li", affiliation: "Columbia University", url: "https://yunzhuli.github.io/", photo: "assets/yunzhu.jpeg", side: "twins", status: "confirmed" },
    { name: "Yuke Zhu", affiliation: "UT Austin and NVIDIA", url: "https://yukezhu.me/", photo: "assets/yukezhu.jpg", photoPos: "50% 25%", side: "twins", status: "tentative" },
    { name: "Marco Pavone", affiliation: "Stanford University", url: "https://web.stanford.edu/~pavone/index.html", photo: "assets/pavone.jpeg", photoPos: "50% 35%", side: "twins", status: "tentative" },
    { name: "Danijar Hafner", affiliation: "Google DeepMind", url: "https://danijar.com/", photo: "assets/images.jpeg", side: "dreams", status: "confirmed" },
    { name: "Elahe Arani", affiliation: "Wayve and TU/e", url: "https://sites.google.com/view/elahe-arani", photo: "assets/arani.jpg", photoPos: "45% 20%", side: "dreams", status: "confirmed" },
    { name: "Ingmar Posner", affiliation: "Oxford Robotics Institute", url: "https://ori.ox.ac.uk/people/ingmar-posner", photo: "assets/posner.jpg", photoPos: "50% 35%", side: "dreams", status: "tentative" },
  ],

  scheduleNote: "Tentative. One day, in person.",
  // Times are placeholders. type: "talk", "lightning", "poster", "break", "debate" or "opening". Set highlight for the debate. newColumn starts the second column on desktop.
  schedule: [
    { start: "09:00", end: "09:10", type: "opening", kind: "Opening", title: "Opening remarks" },
    { start: "09:10", end: "09:50", type: "talk", kind: "Invited talk", title: "[Talk title]", who: "[Speaker Name], [Affiliation]" },
    { start: "09:50", end: "10:30", type: "talk", kind: "Invited talk", title: "[Talk title]", who: "[Speaker Name], [Affiliation]" },
    { start: "10:30", end: "11:00", type: "break", kind: "Break", title: "Coffee break" },
    { start: "11:00", end: "11:40", type: "talk", kind: "Invited talk", title: "[Talk title]", who: "[Speaker Name], [Affiliation]" },
    { start: "11:40", end: "12:20", type: "lightning", kind: "Accepted papers", title: "Lightning talks" },
    { start: "12:20", end: "13:30", type: "break", kind: "Break", title: "Lunch" },
    { start: "13:30", end: "14:30", type: "poster", kind: "Posters", title: "Poster session", newColumn: true },
    { start: "14:30", end: "15:10", type: "talk", kind: "Invited talk", title: "[Talk title]", who: "[Speaker Name], [Affiliation]" },
    { start: "15:10", end: "15:50", type: "talk", kind: "Invited talk", title: "[Talk title]", who: "[Speaker Name], [Affiliation]" },
    { start: "15:50", end: "16:10", type: "break", kind: "Break", title: "Coffee break" },
    { start: "16:10", end: "17:10", type: "debate", kind: "Debate", title: "Structured debate: Twins or Dreams?", who: "[Panelist Names]", highlight: true },
    { start: "17:10", end: "17:25", type: "opening", kind: "Closing", title: "Best paper award and closing" },
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
      { label: "Workshop", value: "April 2027 (day TBC)" },
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

  // Photos: put each image in assets/ and set the path.
  organizers: [
    // Postdocs first, then PhD students, then PIs.
    { name: "Nikolaos Tsagkas", affiliation: "University of Amsterdam", url: "https://tsagkas.github.io/", photo: "assets/tsagkas.jpg" },
    { name: "Christian Gumbsch", affiliation: "University of Amsterdam", url: "https://cgumbsch.github.io/", photo: "assets/gumbsh.png" },
    { name: "Iman Nematollahi", affiliation: "University of Freiburg", url: "https://imanema.com/", photo: "assets/nematollahi.jpeg" },
    { name: "Alberta Longhini", affiliation: "Stanford University", url: "https://albilo17.github.io/", photo: "assets/longhini.jpg" },
    { name: "Matteo Gamba", affiliation: "Brown University", url: "https://www.matteogamba.me/about/", photo: "assets/gamba.jpg", photoPos: "50% 35%" },
    { name: "Sathya Bhethanabhotla", affiliation: "University of Amsterdam", url: "", photo: "assets/sathya.jpg" },
    { name: "Bahey Tharwat", affiliation: "Robot Learning Lab, University of Freiburg", url: "", photo: "assets/tharwat.png" },
    { name: "Abhinav Valada", affiliation: "University of Freiburg", url: "https://rl.informatik.uni-freiburg.de/people/valada", photo: "assets/valada.jpeg" },
    { name: "Efstratios Gavves", affiliation: "University of Amsterdam", url: "https://www.egavves.com/", photo: "assets/gavves.jpeg" },
  ],

  previous: [
    { name: "Learning to Simulate Robot Worlds", venue: "CoRL 2025, Seoul", url: "https://simulatingrobotworlds.github.io/" },
    { name: "Robot World Models (R-WM)", venue: "RSS 2026, Sydney", url: "https://robot-worldmodels.github.io/" },
  ],

  // University logos in the footer (square emblems). height is in px. Shown in one light tone on the dark page.
  institutions: [
    { name: "University of Amsterdam", logo: "assets/logos/uva.svg", url: "https://www.uva.nl/", height: 44 },
    { name: "University of Freiburg", logo: "assets/logos/freiburg.svg", url: "https://uni-freiburg.de/", height: 44 },
    { name: "Stanford University", logo: "assets/logos/stanford.svg", url: "https://www.stanford.edu/", height: 44 },
    { name: "Brown University", logo: "assets/logos/brown.svg", url: "https://www.brown.edu/", height: 44 },
  ],

  sponsors: [], // add { name, logo, url } entries here to show a sponsors row
};
