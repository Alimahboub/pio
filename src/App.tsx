import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { QRCodeSVG } from 'qrcode.react';
import MobilePortfolio from './MobilePortfolio';

function DesktopPortfolio() {
  useEffect(() => {
    document.body.classList.add('desktop-view');
    return () => {
      document.body.classList.remove('desktop-view');
    };
  }, []);

  return (
    <div className="infographic-container">
      {/* Fixed Left Side - Profile Photo and Contact */}
      <div className="profile-photo-container">
        <div className="profile-card">
          <img src={`${process.env.PUBLIC_URL}/ali-face.jpg`} alt="Aly Mahboub" className="profile-photo-round" />
        </div>
        <div className="contact-card">
          <h3 className="contact-title">CONTACT INFORMATION</h3>
          <div className="contact-items">
            <div className="contact-tag">🇪🇬 Egyptian Mobile: +20 1015251425</div>
            <div className="contact-tag">🇶🇦 Qatar Mobile: +974 3373 2769</div>
            <div className="contact-tag">💼 Business Email: AMAHBOUB@eg.ibm.com</div>
            <div className="contact-tag">📧 Personal Email: ali.mahboub@gmail.com</div>
            <a href="https://www.linkedin.com/in/ali-mahboub/" target="_blank" rel="noopener noreferrer" className="contact-tag contact-tag-link">
              <svg className="linkedin-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn: linkedin.com/in/ali-mahboub
            </a>
            <a href="https://www.credly.com/users/ali-taha-mahboub" target="_blank" rel="noopener noreferrer" className="contact-tag contact-tag-link">🏆 Credly: credly.com/users/ali-taha-mahboub</a>
          </div>
        </div>
        <div className="qr-card">
          <h3 className="qr-title">SCAN TO WHATSAPP</h3>
          <div className="qr-code-container">
            <QRCodeSVG
              value="https://wa.me/201015251425"
              size={120}
              level="H"
              includeMargin={true}
            />
          </div>
        </div>
      </div>

      {/* Middle - Header and Skills */}
      <div className="content-panel">
        {/* Header */}
        <div className="header-section">
          <h1 className="name-title">ALY TAHA ALY MAHBOUB</h1>
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
            <div className="domain-cards">
              <div className="domain-card">🚢 Maritime Logistics & Port Operations</div>
              <div className="domain-card">🚚 Travel & Transportation</div>
              <div className="domain-card">🏛️ Government & Public Sector</div>
              <div className="domain-card">🏦 Enterprise Banking & Financial Services</div>
            </div>
          </div>

          <div className="section badges-section">
            <div className="section-header">
              <div className="icon-circle">🏆</div>
              <h3>CERTIFICATIONS & BADGES</h3>
            </div>
            <div className="badges-grid">
              <img src={`${process.env.PUBLIC_URL}/badges/IBM-Generative-and-Agentic-AI-Developer---Intermediate.png`} alt="IBM Generative and Agentic AI Developer" className="badge-img" />
              <img src={`${process.env.PUBLIC_URL}/badges/Architectural-Thinking.png`} alt="Architectural Thinking" className="badge-img" />
              <img src={`${process.env.PUBLIC_URL}/badges/Travel-Transportation-Industry-Gold.png`} alt="Travel Transportation Industry Gold" className="badge-img" />
              <img src={`${process.env.PUBLIC_URL}/badges/Travel-Transportation-Industry-Silver.png`} alt="Travel Transportation Industry Silver" className="badge-img" />
              <img src={`${process.env.PUBLIC_URL}/badges/Cloud_Platform_Application_Developer_v1.png`} alt="Cloud Platform Application Developer" className="badge-img" />
              <img src={`${process.env.PUBLIC_URL}/badges/Blockchain_Essentials.png`} alt="Blockchain Essentials" className="badge-img" />
              <img src={`${process.env.PUBLIC_URL}/badges/Watson_Knowledge_Studio.png`} alt="Watson Knowledge Studio" className="badge-img" />
              <img src={`${process.env.PUBLIC_URL}/badges/IBM-Growth-Behaviors.png`} alt="IBM Growth Behaviors" className="badge-img" />
              <img src={`${process.env.PUBLIC_URL}/badges/IBM-Mentor__282_29.png`} alt="IBM Mentor" className="badge-img" />
              <img src={`${process.env.PUBLIC_URL}/badges/Intellectual-capital-property.png`} alt="Intellectual Capital Property" className="badge-img" />
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
                <p>Application Architect | Technical Team Leader</p>
                <p className="timeline-description">Lead technical delivery, solution design, and architecture for national-scale Port Community System (PCS).</p>
                <div className="tech-tags">
                  <span>IBM Cloud</span>
                  <span>Spring Boot</span>
                  <span>React JS</span>
                  <span>WatsonX AI</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Mar 2026 – Jun 2026</div>
              <div className="timeline-content">
                <strong>MCIT Qatar (Logistics Digital Platform RFP)</strong>
                <p>Application Architect</p>
                <p className="timeline-description">Architecture design, prototype development, and solutioning matrix for national logistics platform.</p>
                <div className="tech-tags">
                  <span>React JS</span>
                  <span>IBM Cloud</span>
                  <span>WatsonX AI</span>
                  <span>Visio</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025 – 2026</div>
              <div className="timeline-content">
                <strong>PCS/PMIS Modernization</strong>
                <p>Application Architect</p>
                <p className="timeline-description">Modernized monolithic J2EE/JSF application to microservices architecture with Spring Boot and React JS on IBM Cloud.</p>
                <div className="tech-tags">
                  <span>Spring Boot</span>
                  <span>React JS</span>
                  <span>IBM Cloud</span>
                  <span>WatsonX AI</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Jan 2024 – Apr 2024</div>
              <div className="timeline-content">
                <strong>Qatar Petroleum (QT)</strong>
                <p>Application Architect</p>
                <p className="timeline-description">Enterprise solution design and technical architecture for petroleum sector digital transformation.</p>
                <div className="tech-tags">
                  <span>React JS</span>
                  <span>IBM Cloud</span>
                  <span>WatsonX AI</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Feb 2019 – Jun 2019</div>
              <div className="timeline-content">
                <strong>Saudi Ports RFP</strong>
                <p>Application Architect</p>
                <p className="timeline-description">RFP response with comprehensive architecture design and technical proposal for national ports system.</p>
                <div className="tech-tags">
                  <span>React JS</span>
                  <span>IBM Cloud</span>
                  <span>Visio</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Nov 2017 – Nov 2019</div>
              <div className="timeline-content">
                <strong>King Abdullah Port</strong>
                <p>Technical Team Leader | Senior Developer</p>
                <p className="timeline-description">Led technical engagements and enterprise solutions for Saudi Arabia's fastest-growing commercial port.</p>
                <div className="tech-tags">
                  <span>RTC</span>
                  <span>WAS</span>
                  <span>IIB</span>
                  <span>J2EE</span>
                  <span>DB2</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Jan 2016 – Nov 2017</div>
              <div className="timeline-content">
                <strong>Egyptian National Post Office Banking</strong>
                <p>Senior Application Developer</p>
                <p className="timeline-description">Developed banking services for accounts, remittances, and financial transactions.</p>
                <div className="tech-tags">
                  <span>Spring</span>
                  <span>Oracle Forms</span>
                  <span>JSF</span>
                  <span>Oracle DB</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Jan 2011 – Jan 2016</div>
              <div className="timeline-content">
                <strong>Egyptian Ministry of Finance</strong>
                <p>Application Developer</p>
                <p className="timeline-description">Developed government financial systems and cross-ministry integration solutions.</p>
                <div className="tech-tags">
                  <span>J2EE</span>
                  <span>Oracle</span>
                  <span>SOA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile && window.location.pathname === '/') {
      navigate('/m');
    }
  }, [navigate]);

  return <DesktopPortfolio />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MobileRedirect />} />
        <Route path="/m" element={<MobilePortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;

// Made with Bob
