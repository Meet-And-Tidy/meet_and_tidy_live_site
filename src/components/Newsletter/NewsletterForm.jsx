import { SecondaryButton } from '../Button/Button';

const NewsletterForm = () => {
  return (
    <form className="w-full max-w-md lg:col-span-1">
      <div className="flex">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 px-3.5 text-lg py-2 text-brandDarkGreen shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <SecondaryButton
          type="submit"
          className="p-3 rounded-md"
          onClick={() => alert('TODO: signup')}
        >
          Subscribe
        </SecondaryButton>
      </div>
    </form>
  );
};

export default NewsletterForm;
