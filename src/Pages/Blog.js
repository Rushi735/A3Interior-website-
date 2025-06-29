import { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "2024 Interior Design Trends You Should Know",
      excerpt: "Discover the top color palettes, materials, and styles dominating interior design this year.",
      category: "trends",
      date: "June 15, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Maximizing Small Spaces: 5 Genius Solutions",
      excerpt: "Transform cramped areas into functional, beautiful spaces with these professional tips.",
      category: "tips",
      date: "May 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "The Psychology of Color in Home Design",
      excerpt: "How different hues affect mood and behavior in residential spaces.",
      category: "psychology",
      date: "May 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Sustainable Materials for Eco-Friendly Homes",
      excerpt: "Beautiful, environmentally conscious alternatives for your next project.",
      category: "sustainability",
      date: "April 22, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="hero-content">
          <h1>Design Insights</h1>
          <p>Expert tips, trends, and inspiration for your spaces</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="blog-container">
        {/* Categories Filter */}
        <div className="category-filters">
          <button 
            className={activeCategory === 'all' ? 'active' : ''}
            onClick={() => setActiveCategory('all')}
          >
            All Articles
          </button>
          <button 
            className={activeCategory === 'trends' ? 'active' : ''}
            onClick={() => setActiveCategory('trends')}
          >
            Trends
          </button>
          <button 
            className={activeCategory === 'tips' ? 'active' : ''}
            onClick={() => setActiveCategory('tips')}
          >
            Design Tips
          </button>
          <button 
            className={activeCategory === 'psychology' ? 'active' : ''}
            onClick={() => setActiveCategory('psychology')}
          >
            Color Psychology
          </button>
          <button 
            className={activeCategory === 'sustainability' ? 'active' : ''}
            onClick={() => setActiveCategory('sustainability')}
          >
            Sustainability
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <span className="category-badge">{post.category}</span>
              </div>
              <div className="card-content">
                <div className="post-meta">
                  <span className="date">{post.date}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <button className="read-more">Read Article</button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="newsletter-cta">
        <div className="cta-content">
          <h2>Get Design Insights Directly</h2>
          <p>Subscribe to our monthly newsletter for exclusive content</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;