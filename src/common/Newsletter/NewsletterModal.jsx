import NewsletterForm from './NewsletterForm';

const NewsletterModal = () => {
  return (
    <div className="w-full bg-[#CEFDAC] h-[650px] py-60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>
          <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
        </div>
        <NewsletterForm />
      </div>
    </div>
  );
};

export default NewsletterModal;


