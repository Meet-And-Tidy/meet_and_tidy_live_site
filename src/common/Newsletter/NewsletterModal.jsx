import './Newsletter.scss';
import NewsletterForm from './NewsletterForm';

const NewsletterModal = () => {
  return (
    <div className="newsletter">
      <h3>Want product news and updates?</h3>
      <h4>Sign up for our newsletter.</h4>
      <NewsletterForm />
    </div>
  );
};

export default NewsletterModal;
