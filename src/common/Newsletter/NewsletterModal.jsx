import './Newsletter.scss';
import NewsletterForm from './NewsletterForm';

const NewsletterModal = () => {
  return (
    <div className="newsletter">
      <h3>Want product news and updates? Sign up for our newsletter.</h3>
      <NewsletterForm />
    </div>
  );
};

export default NewsletterModal;
