import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import profileImage from "figma:asset/43d505a6aaa4d1ddbc26ec9e8b4ae04d71284c9f.png";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Mario Abramovic";
  }, []);

  const projects = [
    {
      title: "Oracle ID Sync Platform",
      description:
        "Led product optimization achieving 78% increase in match rates and 18% boost in activation. Managed 30+ API integrations with performance monitoring.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwaW50ZWdyYXRpb24lMjBwbGF0Zm9ybSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTc3MTA0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "REST APIs",
        "Oracle Cloud",
        "Python",
        "Data Mapping",
      ],
      detailedDescription: "Spearheaded a critical product optimization initiative for Oracle's ID Sync platform, a data onboarding and identity resolution system serving enterprise clients across advertising and marketing technology sectors.",
      achievements: [
        "Achieved 78% increase in match rates through systematic optimization of data mapping and identity resolution algorithms",
        "Delivered 18% boost in activation rates by implementing performance monitoring and optimization workflows",
        "Managed integration with 30+ APIs across demand-side platforms (DSPs) and data management platforms (DMPs)",
        "Led cross-functional collaboration between engineering, product, and client success teams to define requirements and deliver features",
        "Implemented automated monitoring and alerting systems for API performance and data quality metrics"
      ],
      impact: "This platform processed millions of identity records daily, directly supporting client campaigns with $1B+ in media spend. The optimization resulted in significantly improved campaign targeting and ROI for enterprise clients.",
    },
    {
      title: "Enterprise Data Pipeline",
      description:
        "Architected scalable data ingestion systems supporting $1B+ business impact across DSPs and SaaS platforms with secure cloud delivery.",
      image:
        "https://images.unsplash.com/photo-1626285094823-d16fba5049cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBtYW5hZ2VtZW50JTIwc3lzdGVtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NzcxMDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "REST APIs",
        "SFTP",
        "Cloud Infrastructure",
        "MarTech",
      ],
      detailedDescription: "Architected and implemented scalable data ingestion and delivery systems that formed the backbone of Oracle's data onboarding platform, enabling secure and reliable data flow for enterprise clients in the advertising ecosystem.",
      achievements: [
        "Designed and deployed data pipelines processing terabytes of customer data across multiple DSPs and SaaS platforms",
        "Implemented secure cloud-based delivery mechanisms supporting both REST API and SFTP protocols",
        "Established data quality validation frameworks ensuring 99.9% data integrity across all client deliveries",
        "Led the technical architecture for client onboarding, reducing time-to-value from weeks to days",
        "Created comprehensive documentation and runbooks for operational teams, reducing support escalations by 40%"
      ],
      impact: "These data pipelines directly supported marketing campaigns with over $1B in business impact, serving Fortune 500 companies with mission-critical data delivery requirements.",
    },
    {
      title: "Marketing Automation",
      description:
        "Reduced client response time by 24+ hours and improved accuracy by 46% using Python analytics and workflow automation.",
      image:
        "https://images.unsplash.com/photo-1737703121444-c568a9d3bc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwYXV0b21hdGlvbiUyMHdvcmtmbG93fGVufDF8fHx8MTc1NzcxMDQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "Python",
        "Pandas",
        "Eloqua",
        "Automation",
      ],
      detailedDescription: "Developed Python-based analytics and automation tools to streamline marketing operations workflows, significantly improving response times and data accuracy for enterprise client campaigns.",
      achievements: [
        "Reduced client response time by 24+ hours through automated data processing and validation workflows",
        "Improved campaign data accuracy by 46% using custom Python scripts with Pandas for data analysis and cleansing",
        "Automated manual reporting processes in Oracle Eloqua, saving 15+ hours per week for marketing operations teams",
        "Created reusable Python libraries for common data transformation and validation tasks",
        "Implemented error handling and logging frameworks ensuring reliable unattended execution"
      ],
      impact: "These automation solutions enabled the marketing team to handle 3x more client campaigns without increasing headcount, while simultaneously improving data quality and client satisfaction scores.",
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "REST APIs",
    "Postman",
    "Jira",
    "Confluence",
    "Tableau",
    "Git",
    "Salesforce",
    "Eloqua",
    "Oracle Cloud",
    "Agile/Scrum",
    "Project Management",
    "Data Integration",
  ];

  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-medium">Mario Abramovic</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="mb-6">
              Hi, I'm{" "}
              <span className="text-primary">
                Mario Abramovic
              </span>
            </h1>
            <p className="text-muted-foreground mb-4 max-w-4xl mx-auto">
              Technical Project Manager | Solutions Architect |
              Platform Integrations Specialist
            </p>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              10+ years of experience leading enterprise SaaS,
              MarTech, and AdTech programs. Proven success
              driving stakeholder alignment and optimizing
              systems that scale to support $1B+ in business
              impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://linkedin.com/in/mario-abramovic"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:m_abramovic@icloud.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-6">
                I'm a seasoned Technical Project Manager and
                Solutions Architect with over 10 years of
                experience leading enterprise SaaS, MarTech, and
                AdTech programs. I specialize in translating
                complex business requirements into scalable
                technical solutions.
              </p>
              <p className="mb-6">
                My expertise spans data integrations, API
                management, and platform enablement, with a
                proven track record of optimizing systems that
                support billion-dollar business operations. I
                excel at bringing together cross-functional
                teams to deliver results.
              </p>
              <p>
                Currently based in Seattle, I'm passionate about
                leveraging technology to solve complex business
                challenges and creating efficient, scalable
                solutions that improve data fidelity and
                performance.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={profileImage}
                alt="Technical Project Management Workspace"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Experience Highlights */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4">Experience Highlights</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="mb-1">Oracle (2014-2024)</h4>
                  <p className="text-muted-foreground">
                    Technical Project Manager & Solutions
                    Architect
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="mb-1">
                    Peel District School Board (2010-2014)
                  </h4>
                  <p className="text-muted-foreground">
                    PC/LAN Support Specialist
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Certifications</h3>
              <div className="space-y-2">
                <span className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">
                  Certified Scrum Product Owner (CSPO)
                </span>
                <span className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">
                  B.Sc. Equivalency in Computer & Information
                  Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(index)}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02]"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(
                      (tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 border border-border rounded text-sm"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Detail Dialog */}
          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              {selectedProject !== null && (
                <>
                  <DialogHeader>
                    <DialogTitle>{projects[selectedProject].title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <h4 className="mb-2">Overview</h4>
                      <p className="text-muted-foreground">
                        {projects[selectedProject].detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {projects[selectedProject].achievements.map((achievement, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2">Business Impact</h4>
                      <p className="text-muted-foreground">
                        {projects[selectedProject].impact}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8">Let's Work Together</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always excited to collaborate on challenging
            technical projects and discuss new opportunities in
            enterprise SaaS, MarTech, and platform integrations.
            Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-3 text-primary" />
              <h3 className="mb-2">Email</h3>
              <p className="text-muted-foreground">
                m_abramovic@icloud.com
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-3 text-primary" />
              <h3 className="mb-2">Phone</h3>
              <p className="text-muted-foreground">
                (206) 660-8255
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-3 text-primary" />
              <h3 className="mb-2">Location</h3>
              <p className="text-muted-foreground">
                Seattle, WA
              </p>
            </div>
          </div>

          <a
            href="mailto:m_abramovic@icloud.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Mail className="h-5 w-5" />
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
            <a
              href="https://marabram.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              View Resume
            </a>
            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 38 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
                  fill="currentColor"
                />
                <path
                  d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
                  fill="currentColor"
                />
                <path
                  d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
                  fill="currentColor"
                />
                <path
                  d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
                  fill="currentColor"
                />
                <path
                  d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
                  fill="currentColor"
                />
              </svg>
              Built with Figma
            </a>
          </div>
          <p>
            &copy; 2025 Mario Abramovic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}