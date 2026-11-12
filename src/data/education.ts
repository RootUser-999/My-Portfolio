export interface EducationInfo {
  institution: string;
  degree: string;
  major: string;
  duration: string;
  cgpa: string;
  location: string;
  coreAreas: string[];
  finalYearProject: {
    title: string;
    description: string;
    technologies: string[];
  };
}

export const educationData: EducationInfo = {
  institution: 'COMSATS University Islamabad',
  degree: 'Bachelor of Science in Computer Science',
  major: 'Artificial Intelligence',
  duration: 'August 2022 – August 2026',
  cgpa: '3.05 / 4.00',
  location: 'Islamabad, Pakistan',
  coreAreas: [
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Data Structures & Algorithms',
    'Database Systems',
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
    'Object-Oriented Programming',
  ],
  finalYearProject: {
    title: 'GemVision AI — AI-Powered Gemstone Identification & Valuation Platform',
    description: 'An AI-powered system combining deep learning 2D CNN image classification, custom gemstone dataset preprocessing, Django REST backend, and Flutter mobile application for accurate mineral identification and marketplace valuation.',
    technologies: ['TensorFlow', 'Keras', 'CNN', 'Python', 'Django', 'Flutter', 'Computer Vision'],
  },
};
