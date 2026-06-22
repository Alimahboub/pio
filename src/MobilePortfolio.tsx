import React from 'react';
import './MobilePortfolio.css';
import { QRCodeSVG } from 'qrcode.react';

function MobilePortfolio() {
  return (
    <div className="mobile-container">
      {/* Profile Section */}
      <div className="mobile-profile">
        <img src={`${process.env.PUBLIC_URL}/ali-face.jpg`} alt="Aly Mahboub" className="mobile-profile-photo" />
        <h1 className="mobile-name">ALY TAHA ALY MAHBOUB</h1>
        <h2 className="mobile-role">APPLICATION ARCHITECT</h2>
        <p className="mobile-subtitle">Senior Application Developer</p>
      </div>

      {/* Summary */}
      <div className="mobile-section">
        <h3 className="mobile-section-title">💼 PROFESSIONAL SUMMARY</h3>
        <p className="mobile-text">
          14+ Years Enterprise Software Delivery | Transportation & Maritime Industry Specialist | IBM Generative & Agentic AI Developer
        </p>
        <div className="mobile-badge">Full Australian Work Rights | No Sponsorship Required | Open to Relocation</div>
      </div>

      {/* Contact Information */}
      <div className="mobile-section">
        <h3 className="mobile-section-title">📞 CONTACT</h3>
        <div className="mobile-contact-item">🇪🇬 Egyptian Mobile: +20 1015251425</div>
        <div className="mobile-contact-item">🇶🇦 Qatar Mobile: +974 3373 2769</div>
        <div className="mobile-contact-item">💼 Business: AMAHBOUB@eg.ibm.com</div>
        <div className="mobile-contact-item">📧 Personal: ali.mahboub@gmail.com</div>
        <a href="https://www.linkedin.com/in/ali-mahboub/" target="_blank" rel="noopener noreferrer" className="mobile-link">
          🔗 LinkedIn: linkedin.com/in/ali-mahboub
        </a>
        <a href="https://www.credly.com/users/ali-taha-mahboub" target="_blank" rel="noopener noreferrer" className="mobile-link">
          🏆 Credly: credly.com/users/ali-taha-mahboub
        </a>
      </div>

      {/* WhatsApp QR */}
      <div className="mobile-section mobile-qr-section">
        <h3 className="mobile-section-title">📱 SCAN TO WHATSAPP</h3>
        <div className="mobile-qr">
          <QRCodeSVG
            value="https://wa.me/201015251425"
            size={150}
            level="H"
            includeMargin={true}
          />
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mobile-section">
        <h3 className="mobile-section-title">⚡ TECHNICAL EXCELLENCE</h3>
        
        <div className="mobile-skill-category">
          <h4>🏗️ Architecture & Strategy</h4>
          <div className="mobile-tags">
            <span>Application & Solution Design</span>
            <span>Monolith-to-Microservices</span>
            <span>Tech Roadmaps & Governance</span>
            <span>Maritime & Logistics Domain</span>
          </div>
        </div>

        <div className="mobile-skill-category">
          <h4>💻 Software Engineering</h4>
          <div className="mobile-tags">
            <span>Java Enterprise Edition / J2EE</span>
            <span>Spring Boot & Hibernate</span>
            <span>GenAI & Agentic Development</span>
          </div>
        </div>

        <div className="mobile-skill-category">
          <h4>🔗 Integration & Middleware</h4>
          <div className="mobile-tags">
            <span>IBM App Connect Enterprise (ACE)</span>
            <span>IBM MQ Message-Based Systems</span>
            <span>SOA / Event-Driven Architectures</span>
            <span>RESTful API Design Patterns</span>
          </div>
        </div>

        <div className="mobile-skill-category">
          <h4>☁️ Cloud, Data & DevOps</h4>
          <div className="mobile-tags">
            <span>IBM Cloud & Red Hat OpenShift</span>
            <span>CI/CD Pipelines (Jenkins, Maven, RTC)</span>
            <span>Oracle & DB2 Databases</span>
            <span>GitHub & RTC</span>
          </div>
        </div>

        <div className="mobile-skill-category">
          <h4>🤖 AI-Enabled Solutions</h4>
          <div className="mobile-tags">
            <span>IBM Generative & Agentic AI</span>
            <span>AI-Assisted Modernization</span>
            <span>AI-Augmented Development</span>
            <span>AI Code Refactoring</span>
          </div>
        </div>
      </div>

      {/* Industry Domains */}
      <div className="mobile-section">
        <h3 className="mobile-section-title">🌐 INDUSTRY DOMAINS</h3>
        <div className="mobile-domain-card">🚢 Maritime Logistics & Port Operations</div>
        <div className="mobile-domain-card">🚚 Travel & Transportation</div>
        <div className="mobile-domain-card">🏛️ Government & Public Sector</div>
        <div className="mobile-domain-card">🏦 Enterprise Banking & Financial Services</div>
      </div>

      {/* Certifications */}
      <div className="mobile-section">
        <h3 className="mobile-section-title">🏆 CERTIFICATIONS & BADGES</h3>
        <div className="mobile-badges">
          <img src={`${process.env.PUBLIC_URL}/badges/IBM-Generative-and-Agentic-AI-Developer---Intermediate.png`} alt="IBM Generative and Agentic AI Developer" className="mobile-badge-img" />
          <img src={`${process.env.PUBLIC_URL}/badges/Architectural-Thinking.png`} alt="Architectural Thinking" className="mobile-badge-img" />
          <img src={`${process.env.PUBLIC_URL}/badges/Travel-Transportation-Industry-Gold.png`} alt="Travel Transportation Industry Gold" className="mobile-badge-img" />
          <img src={`${process.env.PUBLIC_URL}/badges/Travel-Transportation-Industry-Silver.png`} alt="Travel Transportation Industry Silver" className="mobile-badge-img" />
          <img src={`${process.env.PUBLIC_URL}/badges/Cloud_Platform_Application_Developer_v1.png`} alt="Cloud Platform Application Developer" className="mobile-badge-img" />
          <img src={`${process.env.PUBLIC_URL}/badges/Blockchain_Essentials.png`} alt="Blockchain Essentials" className="mobile-badge-img" />
          <img src={`${process.env.PUBLIC_URL}/badges/Watson_Knowledge_Studio.png`} alt="Watson Knowledge Studio" className="mobile-badge-img" />
          <img src={`${process.env.PUBLIC_URL}/badges/IBM-Growth-Behaviors.png`} alt="IBM Growth Behaviors" className="mobile-badge-img" />
          <img src={`${process.env.PUBLIC_URL}/badges/IBM-Mentor__282_29.png`} alt="IBM Mentor" className="mobile-badge-img" />
          <img src={`${process.env.PUBLIC_URL}/badges/Intellectual-capital-property.png`} alt="Intellectual Capital Property" className="mobile-badge-img" />
        </div>
      </div>

      {/* Professional Engagements */}
      <div className="mobile-section">
        <h3 className="mobile-section-title">🚀 PROFESSIONAL ENGAGEMENTS</h3>
        
        <div className="mobile-timeline-item">
          <div className="mobile-timeline-date">Nov 2019 – Present</div>
          <div className="mobile-timeline-title">Qatar National Port (MWANINA)</div>
          <div className="mobile-timeline-role">Application Architect | Technical Team Leader</div>
          <p className="mobile-timeline-desc">Lead technical delivery, solution design, and architecture for national-scale Port Community System (PCS).</p>
          <div className="mobile-tags">
            <span>IBM Cloud</span>
            <span>Spring Boot</span>
            <span>React JS</span>
            <span>WatsonX AI</span>
          </div>
        </div>

        <div className="mobile-timeline-item">
          <div className="mobile-timeline-date">Mar 2026 – Jun 2026</div>
          <div className="mobile-timeline-title">MCIT Qatar (Logistics Digital Platform RFP)</div>
          <div className="mobile-timeline-role">Application Architect</div>
          <p className="mobile-timeline-desc">Architecture design, prototype development, and solutioning matrix for national logistics platform.</p>
          <div className="mobile-tags">
            <span>React JS</span>
            <span>IBM Cloud</span>
            <span>WatsonX AI</span>
            <span>Visio</span>
          </div>
        </div>

        <div className="mobile-timeline-item">
          <div className="mobile-timeline-date">2025 – 2026</div>
          <div className="mobile-timeline-title">PCS/PMIS Modernization</div>
          <div className="mobile-timeline-role">Application Architect</div>
          <p className="mobile-timeline-desc">Modernized monolithic J2EE/JSF application to microservices architecture with Spring Boot and React JS on IBM Cloud.</p>
          <div className="mobile-tags">
            <span>Spring Boot</span>
            <span>React JS</span>
            <span>IBM Cloud</span>
            <span>WatsonX AI</span>
          </div>
        </div>

        <div className="mobile-timeline-item">
          <div className="mobile-timeline-date">Jan 2024 – Apr 2024</div>
          <div className="mobile-timeline-title">Qatar Petroleum (QT)</div>
          <div className="mobile-timeline-role">Application Architect</div>
          <p className="mobile-timeline-desc">Enterprise solution design and technical architecture for petroleum sector digital transformation.</p>
          <div className="mobile-tags">
            <span>React JS</span>
            <span>IBM Cloud</span>
            <span>WatsonX AI</span>
          </div>
        </div>

        <div className="mobile-timeline-item">
          <div className="mobile-timeline-date">Feb 2019 – Jun 2019</div>
          <div className="mobile-timeline-title">Saudi Ports RFP</div>
          <div className="mobile-timeline-role">Application Architect</div>
          <p className="mobile-timeline-desc">RFP response with comprehensive architecture design and technical proposal for national ports system.</p>
          <div className="mobile-tags">
            <span>React JS</span>
            <span>IBM Cloud</span>
            <span>Visio</span>
          </div>
        </div>

        <div className="mobile-timeline-item">
          <div className="mobile-timeline-date">Nov 2017 – Nov 2019</div>
          <div className="mobile-timeline-title">King Abdullah Port</div>
          <div className="mobile-timeline-role">Technical Team Leader | Senior Developer</div>
          <p className="mobile-timeline-desc">Led technical engagements and enterprise solutions for Saudi Arabia's fastest-growing commercial port.</p>
          <div className="mobile-tags">
            <span>RTC</span>
            <span>WAS</span>
            <span>IIB</span>
            <span>J2EE</span>
            <span>DB2</span>
          </div>
        </div>

        <div className="mobile-timeline-item">
          <div className="mobile-timeline-date">Jan 2016 – Nov 2017</div>
          <div className="mobile-timeline-title">Egyptian National Post Office Banking</div>
          <div className="mobile-timeline-role">Senior Application Developer</div>
          <p className="mobile-timeline-desc">Developed banking services for accounts, remittances, and financial transactions.</p>
          <div className="mobile-tags">
            <span>Spring</span>
            <span>Oracle Forms</span>
            <span>JSF</span>
            <span>Oracle DB</span>
          </div>
        </div>

        <div className="mobile-timeline-item">
          <div className="mobile-timeline-date">Jan 2011 – Jan 2016</div>
          <div className="mobile-timeline-title">Egyptian Ministry of Finance</div>
          <div className="mobile-timeline-role">Application Developer</div>
          <p className="mobile-timeline-desc">Developed government financial systems and cross-ministry integration solutions.</p>
          <div className="mobile-tags">
            <span>J2EE</span>
            <span>Oracle</span>
            <span>SOA</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mobile-footer">
        <a href="/" className="mobile-desktop-link">View Desktop Version</a>
      </div>
    </div>
  );
}

export default MobilePortfolio;

// Made with Bob
