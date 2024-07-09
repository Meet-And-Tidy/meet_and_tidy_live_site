const FAQs = () => {
  return (
    <div className="h-[600px] flex bg-brandGreen">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Frequently Asked Questions</h1>
      <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
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
  );
};

export default FAQs;
