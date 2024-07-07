const Aims = () => {
  return (
  <div className="w-full mt-32 h-[600px] bg-brandGreen">
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
      <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
          <p className="text-xl leading-8 text-gray-600">The app aims to shift perceptions and inspire action, urging people to rethink their approach to littering for the betterment of our planet.</p>
          <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
            <p>Littering is not just a nuisance but a serious threat to our ecosystem, economy, and human health. Despite the fact that dropping litter is illegal in Britain, it remains a prevalent issue.
              While dismissing littering as merely anti-social or lazy behaviour is tempting, many underestimate its profound negative impact.</p>
          </div>
        </div>
        <div className="lg:flex lg:flex-auto lg:justify-center">
          <dl className="w-64 space-y-8 xl:w-80">
            <div className="flex flex-col-reverse gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">44 million</dd>
            </div>
            <div className="flex flex-col-reverse gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Assets under holding</dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">$119 trillion</dd>
            </div>
            <div className="flex flex-col-reverse gap-y-4">
              <dt className="text-base leading-7 text-gray-600">New users annually</dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">46,000</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Aims;