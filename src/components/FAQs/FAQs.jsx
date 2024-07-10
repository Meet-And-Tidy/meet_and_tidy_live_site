const FAQs = () => {
  return (
    <div className="h-[700px] flex flex-col justify-center items-center  bg-brandGreen">
        <h1 className="flex-col text-6xl">Frequently Asked Questions</h1>
        <div className="flex pt-8">
          <img 
            src="https://images.unsplash.com/photo-1617358452668-1a47fde02538?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="beach clean" 
            className="w-[600px] rounded-md"
          />
          <div className="w-[900px] flex-col divide-y text-2xl sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">How can I place an order?</summary>
              <div className="px-4 pb-4">
                <p>You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">How long does shipping take?</summary>
              <div className="px-4 pb-4">
                <p>Shipping times may vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days, and delivery can take 3-7 business days within India. You will receive a tracking notification once your order is shipped.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">Can I return a product if Im not satisfied?</summary>
              <div className="px-4 pb-4">
                <p>Yes, we have a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of receiving the product. Please contact our customer support at <a href="faqs.html" className="underline">example@gmail.com</a> for assistance.</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">What are your terms and conditions?</summary>
              <div className="px-4 pb-4">
                <p>You can find our detailed terms and conditions by visiting our 
                  <a href="faqs.html" className="underline">Terms of Service</a> 
                  page on our website. It includes information about our policies, user guidelines, and more.</p>
              </div>
            </details>
          </div>
        </div>
    </div>
  );
};

export default FAQs;
