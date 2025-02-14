/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {

    name: 'QMI Inc',
    position: 'Cloud Operations Engineer',
    url: '',
    startDate: '2024-11-01',
    summary: 'Design, implement, and manage cloud infrastructure to support scalable applications and services.',
    highlights: [
      'Collaborate with development teams to optimize CI/CD pipelines, ensuring efficient and reliable deployment processes.',
      'Utilize BASH scripting for automation of cloud operations and maintenance tasks.',
      'Conduct reverse engineering of web applications to identify vulnerabilities and improve security posture.',
      'Monitor system performance and troubleshoot issues to maintain optimal cloud service availability.',
    ],
  },
  {
    name: 'Burningman Org',
    position: 'WAN Network Engineer',
    url: '',
    startDate: '2024-08-01',
    endDate: '2024-11-01',
    summary: 'Designed and maintained WAN solutions to support organization connectivity needs for events and operations.',
    highlights: [
      'Configured and managed routers, switches, and firewalls, ensuring seamless network performance and security.',
      'Collaborated with teams to troubleshoot network issues, ensuring high availability during events.',
      'Developed and documented network architecture and procedures, contributing to operational efficiency.',
      'Provided training and support to team members on network best practices.',
    ],
  },
  {
    name: 'E7evation Cyber Services',
    position: 'Owner/Principal Consultant',
    url: '',
    startDate: '2021-03-01',
    endDate: '2024-08-01',
    summary: 'Built and supported cloud systems for various clients, ensuring integration between on-premises and cloud environments.',
    highlights: [
      'Planned, designed, and implemented network solutions tailored to customer requirements.',
      'Developed automation scripts using Terraform to streamline deployment processes.',
      'Conducted project planning, cost analysis, and vendor comparisons to optimize resource allocation.',
    ],
  },
  {
    name: 'Nissan Motor Corporation',
    position: 'Global Manager Product Cyber Security Services',
    url: '',
    startDate: '2019-02-01',
    endDate: '2021-03-01',
    summary: 'Primary global leader for delivering Cyber Security Services throughout the entire Enterprise, focusing on Connected Car and Engineering initiatives.',
    highlights: [
      'Served as the program leader and SME for SSDLC, DevSecOps, Penetration Testing, and Vulnerability Management initiatives.',
      'Acted as the service delivery architect and primary contact for all risk assessments at technical and compliance levels.',
      'Collaborated with the Global CISO and CIO on strategic proposal development and financial validations for global IS/IT strategy.',
      'Led multip,le data security governance committees and compliance objectives for legal and compliance divisions.',
    ],
  },
  {
    name: 'Nissan Motor Corporation',
    position: 'Manager, Cybersecurity Assessment Team',
    url: '',
    startDate: '2017-08-01',
    endDate: '2019-02-01',
    summary: 'Oversaw a team to proactively identify and mitigate risks within vehicle systems and applications.',
    highlights: [
      'Coordinated red team activities, internal training, and vendor engagements throughout all product lifecycle stages.',
      'Architected end-to-end Cybersecurity validation concepts and promoted efficient testing methods via virtualization.',
      'Influenced relationships with R&D and Engineering teams to enhance SDLC methodologies.',
      'Trained and mentored a team of 10 Security Engineers across North America, Canada, and Mexico.',
    ],
  },
  {
    name: 'Nissan North America',
    position: 'Sr. Penetration Tester',
    url: 'https://www.nissanusa.com',
    startDate: '2016-07-01',
    endDate: '2017-08-01',
    summary: "Developed and implemented Nissan's first vehicle penetration testing program, addressing vulnerabilities in telematics connectivity.",
    highlights: [
      'Implemented Nissan\'s first vehicle penetration testing program and severity matrix for embedded systems design.',
      'Researched and presented a 0day telematics vulnerability, assisting with reporting and mitigation strategies.',
      'Collaborated with engineering teams to resolve complex cybersecurity issues related to cellular base stations.',
    ],
  },
  {
    name: 'Datanyze',
    position: 'Backend Software Engineer',
    url: 'https://www.datayze.com',
    startDate: '2015-06-01',
    endDate: '2016-07-01',
    summary: 'Enhanced SaaS product performance by re-engineering search algorithms and optimizing mobile technology analytics.',
    highlights: [
      'Re-engineered core search algorithms to enhance product performance.',
      'Created a 100+ iPhone farm for mobile analytics and data collection.',
      'Utilized unique iOS binary reversing methods to isolate valuable technologies.',
      'Delivered extreme value insights to clients through enhanced mobile technology analytics.',
    ],
  },
];

export default work;
