import bg from "../assets/images/more/3.png";

const Banner = () => {
  return (
    <div
      className="h-[400px] bg-cover bg-center flex items-center justify-end p-10 object-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" text-white  max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="mb-6">
          It is coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-orange-400 hover:bg-orange-500 transition-colors cursor-pointer text-white px-6 py-3 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
