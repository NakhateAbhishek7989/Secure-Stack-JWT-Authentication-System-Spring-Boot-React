import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupPage() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!formData.termsAccepted) {
      setError('Please accept the terms and conditions');
      setIsLoading(false);
      return;
    }

    setSuccess(true);
    setIsLoading(false);

    // Redirect to login after 2 seconds
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };


  const SubmitUser = async() => {

    try{
        const response = await fetch('http://localhost:8080/api/auth/register',{
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        
    }
    catch(error)
    {
      console.log(error);
    }
    
  }

  if (success) {
    return (
      <div className="auth-container">
        <div className="auth-card fade-in text-center">
          <div className="mb-4">
            <div className="mx-auto rounded-circle bg-success text-white d-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
              <i className="bi bi-check-lg fs-1"></i>
            </div>
            <h3 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Account Created!</h3>
            <p className="text-muted mb-4">Your account has been successfully created. Redirecting to login...</p>
            <Link to="/login" className="btn btn-primary-modern">
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card fade-in">
        <div className="auth-header">
           <Link to="/" className="text-decoration-none fw-bold" style={{ color: '#6366f1' }}>
            <div className="auth-logo">
              <i className="bi bi-lightning-charge-fill"></i>
            </div>
          </Link>
          <h3 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Create account</h3>
          <p className="text-muted">Start your 14-day free trial today</p>
        </div>

        {error && (
          <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            <div>{error}</div>
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="col-md-12 row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-medium">Full name</label>
                <input
                  type="text"
                  className="form-control modern-input"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-medium">Email address</label>
                <input
                  type="email"
                  className="form-control modern-input"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
          </div>
          

          
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-medium">Password</label>
            <input
              type="password"
              className="form-control modern-input"
              id="password"
              name="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
            <small className="text-muted">Must be at least 6 characters</small>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-medium">Confirm password</label>
            <input
              type="password"
              className="form-control modern-input"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          <div className="mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the{' '}
                <Link to="#" className="text-decoration-none" style={{ color: '#6366f1' }}>Terms of Service</Link>
                {' '}and{' '}
                <Link to="#" className="text-decoration-none" style={{ color: '#6366f1' }}>Privacy Policy</Link>
              </label>
            </div>
          </div>

          <button
            type="submit" onClick={SubmitUser}
            className="btn btn-primary-modern w-100 mb-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Creating account...
              </>
            ) : (
              <>
                Create Account <i className="bi bi-arrow-right ms-2"></i>
              </>
            )}
          </button>
        </form>

      
        <div className="text-center mt-2 pt-2 border-top">
          <p className="mb-0">
            Already have an account?{' '}
            <Link to="/login" className="text-decoration-none fw-bold" style={{ color: '#6366f1' }}>
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-3 p-3 rounded" style={{ background: 'rgba(99, 102, 241, 0.05)' }}>
          <div className="d-flex align-items-start gap-2">
            <i className="bi bi-info-circle-fill text-primary mt-1"></i>
            <small className="text-muted">
              <strong>Free 14-day trial:</strong> No credit card required. Cancel anytime.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}