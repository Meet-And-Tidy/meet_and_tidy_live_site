const NewsletterForm = () => {
  return (
  <>
    <div className="newsletter-form">
      <label>Email address</label>
      <input placeholder="Enter your email" />
      <button >Subscribe</button>
    </div>
    <p>We care about your data. Read our <a href="index.html#">privacy&nbsp;policy</a>.</p>
    </>
  );
};

export default NewsletterForm;
