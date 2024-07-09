const NewsletterForm = () => {
  return (
    <form className="w-full max-w-md lg:col-span-1">
      <div className="flex">
        <label htmlFor="email-address" className="sr-only">Email address</label>
        <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 px-3.5 text-lg py-2 text-brandDarkGreen shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" placeholder="Enter your email" />
        <button type="submit" className="flex-none rounded-md bg-brandLightGreen px-3.5 py-2.5 text-lg font-semibol shadow-sm hover:bg-brandDarkGreen hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Subscribe</button>
      </div>
    </form>
  );
};

export default NewsletterForm;
