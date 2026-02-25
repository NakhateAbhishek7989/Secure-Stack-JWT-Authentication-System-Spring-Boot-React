import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Package2} from "lucide-react";

export default function LandingPage() {

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  const handleLogout = async() => {
    
    const response = await fetch("http://localhost:8080/api/auth/logout",{
        method: "POST",
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({token})
    });

    if(response.ok)
    {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("role");

      window.location.href = "/login";

    }
  } 

  return (
    <div className="fade-in">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-modern py-3 sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <div className="d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '10px' }}>
              <i className="bi bi-lightning-charge-fill text-white"></i>
            </div>
            <span className="fw-bold" style={{ fontSize: '1.25rem', color: '#1e293b' }}>ModernApp</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              <li className="nav-item">
                <Link className="nav-link nav-link-modern" to="#features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-modern" to="#pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-modern" to="#testimonials">Testimonials</Link>
              </li>

              { name ?(
                  <>
                    <div className="user-section">
                      <img
                        className="avatar"
                        src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"
                        alt="User avatar"
                      />
                      <div className="user-info">
                        <p className="user-name">{name}</p>
                        <p className="user-role">{role}</p>
                      </div>
                    </div>

                    <div className="sidebar-footer">
                      <button className="logout-btn" onClick={handleLogout}>
                        <LogOut size={18} style={{ marginRight: "12px" }} />
                        Logout
                      </button>
                    </div>
                    
                  </>
              ):
              (
                  <li className="nav-item ms-lg-3">
                    <Link className="btn btn-outline-primary" to="/login">Sign In</Link>
                  </li>
              )}

             { role === "ADMIN" && 
             (
                <li className="nav-item ms-lg-3">
                  <Link className="btn btn-outline-primary d-flex align-items-center" to="/admin"><Package2 size={22} className="m-1" color="#4f46e5" />  AdminPanel</Link>
                </li> 
             )}
                

            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-5 py-lg-7">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center py-5 py-lg-7">
            <div className="col-lg-8">
              <span className="modern-badge mb-4 d-inline-block">🚀 Launching v2.0</span>
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#1e293b', lineHeight: '1.2' }}>
                Build Better Software<br />
                <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Faster Than Ever</span>
              </h1>
              <p className="lead mb-5" style={{ color: '#64748b', fontSize: '1.25rem' }}>
                ModernApp helps teams collaborate, build, and ship products faster with our powerful platform designed for modern development workflows.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/signup" className="btn btn-primary-modern btn-lg px-5">
                  Start Free Trial
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link to="#features" className="btn btn-secondary-modern btn-lg px-5">
                  <i className="bi bi-play-circle me-2"></i>
                  Watch Demo
                </Link>
              </div>
              <p className="mt-4 text-muted">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-number">10K+</div>
                <div className="text-muted">Active Users</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-number">99.9%</div>
                <div className="text-muted">Uptime</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-number">50M+</div>
                <div className="text-muted">API Calls</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-number">4.9/5</div>
                <div className="text-muted">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-7">
        <div className="container mt-5 mb-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1e293b' }}>Everything you need</h2>
            <p className="lead text-muted" style={{ fontSize: '1.125rem' }}>Powerful features to help you build amazing products</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                  <i className="bi bi-rocket-takeoff-fill" style={{ color: '#6366f1' }}></i>
                </div>
                <h5 className="fw-bold mb-2">Lightning Fast</h5>
                <p className="text-muted mb-0">Optimized for speed with instant deployments and blazing fast performance.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon" style={{ background: 'rgba(139, 92, 246, 0.1)' }}>
                  <i className="bi bi-shield-lock-fill" style={{ color: '#8b5cf6' }}></i>
                </div>
                <h5 className="fw-bold mb-2">Secure by Default</h5>
                <p className="text-muted mb-0">Enterprise-grade security with end-to-end encryption and compliance.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon" style={{ background: 'rgba(6, 182, 212, 0.1)' }}>
                  <i className="bi bi-people-fill" style={{ color: '#06b6d4' }}></i>
                </div>
                <h5 className="fw-bold mb-2">Team Collaboration</h5>
                <p className="text-muted mb-0">Work together seamlessly with real-time collaboration tools.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon" style={{ background: 'rgba(236, 72, 153, 0.1)' }}>
                  <i className="bi bi-graph-up-arrow" style={{ color: '#ec4899' }}></i>
                </div>
                <h5 className="fw-bold mb-2">Advanced Analytics</h5>
                <p className="text-muted mb-0">Deep insights and analytics to help you make data-driven decisions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
                  <i className="bi bi-plug-fill" style={{ color: '#22c55e' }}></i>
                </div>
                <h5 className="fw-bold mb-2">Easy Integrations</h5>
                <p className="text-muted mb-0">Connect with 100+ tools you already use and love.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon" style={{ background: 'rgba(251, 191, 36, 0.1)' }}>
                  <i className="bi bi-headset" style={{ color: '#fbbf24' }}></i>
                </div>
                <h5 className="fw-bold mb-2">24/7 Support</h5>
                <p className="text-muted mb-0">Our dedicated support team is always here to help you succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-7 bg-white">
        <div className="container pt-5 pb-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1e293b' }}>Simple, Transparent Pricing</h2>
            <p className="lead text-muted" style={{ fontSize: '1.125rem' }}>Choose the plan that fits your needs</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="modern-card p-4 h-100">
                <h5 className="fw-bold mb-2">Starter</h5>
                <div className="mb-3">
                  <span className="display-5 fw-bold">$0</span>
                  <span className="text-muted">/month</span>
                </div>
                <p className="text-muted mb-4">Perfect for individuals and small projects</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Up to 3 projects</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Basic analytics</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Community support</li>
                </ul>
                <Link to="/signup" className="btn btn-outline-primary w-100">Get Started</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="modern-card p-4 h-100" style={{ border: '2px solid #6366f1', position: 'relative' }}>
                <span className="position-absolute top-0 end-0 m-3 badge" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>Popular</span>
                <h5 className="fw-bold mb-2">Pro</h5>
                <div className="mb-3">
                  <span className="display-5 fw-bold">$29</span>
                  <span className="text-muted">/month</span>
                </div>
                <p className="text-muted mb-4">Best for growing teams and businesses</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Unlimited projects</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Advanced analytics</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Priority support</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Team collaboration</li>
                </ul>
                <Link to="/signup" className="btn btn-primary-modern w-100">Get Started</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="modern-card p-4 h-100">
                <h5 className="fw-bold mb-2">Enterprise</h5>
                <div className="mb-3">
                  <span className="display-5 fw-bold">$99</span>
                  <span className="text-muted">/month</span>
                </div>
                <p className="text-muted mb-4">For large organizations with custom needs</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Everything in Pro</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Custom integrations</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Dedicated support</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>SLA guarantee</li>
                </ul>
                <Link to="/signup" className="btn btn-outline-primary w-100">Contact Sales</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-7">
        <div className="container mt-5 mb-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1e293b' }}>Loved by Developers</h2>
            <p className="lead text-muted" style={{ fontSize: '1.125rem' }}>See what our customers are saying</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card h-100">
                <div className="d-flex mb-3">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="text-muted mb-4">"ModernApp has completely transformed how our team works. The speed and reliability are unmatched!"</p>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{ width: '48px', height: '48px' }}>SJ</div>
                  <div>
                    <div className="fw-bold">Sarah Johnson</div>
                    <div className="text-muted small">CTO at TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card h-100">
                <div className="d-flex mb-3">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="text-muted mb-4">"The best investment we've made. Our productivity has increased by 300% since switching to ModernApp."</p>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center me-3" style={{ width: '48px', height: '48px' }}>MC</div>
                  <div>
                    <div className="fw-bold">Michael Chen</div>
                    <div className="text-muted small">Lead Developer at StartupXYZ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card h-100">
                <div className="d-flex mb-3">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="text-muted mb-4">"Incredible platform with amazing support. The team really cares about their customers' success."</p>
                <div className="d-flex align-items-center">
                  <div className="rounded-circle bg-info text-white d-flex align-items-center justify-content-center me-3" style={{ width: '48px', height: '48px' }}>EP</div>
                  <div>
                    <div className="fw-bold">Emily Parker</div>
                    <div className="text-muted small">Product Manager at ScaleUp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-7 hero-gradient">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1e293b' }}>Ready to get started?</h2>
              <p className="lead mb-4" style={{ color: '#64748b' }}>Join thousands of developers building amazing products with ModernApp</p>
              <Link to="/signup" className="btn btn-primary-modern btn-lg px-5">
                Start Your Free Trial
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-modern">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '8px' }}>
                  <i className="bi bi-lightning-charge-fill text-white"></i>
                </div>
                <span className="fw-bold" style={{ fontSize: '1.125rem', color: '#1e293b' }}>ModernApp</span>
              </div>
              <p className="text-muted">Building the future of software development, one line of code at a time.</p>
            </div>
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Product</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Features</Link></li>
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Pricing</Link></li>
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Integrations</Link></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">About</Link></li>
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Blog</Link></li>
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Careers</Link></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Resources</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Documentation</Link></li>
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">API</Link></li>
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Support</Link></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Legal</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Privacy</Link></li>
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Terms</Link></li>
                <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">Security</Link></li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-muted mb-0">© 2024 ModernApp. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex gap-3 justify-content-md-end">
                <Link to="#" className="text-muted"><i className="bi bi-twitter-x fs-5"></i></Link>
                <Link to="#" className="text-muted"><i className="bi bi-github fs-5"></i></Link>
                <Link to="#" className="text-muted"><i className="bi bi-linkedin fs-5"></i></Link>
                <Link to="#" className="text-muted"><i className="bi bi-discord fs-5"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}