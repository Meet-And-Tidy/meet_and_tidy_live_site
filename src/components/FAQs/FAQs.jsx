import FAQConfig from './config';
export default function FAQs() {
  return (
    <div className="h-[700px] flex flex-col justify-center items-center  bg-brandGreen px-12">
      <h1 className="flex-col text-6xl">Frequently Asked Questions</h1>
      <div className="flex pt-8 flex-col lg:flex-row items-center gap-8">
        <img
          src="https://images.unsplash.com/photo-1617358452668-1a47fde02538?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="beach clean"
          className="w-[600px] rounded-md"
        />
        <div className="w-[100%] flex flex-col divide-y text-2xl divide-gray-700 items-start justify-start">
          {FAQConfig.map(({ title, content }) => (
            <details key={title}>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {title}{' '}
              </summary>
              <div className="px-4 pb-4">
                <p>{content}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
