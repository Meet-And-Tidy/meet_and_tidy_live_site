import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return (
    <div className="py-12 flex justify-center space-x-10">
      <h2 className="text-5xl sm:block lg:inline xl:block">JOIN OUR COMMUNITY IN TIDYING OUR PLANET</h2>
      <NewsletterForm />
    </div>
  );
};

export default Newsletter;