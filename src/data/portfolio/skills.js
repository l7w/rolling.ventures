const skills = [
  {
    title: 'CI/CD',
    competency: 4,
    category: ['DevOps'],
  },
  {
    title: 'Monitoring and Logging',
    competency: 4,
    category: ['CloudOps', 'DevOps'],
  },
  {
    title: 'Containerization and Orchestration',
    competency: 5,
    category: ['CloudOps', 'DevOps'],
  },
  {
    title: 'Microservices and API Gateways',
    competency: 4,
    category: ['CloudOps', 'DevOps'],
  },
  {
    title: 'Cloud Security',
    competency: 4,
    category: ['DevOps', 'CloudOps'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Software Engineering', 'Embedded Linux'],
  },
  {
    title: 'Networking and IoT',
    competency: 4,
    category: ['Embedded Linux'],
  },
  {
    title: 'Linux Kernel Development',
    competency: 3,
    category: ['Embedded Linux'],
  },
  {
    title: 'BASH',
    competency: 4,
    category: ['Scripting', 'Software Engineering'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['CloudOps'],
  },
  {
    title: 'DigitalOcean',
    competency: 5,
    category: ['CloudOps', 'DevOps'],
  },
  {
    title: 'RUST',
    competency: 3,
    category: ['Embedded Linux', 'Software Engineering'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['CI/CD', 'Tooling'],
  },
  {
    title: 'Teraform',
    competency: 3,
    category: ['Infrastructure as Code (IaC)'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['CloudOps', 'DevOps'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#91fcc0',
  '#9ffdc7',
  '#adfdce',
  '#bafed5',
  '#c6fedc',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
