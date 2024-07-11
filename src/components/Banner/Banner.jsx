import { SecondaryButton } from '../Button/Button';

const Jumbotron = () => {
  return (
    <div className="flex flex-col items-center text-center py-32">
      <h2 className="text-white text-9xl pb-12">
        TIDYING THE WORLD
        <br />
        TOGETHER
      </h2>
      <SecondaryButton onClick={() => alert('TODO: go to signup')} className="w-fit">
        Join our newsletter
      </SecondaryButton>
    </div>
  );
};

export default Jumbotron;
