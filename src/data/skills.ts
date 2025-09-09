export interface Skill {
  id: string;
  title: string;
  skillImg: string;
  backgroundColor: string;
  category: 'frontend' | 'backend' | 'tools' | 'ui';
}

export const skills: Skill[] = [
  // Frontend Technologies
  {
    id: 'html5',
    title: 'HTML5',
    skillImg: '/assets/html5.png',
    backgroundColor: '#E44D26',
    category: 'frontend'
  },
  {
    id: 'css3',
    title: 'CSS3',
    skillImg: '/assets/css3.png',
    backgroundColor: '#1572B6',
    category: 'frontend'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    skillImg: '/assets/js.png',
    backgroundColor: '#F7DF1E',
    category: 'frontend'
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    skillImg: '/assets/typescript.png',
    backgroundColor: '#007ACC',
    category: 'frontend'
  },
  {
    id: 'react',
    title: 'React',
    skillImg: '/assets/react.png',
    backgroundColor: '#61DAFB',
    category: 'frontend'
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    skillImg: '/assets/nextjs.png',
    backgroundColor: '#b0b0b0',
    category: 'frontend'
  },
  {
    id: 'vite',
    title: 'Vite',
    skillImg: '/assets/vite.png',
    backgroundColor: '#646CFF',
    category: 'frontend'
  },
  
  // UI Libraries
  {
    id: 'bootstrap',
    title: 'Bootstrap',
    skillImg: '/assets/bootstrap.png',
    backgroundColor: '#007bff',
    category: 'ui'
  },
  {
    id: 'elasticui',
    title: 'ElasticUI',
    skillImg: '/assets/elastic.png',
    backgroundColor: '#00B3A6',
    category: 'ui'
  },
  {
    id: 'materialui',
    title: 'MaterialUI',
    skillImg: '/assets/mui.png',
    backgroundColor: '#1976D2',
    category: 'ui'
  },
  
  // Tools & Services
  {
    id: 'firebase',
    title: 'Firebase',
    skillImg: '/assets/firebase.png',
    backgroundColor: '#FFCA28',
    category: 'tools'
  },
  {
    id: 'github',
    title: 'Github',
    skillImg: '/assets/github.png',
    backgroundColor: '#586069',
    category: 'tools'
  }
];

// 카테고리별로 스킬을 그룹화하는 헬퍼 함수
export const getSkillsByCategory = (category: Skill['category']) => 
  skills.filter(skill => skill.category === category);

// 모든 카테고리 가져오기
export const getAllCategories = (): Skill['category'][] => 
  Array.from(new Set(skills.map(skill => skill.category)));
