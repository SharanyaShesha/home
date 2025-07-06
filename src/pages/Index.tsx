import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Menu, X, User, FolderOpen, Briefcase, MessageCircle } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "TrimNN: Spatial Cell Community Detection",
      description: "Graph-based neural network for identifying conserved spatial cell motifs in tissue-specific single-cell spatial transcriptomics datasets",
      technologies: ["Python", "PyTorch", "Graph Neural Networks", "HPC"],
      link: "https://github.com/SharanyaShesha"
    },
    {
      title: "3D Renal Carcinoma Segmentation",
      description: "Deep learning models (3D U-Net, nnU-Net) for medical image segmentation using Kits23 CT imaging dataset",
      technologies: ["3D U-Net", "nnU-Net", "OpenCV", "Medical Imaging"],
      link: "https://github.com/SharanyaShesha"
    },
    {
      title: "Precision Medicine Analysis",
      description: "Multi-omics integration and genomic-phenotypic correlation studies for personalized medicine approaches",
      technologies: ["R", "Bioconductor", "Multi-omics", "Statistical Analysis"],
      link: "https://github.com/SharanyaShesha/PrecisionMed"
    },
    {
      title: "Colorectal Cancer WGCNA",
      description: "Weighted Gene Co-Expression Network Analysis to identify key gene modules correlated with colorectal cancer subtypes",
      technologies: ["R", "WGCNA", "GO/KEGG", "Network Analysis"],
      link: "https://github.com/SharanyaShesha/colorectal-cancer-WGCNA"
    },
    {
      title: "Thyroid Disorder Prediction",
      description: "Machine learning models for thyroid disorder prediction using clinical datasets with comprehensive feature engineering",
      technologies: ["Python", "Scikit-learn", "Random Forest", "ROC Analysis"],
      link: "https://github.com/SharanyaShesha/Thyroid_Statistical_Analysis"
    },
    {
      title: "Protein Interaction Network Analysis",
      description: "Comprehensive analysis of protein-protein interaction networks with pathway enrichment and functional annotation",
      technologies: ["Cytoscape", "STRING", "GO Enrichment", "Network Biology"],
      link: "https://github.com/SharanyaShesha/protein-interaction-network-analysis"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "R", "SQL", "Java", "Bash"],
    "Bioinformatics & NGS": ["RNA-seq", "scRNA-seq", "Variant Calling", "DESeq2", "Seurat", "STAR", "GATK"],
    "Machine Learning & AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Graph Neural Networks", "Deep Learning"],
    "Data Visualization": ["ggplot2", "Seaborn", "Matplotlib", "Plotly", "Cytoscape"],
    "Cloud & HPC": ["Microsoft Azure", "SLURM", "BigRed200", "Conda", "Nextflow"],
    "Specialized Tools": ["PyMOL", "AutoDock", "UCSC Genome Browser", "Geneious", "ImageJ"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-display font-semibold text-lg text-foreground">
              Sharanya Sheshadri
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "Home", icon: User },
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: FolderOpen },
                { id: "experience", label: "Experience", icon: Briefcase },
                { id: "contact", label: "Contact", icon: MessageCircle }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === id 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === id 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Sharanya Sheshadri
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary mb-8">
              Bioinformatics Data Scientist
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Advancing cancer biology research through spatial transcriptomics, deep learning, and 
              multi-modal biological data integration. Specialized in tumor microenvironment modeling 
              and computational biology solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection("projects")}
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-medium"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="mailto:sharanya.sheshadri1507@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/SharanyaShesha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sharanya-sheshadri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate bioinformatics researcher bridging computational methods with biological discovery
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-foreground mb-6 leading-relaxed">
                I am a bioinformatics graduate student at Indiana University's Luddy School, specializing in 
                spatial transcriptomics analysis and deep learning applications in computational biology. 
                My research focuses on developing innovative frameworks for spatial cell community detection 
                and tumor microenvironment modeling.
              </p>
              <p className="text-foreground mb-6 leading-relaxed">
                With experience spanning from research laboratories to industry software development, 
                I bridge the gap between computational methods and biological discovery. I'm particularly 
                passionate about applying graph neural networks and multi-modal data integration 
                techniques to advance cancer biology research.
              </p>
              <p className="text-foreground mb-8 leading-relaxed">
                As President of the Luddy Student Council, I lead initiatives that foster collaboration 
                between students and faculty, while contributing to the academic community through 
                mentorship and outreach programs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">MS Bioinformatics</p>
                  <p className="text-sm text-muted-foreground">Indiana University</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-sm text-muted-foreground">Indianapolis, IN</p>
                  <p className="text-sm text-muted-foreground">Open to Relocation</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-secondary-dark text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A selection of computational biology research projects and bioinformatics solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Research positions, academic achievements, and professional development
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                role: "Research Assistant",
                organization: "AIMED Lab, Indiana University",
                period: "Aug 2024 - May 2025",
                description: "Developed deep learning models for renal carcinoma segmentation using 3D U-Net and nnU-Net architectures. Implemented image preprocessing pipelines and automated tumor visualization workflows.",
                highlights: ["3D Medical Image Segmentation", "Deep Learning Model Development", "Automated Workflow Design"]
              },
              {
                role: "Research Assistant", 
                organization: "Dr. Wang's Lab, Indiana University",
                period: "Jan 2025 - May 2025",
                description: "Designed TrimNN, a graph-based neural network for spatial cell motif identification in single-cell spatial transcriptomics data. Utilized HPC systems for training on high-dimensional omics data.",
                highlights: ["Graph Neural Networks", "Spatial Transcriptomics", "HPC Computing"]
              },
              {
                role: "President, Student Council",
                organization: "Luddy School of Informatics, Computing, and Engineering",
                period: "Aug 2024 - Present",
                description: "Lead student initiatives and foster collaboration between students and faculty. Organize academic events and represent the student body in discussions with administration.",
                highlights: ["Leadership", "Academic Community Building", "Student Advocacy"]
              },
              {
                role: "Backend Software Developer",
                organization: "Accenture Solutions",
                period: "Feb 2021 - Jul 2023",
                description: "Developed scalable RESTful APIs using Java Spring Boot and built responsive UI components with React.js. Led migration of SQL databases to Microsoft Azure cloud platform.",
                highlights: ["Full-Stack Development", "Cloud Migration", "Database Management"]
              }
            ].map((exp, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {exp.organization}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="self-start sm:self-center">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <Badge key={highlight} className="bg-accent/10 text-accent-foreground hover:bg-accent/20">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, research opportunities, or just want to connect? 
              I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Let's Collaborate</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm actively seeking opportunities in bioinformatics, computational biology, 
                and data science roles. Whether you're looking for a research collaborator, 
                have questions about my work, or want to discuss potential opportunities, 
                I'm always open to meaningful conversations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:sharanya.sheshadri1507@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    sharanya.sheshadri1507@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/sharanya-sheshadri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/sharanya-sheshadri
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-primary" />
                  <a 
                    href="https://github.com/SharanyaShesha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    github.com/SharanyaShesha
                  </a>
                </div>
              </div>
            </div>
            
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Send a Message</CardTitle>
                <CardDescription>
                  Feel free to reach out directly through this form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="Your first name" className="border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" className="border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@example.com" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="What's this about?" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project, collaboration idea, or just say hello!"
                      rows={5}
                      className="border-border"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2025 Sharanya Sheshadri. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <a
                href="mailto:sharanya.sheshadri1507@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/SharanyaShesha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sharanya-sheshadri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;