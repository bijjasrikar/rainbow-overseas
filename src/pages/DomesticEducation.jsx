import React from 'react';
import { FaUniversity, FaUserGraduate, FaClipboardList, FaFileAlt, FaMoneyBillWave } from 'react-icons/fa';
import './ServicePage.css';

const services = [
  { icon: <FaUserGraduate />, title: 'Free Counselling', desc: 'Personalised one-on-one counselling sessions to identify your ideal course and university in India based on your profile.' },
  { icon: <FaClipboardList />, title: 'University Shortlisting', desc: 'Expert-backed shortlisting of domestic universities matched to your academic profile, budget, and career goals.' },
  { icon: <FaFileAlt />, title: 'Application Assistance', desc: 'Complete assistance in filling and submitting university applications with 100% accuracy.' },
  { icon: <FaMoneyBillWave />, title: 'Scholarship & Loan Guidance', desc: 'Identify and apply for merit scholarships and education loans to reduce your financial burden.' },
  { icon: <FaUniversity />, title: 'Entrance Exam Support', desc: 'Guidance and preparation tips for various national and state-level entrance examinations.' },
];

function DomesticEducation() {

  return (
    <div className="service-page">
      <div className="page-hero" style={{backgroundImage: "linear-gradient(rgba(10,15,35,0.82),rgba(10,15,35,0.88)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="container">
          <p className="section-tag" style={{color:'rgba(255,255,255,0.6)'}}>DOMESTIC EDUCATION</p>
          <h1>Domestic Education with <span className="text-gradient">Rainbow Overseas</span></h1>
          <p>Complete guidance for university and college admissions across India, ensuring you find the best fit for your career aspirations.</p>
          <div className="hero-badges">
            <span>Top Indian Universities</span>
            <span>Entrance Exam Guidance</span>
            <span>Scholarship Support</span>
          </div>
        </div>
      </div>

      <section className="section bg-gray">
        <div className="container">
          <p className="section-tag center">OUR EDUCATION OFFERING</p>
          <h2 className="section-title">Domestic Education Services</h2>
          <div className="service-cards-grid">
            {services.map(s => (
              <div key={s.title} className="svc-card">
                <div className="svc-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section enquiry-section">
        <div className="container">
          <div className="enquiry-inner">
            <div className="enquiry-text">
              <p className="section-tag">TALK TO AN EXPERT</p>
              <h2>Get Free Counselling Today</h2>
              <p>Fill the form and our expert counsellors will reach out to you within 24 hours. No charges, no commitments.</p>
              <div className="contact-callout">
                <a href="tel:+918555989544">📞 8555989544</a>
                <a href="mailto:bijjasrikar25@gmail.com">✉️ bijjasrikar25@gmail.com</a>
              </div>
            </div>
            <div className="enquiry-form-wrapper" style={{width: '100%', background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeLhjSSKdHsCrN6jl8Uelbu3aytswLSsfZAPaXqitBnW0EA-A/viewform?embedded=true" width="100%" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DomesticEducation;
