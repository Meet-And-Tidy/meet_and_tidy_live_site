import AppImage from "../../assets/app.png"

const Download = () => {
  return (
    <div className="w-full pt-16">
      <img 
        src={AppImage} 
        alt="app-image"           
        className="aspect-[5/2] w-full object-cover h-[600px] lg:rounded-3xl bg-center bg-no-repeat bg-auto inset-x-0"
      />
    </div>
  );
};

export default Download;


