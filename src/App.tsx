import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";

export default function App() {
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
      github: "#",
      demo: "#",
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
      github: "#",
      demo: "#",
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
      github: "#",
      demo: "#",
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
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3NzA5NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional workspace"
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
                <span className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                  Certified Scrum Product Owner (CSPO)
                </span>
                <span className="block px-4 py-2 bg-accent text-accent-foreground rounded-lg">
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
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
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
          <div className="flex justify-center mb-4">
            <a
              href="https://marabram.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              View Resume
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