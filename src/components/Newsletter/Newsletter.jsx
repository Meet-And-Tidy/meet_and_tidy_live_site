import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return (
    <div className="p-12 flex flex-col justify-center items-center gap-12 space-x-10 lg:flex-row">
      <h2 className="text-5xl sm:block lg:inline xl:block text-center">
        JOIN OUR COMMUNITY IN TIDYING OUR PLANET
      </h2>
      <NewsletterForm />
    </div>
  );
};

export default Newsletter;
