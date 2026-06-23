export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  teammatesNeeded: number;
  domain: string;
  posted: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    description:
      "Building an AI-powered resume analyzer using LLMs and vector search.",
    skills: ["React", "Node", "Python"],
    teammatesNeeded: 2,
    domain: "Artificial Intelligence",
    posted: "2 hours ago",
  },
  {
    id: 2,
    title: "Smart Attendance",
    description:
      "A QR + face recognition attendance system for classrooms.",
    skills: ["React", "OpenCV", "Firebase"],
    teammatesNeeded: 3,
    domain: "Computer Vision",
    posted: "Today",
  },
  {
    id: 3,
    title: "Drone Navigation",
    description:
      "Autonomous indoor drone navigation using SLAM.",
    skills: ["Python", "ROS", "OpenCV"],
    teammatesNeeded: 2,
    domain: "Robotics",
    posted: "Yesterday",
  },
];