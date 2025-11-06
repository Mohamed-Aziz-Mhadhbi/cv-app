import { ScrollView } from 'react-native';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'AuthKit',
    description: 'Secure full-stack auth boilerplate using Next.js and Node.js.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'JWT'],
    image: require('../assets/images/project1.png'),
    link: 'https://github.com/your-username/authkit'
  },
  {
    title: 'BJJ Planner',
    description: 'BJJ training planner app for drills and guard systems.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    image: require('../assets/images/project2.png'),
    link: 'https://github.com/your-username/bjj-planner'
  },
];

export default function ProjectsScreen() {
  return (
    <ScrollView className="p-4">
      {projects.map((p, index) => (
        <ProjectCard key={index} {...p} />
      ))}
    </ScrollView>
  );
}
