import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => 
  {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    // navigate('/');


    try{
      const response = await fetch("http://localhost:8080/api/auth/login",{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email,password})
      });

      const data = await response.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("role",data.user.role);
      localStorage.setItem("name",data.user.name);
      localStorage.setItem("email",data.user.email);
      
      if(data.user.role === "ADMIN")
      {
        window.location.href = "/admin";
      }
      if(data.user.role === "USER")
      {
        window.location.href = "/";
      }
     

    }
    catch(error)
    {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card fade-in">
        <div className="auth-header">
          <Link to="/">
            <div className="auth-logo">
                <i className="bi bi-lightning-charge-fill"></i>
            </div>
          </Link>
          <h3 className="fw-bold mb-2" style={{ color: '#1e293b' }}>Welcome back</h3>
          <p className="text-muted">Sign in to your account to continue</p>
        </div>

        {error && (
          <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            <div>{error}</div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-medium">Email address</label>
            <input
              type="email"
              className="form-control modern-input"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-medium">Password</label>
            <div className="position-relative">
              <input
                type="password"
                className="form-control modern-input pe-5"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
              />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="#" className="text-decoration-none" style={{ color: '#6366f1' }}>Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary-modern w-100 mb-3"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Signing in...
              </>
            ) : (
              <>
                Sign In <i className="bi bi-arrow-right ms-2"></i>
              </>
            )}
          </button>
        </form>

        

        <div className="text-center mt-4 pt-3 border-top">
          <p className="mb-0">
            Don't have an account?{' '}
            <Link to="/signup" className="text-decoration-none fw-bold" style={{ color: '#6366f1' }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}