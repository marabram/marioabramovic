import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Phone,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import { motion } from "motion/react";
import profileImage from "figma:asset/43d505a6aaa4d1ddbc26ec9e8b4ae04d71284c9f.png";
import dataPipelineImage from "figma:asset/b348e5ebeb0411829bdcec0a22a40027e88619a2.png";
import marketingAutomationImage from "figma:asset/a3dff05523945b3a7a751ae6b8fbc423034f79f6.png";
import oracleIdSyncImage from "figma:asset/872cf4a0e31e0e1af29e1d149d7837dbf509911b.png";

// ========================================
// LOGO IMPORTS - Add your company logos here
// ========================================
// Example: import googleLogo from "figma:asset/YOUR_GOOGLE_LOGO_HASH.png";
// Example: import mntnLogo from "figma:asset/YOUR_MNTN_LOGO_HASH.png";
// Example: import liverampLogo from "figma:asset/YOUR_LIVERAMP_LOGO_HASH.png";
// ... add imports for all 18 company logos

interface CompanyCardProps {
  company: {
    name: string;
    desc: string;
    domain: string;
    url: string;
    logo?: string; // Add logo property here - this will be the imported logo
  };
}

function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="flex-shrink-0 w-80 bg-card rounded-lg p-6 border border-border shadow-md">
      <div className="mb-3">
        {/* 
          TO USE LOGOS: 
          1. Import your logo images at the top of this file (see LOGO IMPORTS section above)
          2. Add the 'logo' property to each company object in the arrays below
          3. Uncomment the logo display code and comment out the text-only version
        */}
        
        {/* LOGO VERSION (currently disabled - uncomment when logos are ready): */}
        {/* {company.logo ? (
          <a 
            href={company.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <img 
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-12 w-auto object-contain"
            />
          </a>
        ) : (
          <h4 className="mb-0">{company.name}</h4>
        )} */}
        
        {/* TEXT-ONLY VERSION (currently active): */}
        <h4 className="mb-0">{company.name}</h4>
      </div>
      <p className="text-muted-foreground text-sm">{company.desc}</p>
    </div>
  );
}

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
      image: oracleIdSyncImage,
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
      image: dataPipelineImage,
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
      image: marketingAutomationImage,
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-medium">Mario Abramovic</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Contact
              </button>
              <a
                href="https://marabram.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="mb-6">
              It's-A Me,{" "}
              <span className="text-primary">
                Mario Abramovic
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-4 max-w-4xl mx-auto">
              Technical Project Manager | Solutions Architect |
              Platform Integrations Specialist
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              10+ years of experience leading enterprise SaaS,
              MarTech, and AdTech programs. Proven success
              driving stakeholder alignment and optimizing
              systems that scale to support $1B+ in business
              impact.
            </motion.p>
            {/* Quick Direct Button - Commented out to clean up UI */}
            {/* 
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Get In Touch
              </motion.button>
            </motion.div>
            */}
            {/* End of Commented out Buttons */}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={profileImage}
                alt="Technical Project Management Workspace"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="flex flex-wrap gap-3 justify-center"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Experience Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div>
              <h3 className="mb-4">Experience</h3>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border-l-4 border-primary pl-4"
                >
                  <h4 className="mb-1">Oracle (2014-2024)</h4>
                  <p className="text-muted-foreground">
                    Technical Project Manager & Solutions
                    Architect
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border-l-4 border-primary pl-4"
                >
                  <h4 className="mb-1">
                    Peel District School Board (2010-2014)
                  </h4>
                  <p className="text-muted-foreground">
                    PC/LAN Support Specialist
                  </p>
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Certifications</h3>
              <div className="space-y-2">
                <motion.span 
                  whileHover={{ scale: 1.02 }}
                  className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg"
                >
                  Certified Scrum Product Owner (CSPO)
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.02 }}
                  className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg"
                >
                  B.Sc. Equivalency in Computer & Information
                  Systems
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProject(index)}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <div className="overflow-hidden bg-muted">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
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
              </motion.div>
            ))}
          </motion.div>

          {/* Project Detail Dialog */}
          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="w-[95vw] max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
              {selectedProject !== null && (
                <>
                  <DialogHeader>
                    <DialogTitle>{projects[selectedProject].title}</DialogTitle>
                    <DialogDescription>
                      {projects[selectedProject].description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="overflow-hidden rounded-lg bg-muted mx-auto max-w-md">
                      <img
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        className="w-full h-auto"
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

      {/* Companies Section - Scrolling Banner */}
      <section className="py-20 overflow-hidden bg-muted/30">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            Technology Partners & Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-muted-foreground max-w-3xl mx-auto px-4"
          >
            Collaborated with leading enterprise organizations and technology platforms across MarTech, AdTech, and SaaS ecosystems.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{
              x: [0, -2800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 90,
                ease: "linear",
              },
            }}
            className="flex gap-6"
          >
            {/* First set of companies */}
            {/* TO ADD LOGOS: Add 'logo: googleLogo' (or your imported logo variable) to each company object below */}
            {[
              { name: "Google", desc: "Implemented updates leveraging new ID spaces to ensure uninterrupted audience delivery and activation continuity.", domain: "google.com", url: "https://about.google" /* , logo: googleLogo */ },
              { name: "MNTN", desc: "Scoped, designed, and built an OTT integration enabling audience activation and performance tracking across streaming environments.", domain: "mntn.com", url: "https://mntn.com/about" },
              { name: "AdTheorent", desc: "Supported and optimized data pipelines powering audience activation and delivery for programmatic campaigns.", domain: "adtheorent.com", url: "https://adtheorent.com" },
              { name: "SpotX", desc: "Enabled scalable data delivery pipelines and coordinated client requests through to production deployment.", domain: "spotx.tv", url: "https://www.magnite.com/about-us" },
              { name: "MediaMath", desc: "Supported real-time integration monitoring and maintained endpoint reliability for audience and campaign data flows.", domain: "mediamath.com", url: "https://www.mediamath.com/about" },
              { name: "SmartADs", desc: "Developed audience injection workflows that streamlined activation processes and improved delivery timelines.", domain: "smartads.com", url: "https://smartads.com" },
              { name: "LiveRamp", desc: "Collaborated on first- and third-party data onboarding initiatives, optimizing match rates and activation across partner ecosystems.", domain: "liveramp.com", url: "https://liveramp.com/about" },
              { name: "Verizon", desc: "Coordinated cross-platform integrations to enable targeted audience delivery for telecom and media campaigns.", domain: "verizon.com", url: "https://www.verizon.com/about" },
              { name: "Facebook", desc: "Supported delivery of audience data from the data marketplace into Facebook's ad ecosystem to enhance targeting precision.", domain: "facebook.com", url: "https://about.meta.com" },
              { name: "The Trade Desk", desc: "Managed and monitored API integrations enabling audience synchronization and activation across DSP environments.", domain: "thetradedesk.com", url: "https://www.thetradedesk.com/us/about-us" },
              { name: "Adform", desc: "Designed and implemented a custom data integration supporting real-time activation and measurement pipelines.", domain: "adform.com", url: "https://site.adform.com/about" },
              { name: "Amazon", desc: "Collaborated with engineering teams to establish and maintain secure data pipelines driving activation and attribution use cases.", domain: "amazon.com", url: "https://www.aboutamazon.com" },
              { name: "AppNexus", desc: "Oversaw onboarding and integration of audience data pipelines to enhance delivery and real-time targeting.", domain: "appnexus.com", url: "https://www.appnexus.com/en/company" },
              { name: "Criteo", desc: "Enabled AO campaign integrations for downstream targeting and improved client audience segmentation.", domain: "criteo.com", url: "https://www.criteo.com/about" },
              { name: "Integral Ad Science", desc: "Drove integration of verification and measurement data to ensure campaign quality and brand safety standards.", domain: "integralads.com", url: "https://integralads.com/about" },
              { name: "OpenX", desc: "Partnered with internal and external teams to validate and enable data delivery for programmatic auction workflows.", domain: "openx.com", url: "https://www.openx.com/about" },
              { name: "TubeMogul", desc: "Integrated audience activation pipelines for video inventory, enabling unified delivery across DSP partners.", domain: "adobe.com", url: "https://www.adobe.com/advertising/adobe-advertising-cloud.html" },
              { name: "Rocket Fuel", desc: "Supported automation of audience matching and delivery for performance-based campaigns.", domain: "rocketfuel.com", url: "https://rocketfuel.com" },
              { name: "Neustar", desc: "Collaborated on identity resolution integrations to improve data accuracy and attribution across connected systems.", domain: "neustar.com", url: "https://www.home.neustar" },
              { name: "Quantcast", desc: "Enabled real-time audience delivery and attribution pipelines supporting advanced modeling initiatives.", domain: "quantcast.com", url: "https://www.quantcast.com/about" },
              { name: "MediaOcean", desc: "Maintained activation and reporting integrations ensuring operational alignment with downstream partners.", domain: "mediaocean.com", url: "https://www.mediaocean.com/about" },
              { name: "Salesforce / Krux", desc: "Managed integration health and ensured data delivery compliance between CRM and audience activation systems.", domain: "salesforce.com", url: "https://www.salesforce.com/products/marketing-cloud/overview/" },
              { name: "Beeswax", desc: "Built and supported audience ingestion and activation integrations tailored to client-specific campaign needs.", domain: "beeswax.com", url: "https://www.beeswax.com/about" },
              { name: "PubMatic", desc: "Partnered with AdOps and engineering teams to enable audience data exchange and programmatic deal activation.", domain: "pubmatic.com", url: "https://pubmatic.com/about" },
              { name: "TrueData Japan", desc: "Onboarded the first Japan-based data provider, establishing cross-regional audience ingestion pipelines and validation processes.", domain: "truedata.co.jp", url: "https://www.truedata.co.jp" },
            ].map((company, index) => (
              <CompanyCard key={`set1-${index}`} company={company} />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              { name: "Google", desc: "Implemented updates leveraging new ID spaces to ensure uninterrupted audience delivery and activation continuity.", domain: "google.com", url: "https://about.google" },
              { name: "MNTN", desc: "Scoped, designed, and built an OTT integration enabling audience activation and performance tracking across streaming environments.", domain: "mntn.com", url: "https://mntn.com/about" },
              { name: "AdTheorent", desc: "Supported and optimized data pipelines powering audience activation and delivery for programmatic campaigns.", domain: "adtheorent.com", url: "https://adtheorent.com" },
              { name: "SpotX", desc: "Enabled scalable data delivery pipelines and coordinated client requests through to production deployment.", domain: "spotx.tv", url: "https://www.magnite.com/about-us" },
              { name: "MediaMath", desc: "Supported real-time integration monitoring and maintained endpoint reliability for audience and campaign data flows.", domain: "mediamath.com", url: "https://www.mediamath.com/about" },
              { name: "SmartADs", desc: "Developed audience injection workflows that streamlined activation processes and improved delivery timelines.", domain: "smartads.com", url: "https://smartads.com" },
              { name: "LiveRamp", desc: "Collaborated on first- and third-party data onboarding initiatives, optimizing match rates and activation across partner ecosystems.", domain: "liveramp.com", url: "https://liveramp.com/about" },
              { name: "Verizon", desc: "Coordinated cross-platform integrations to enable targeted audience delivery for telecom and media campaigns.", domain: "verizon.com", url: "https://www.verizon.com/about" },
              { name: "Facebook", desc: "Supported delivery of audience data from the data marketplace into Facebook's ad ecosystem to enhance targeting precision.", domain: "facebook.com", url: "https://about.meta.com" },
              { name: "The Trade Desk", desc: "Managed and monitored API integrations enabling audience synchronization and activation across DSP environments.", domain: "thetradedesk.com", url: "https://www.thetradedesk.com/us/about-us" },
              { name: "Adform", desc: "Designed and implemented a custom data integration supporting real-time activation and measurement pipelines.", domain: "adform.com", url: "https://site.adform.com/about" },
              { name: "Amazon", desc: "Collaborated with engineering teams to establish and maintain secure data pipelines driving activation and attribution use cases.", domain: "amazon.com", url: "https://www.aboutamazon.com" },
              { name: "AppNexus", desc: "Oversaw onboarding and integration of audience data pipelines to enhance delivery and real-time targeting.", domain: "appnexus.com", url: "https://www.appnexus.com/en/company" },
              { name: "Criteo", desc: "Enabled AO campaign integrations for downstream targeting and improved client audience segmentation.", domain: "criteo.com", url: "https://www.criteo.com/about" },
              { name: "Integral Ad Science", desc: "Drove integration of verification and measurement data to ensure campaign quality and brand safety standards.", domain: "integralads.com", url: "https://integralads.com/about" },
              { name: "OpenX", desc: "Partnered with internal and external teams to validate and enable data delivery for programmatic auction workflows.", domain: "openx.com", url: "https://www.openx.com/about" },
              { name: "TubeMogul", desc: "Integrated audience activation pipelines for video inventory, enabling unified delivery across DSP partners.", domain: "adobe.com", url: "https://www.adobe.com/advertising/adobe-advertising-cloud.html" },
              { name: "Rocket Fuel", desc: "Supported automation of audience matching and delivery for performance-based campaigns.", domain: "rocketfuel.com", url: "https://rocketfuel.com" },
              { name: "Neustar", desc: "Collaborated on identity resolution integrations to improve data accuracy and attribution across connected systems.", domain: "neustar.com", url: "https://www.home.neustar" },
              { name: "Quantcast", desc: "Enabled real-time audience delivery and attribution pipelines supporting advanced modeling initiatives.", domain: "quantcast.com", url: "https://www.quantcast.com/about" },
              { name: "MediaOcean", desc: "Maintained activation and reporting integrations ensuring operational alignment with downstream partners.", domain: "mediaocean.com", url: "https://www.mediaocean.com/about" },
              { name: "Salesforce / Krux", desc: "Managed integration health and ensured data delivery compliance between CRM and audience activation systems.", domain: "salesforce.com", url: "https://www.salesforce.com/products/marketing-cloud/overview/" },
              { name: "Beeswax", desc: "Built and supported audience ingestion and activation integrations tailored to client-specific campaign needs.", domain: "beeswax.com", url: "https://www.beeswax.com/about" },
              { name: "PubMatic", desc: "Partnered with AdOps and engineering teams to enable audience data exchange and programmatic deal activation.", domain: "pubmatic.com", url: "https://pubmatic.com/about" },
              { name: "TrueData Japan", desc: "Onboarded the first Japan-based data provider, establishing cross-regional audience ingestion pipelines and validation processes.", domain: "truedata.co.jp", url: "https://www.truedata.co.jp" },
            ].map((company, index) => (
              <CompanyCard key={`set2-${index}`} company={company} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            I'm always excited to collaborate on challenging
            technical projects and discuss new opportunities in
            enterprise SaaS, MarTech, and platform integrations.
            Feel free to reach out!
          </motion.p>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ 
                  y: [0, -10, 0],
                  transition: { 
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 0.2
                  }
                }}
              >
                <Mail className="h-8 w-8 mb-3 text-primary" />
              </motion.div>
              <h3 className="mb-2">Email</h3>
              <a 
                href="mailto:m_abramovic@icloud.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                m_abramovic@icloud.com
              </a>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 10, 0],
                  transition: { 
                    duration: 0.5
                  }
                }}
              >
                <Phone className="h-8 w-8 mb-3 text-primary" />
              </motion.div>
              <h3 className="mb-2">Phone</h3>
              <a 
                href="tel:+12066608255"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (206) 660-8255
              </a>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ 
                  scale: [1, 1.3, 1, 1.3, 1],
                  transition: { 
                    duration: 0.6
                  }
                }}
              >
                <Linkedin className="h-8 w-8 mb-3 text-primary" />
              </motion.div>
              <h3 className="mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/mario-abramovic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                mario-abramovic
              </a>
            </motion.div>
          </motion.div>

          {/* Email Me Button - Commented out since email is now clickable in the contact grid above */}
          {/* Located in Contact Section (lines ~782-794) */}
          {/* <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:m_abramovic@icloud.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Mail className="h-5 w-5" />
            Email Me
          </motion.a> */}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://marabram.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              View Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
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
            </motion.a>
          </div>
          <p>
            &copy; 2025 Mario Abramovic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
