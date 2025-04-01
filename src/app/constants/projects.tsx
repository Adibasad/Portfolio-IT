import Mudraboxx from '../../../public/mudraboxx.png';
import NetflixClone from '../../../public/netflixx.png';
import PaisaInTime from '../../../public/paisaintime.png';

const projects = [
  {
    title: "MudraBoxx (Digital Lending Platform)",
    description:
      "A secure digital lending platform with loan management features. It offers a user-friendly and responsive interface for borrowers , ensuring a seamless experience. Implemented featurs like theme switching and loan management.",
    image: Mudraboxx,
    techStack: ["Next.js", "TypeScript", "MongoDB", "PostgreSQL", "Express.js"],
    liveDemo: "https://mudraboxx.com",
  },
  {
    title: "Netflix Clone",
    description:
      "A fully functional Netflix clone built with React.js and TypeScript, featuring a responsive interface and seamless navigation on all devices. Integrated youtube API for playing movie trailers.",
    image: NetflixClone,
    techStack: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Youtube API integration",
    ],
    liveDemo:
      "https://netflix-clone-git-production-adibasads-projects.vercel.app/",
  },
  {
    title: "PaisaInTime (Loan Lending Platform)",
    description:
      "A loan lending platform with a user-friendly interface and loan management features. Contributed to the UI/UX design and backend development.",
    image: PaisaInTime,
    techStack: [
      "Next.js",
      "Node.js",
      "Next APIs",
      "PostGreySQL",
      "TailwindCSS",
    ],
    liveDemo: "https://www.paisaintime.com/apply-2/instant-personal-loan",
  },
];


export default projects;
