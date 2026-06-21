import React from 'react';
import './App.css';

function App() {
  return (
    <div className="infographic-container">
      {/* Fixed Left Side - Profile Photo */}
      <div className="profile-photo-container">
        <img src="/profile-photo.png" alt="Aly Mahboub" className="profile-photo" />
      </div>

      {/* Middle - Header and Skills */}
      <div className="content-panel">
        {/* Header */}
        <div className="header-section">
          <h1 className="name-title">ALY TAHA ALY MAHBOUB</h1>
          <div className="contact-info">
            <span>📞 +20 1015251425</span>
            <span>✉️ AMAHBOUB@eg.ibm.com</span>
          </div>
          <h2 className="role-title">APPLICATION ARCHITECT | Senior Application Developer</h2>
          <p className="objective-text">14+ Years Enterprise Software Delivery | Transportation & Maritime Industry Specialist | IBM Generative & Agentic AI Developer</p>
          <div className="experience-badge">Full Australian Work Rights | No Sponsorship Required | Open to Relocation</div>
        </div>

        {/* Technical Skills */}
        <div className="skills-content">
          <div className="section summary-section">
            <div className="section-header">
              <div className="icon-circle">💼</div>
              <h3>PROFESSIONAL SUMMARY</h3>
            </div>
            <p className="summary-text">
              Result-driven Application Architect and Senior Application Developer with 14+ years of enterprise software delivery experience across Transportation, Maritime Logistics, Banking, and Government sectors. Expert in driving high-availability mission-critical digital transformation initiatives, orchestrating multi-stakeholder application integrations, and migrating core enterprise monolith architectures into robust cloud-native microservices.
            </p>
          </div>

          <div className="section skills-section">
            <div className="section-header">
              <div className="icon-circle">⚡</div>
              <h3>TECHNICAL EXCELLENCE</h3>
            </div>
            
            <div className="skill-category">
              <h4>🏗️ Architecture & Strategy</h4>
              <div className="skill-tags">
                <span>Application & Solution Design</span>
                <span>Monolith-to-Microservices</span>
                <span>Tech Roadmaps & Governance</span>
                <span>Maritime & Logistics Domain</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>💻 Software Engineering</h4>
              <div className="skill-tags">
                <span>Java Enterprise Edition / J2EE</span>
                <span>Spring Boot & Hibernate</span>
                <span>GenAI & Agentic Development</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>🔗 Integration & Middleware</h4>
              <div className="skill-tags">
                <span>IBM App Connect Enterprise (ACE)</span>
                <span>IBM MQ Message-Based Systems</span>
                <span>SOA / Event-Driven Architectures</span>
                <span>RESTful API Design Patterns</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>☁️ Cloud, Data & DevOps</h4>
              <div className="skill-tags">
                <span>IBM Cloud & Red Hat OpenShift</span>
                <span>CI/CD Pipelines (Jenkins, Maven, RTC)</span>
                <span>Oracle & DB2 Databases</span>
                <span>GitHub & RTC</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>🤖 AI-Enabled Solutions</h4>
              <div className="skill-tags">
                <span>IBM Generative & Agentic AI</span>
                <span>AI-Assisted Modernization</span>
                <span>AI-Augmented Development</span>
                <span>AI Code Refactoring</span>
              </div>
            </div>
          </div>

          <div className="section domains-section">
            <div className="section-header">
              <div className="icon-circle">🌐</div>
              <h3>INDUSTRY DOMAINS</h3>
            </div>
            <div className="domain-list">
              <div className="domain-item">🚢 Maritime Logistics & Port Operations</div>
              <div className="domain-item">🚚 Travel & Transportation</div>
              <div className="domain-item">🏛️ Government & Public Sector</div>
              <div className="domain-item">🏦 Enterprise Banking & Financial Services</div>
              <div className="domain-item">🔄 Cross-Government Digital Integration</div>
            </div>
          </div>

          <div className="section badges-section">
            <div className="section-header">
              <div className="icon-circle">🏆</div>
              <h3>CERTIFICATIONS & BADGES</h3>
            </div>
            <div className="badges-grid">
              <img src="/badges/IBM-Generative-and-Agentic-AI-Developer---Intermediate.png" alt="IBM Generative and Agentic AI Developer" className="badge-img" />
              <img src="/badges/Architectural-Thinking.png" alt="Architectural Thinking" className="badge-img" />
              <img src="/badges/Travel-Transportation-Industry-Gold.png" alt="Travel Transportation Industry Gold" className="badge-img" />
              <img src="/badges/Travel-Transportation-Industry-Silver.png" alt="Travel Transportation Industry Silver" className="badge-img" />
              <img src="/badges/Cloud_Platform_Application_Developer_v1.png" alt="Cloud Platform Application Developer" className="badge-img" />
              <img src="/badges/Blockchain_Essentials.png" alt="Blockchain Essentials" className="badge-img" />
              <img src="/badges/Watson_Knowledge_Studio.png" alt="Watson Knowledge Studio" className="badge-img" />
              <img src="/badges/IBM-Growth-Behaviors.png" alt="IBM Growth Behaviors" className="badge-img" />
              <img src="/badges/IBM-Mentor__282_29.png" alt="IBM Mentor" className="badge-img" />
              <img src="/badges/Intellectual-capital-property.png" alt="Intellectual Capital Property" className="badge-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Professional Engagements */}
      <div className="engagements-panel">
        <div className="section timeline-section">
          <div className="section-header">
            <div className="icon-circle">🚀</div>
            <h3>PROFESSIONAL ENGAGEMENTS</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">Nov 2019 – Present</div>
              <div className="timeline-content">
                <strong>Qatar National Port (MWANINA)</strong>
                <p>Technical Team Leader | Application Owner | Solution Design Lead</p>
                <p className="timeline-description">Lead technical delivery, application ownership, solution design, and architecture for national-scale Port Community System supporting Qatar's maritime trade ecosystem.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <strong>MCIT Qatar (Logistics Digital Platform RFP)</strong>
                <p>Application Architect • Qatar</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025 – 2026</div>
              <div className="timeline-content">
                <strong>PCS/PMIS Modernization (Mono to Micro)</strong>
                <p>Application Architect • Qatar</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <strong>Qatar Petroleum (QT)</strong>
                <p>Application Architect (Solutioning) • Qatar</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <strong>Saudi Ports</strong>
                <p>Application Architect (Solutioning) • Saudi Arabia</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Nov 2017 – Nov 2019</div>
              <div className="timeline-content">
                <strong>King Abdullah Port (KAP)</strong>
                <p>Technical Team Leader | Senior Application Developer</p>
                <p className="timeline-description">IBM's primary client-side technical focal point for Saudi Arabia's fastest-growing commercial port, leading technical engagements and enterprise software solutions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Jan 2016 – Nov 2017</div>
              <div className="timeline-content">
                <strong>Egyptian National Post Office</strong>
                <p>Senior Application Developer</p>
                <p className="timeline-description">Enterprise Banking Transformation Program - Developed banking services supporting accounts, remittances, deposits, and financial transactions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Nov 2011 – Jun 2015</div>
              <div className="timeline-content">
                <strong>Blue Horizon Configurator</strong>
                <p>Senior Application Developer | Team Leader</p>
                <p className="timeline-description">Enterprise configuration platform supporting IBM global operations - Led Level 3 support, development activities, and team coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Made with Bob
