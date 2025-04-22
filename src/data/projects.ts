import { ProjectData } from '../types';

export const projects: ProjectData[] = [
  {
    id: 'Doctor-Clinic',
    title: 'Doctor Clinic Appointment',
    description: 'A web-based appointment system...',
    fullDescription: 'A full-featured web application...',
    tags: ['HTML', 'CSS', 'Node.js', 'Express', 'EJS'],
    link: 'https://doctor-clinic-appointment.vercel.app/',
    code: 'https://github.com/wth-aryan/Doctor-clinic-appointment',
  },
  {
    id: "Coffee-shop",
    title: "Coffee shop",
      fullDescription: "A platform for browsing the menu, placing orders, and managing transactions, built with React and Firebase.",
      tags: ["React", "Firebase", "Real-time", "Collaboration"],
      link: '',
      code: 'https://github.com/wth-aryan/Doctor-clinic-appointment',
    
  },
  {
    id: 'AutoTyper',
    title: 'AutoTyper',
    description: 'A lightweight tool that automatically types text with customizable speed and delay settings, designed to simulate human-like typing.',
    fullDescription: 'AutoTyper is a simple yet efficient utility built using Python that simulates keystrokes to automatically type predefined text into any input field. It features adjustable typing speed, customizable delay, and a clean UI for ease of use. Ideal for testing, automation, and productivity purposes.',
    tags: ['Python', 'PyAutoGUI', 'Automation', 'Typing Tool']
  }  
];