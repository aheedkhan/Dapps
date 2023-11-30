export default function About() {
  return (
    <>
      <section className="font-josefin select-none">
        <h1 className="text-white text-center text-6xl my-16 select-none hover:animate-colorchange">
          Crypto Clicks
        </h1>
        <div className="flex">
          <div className="w-1/2 p-4 h-about ">
            <img
              src="https://images.pexels.com/photos/1996911/pexels-photo-1996911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className=" w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-105 mx-4 duration-700 "
            />
          </div>
          <div className="w-1/2 p-4 content-center">
            <h2 className=" mx-10 text-white font-semibold">Our Mission</h2>
          </div>
        </div>
      </section>
    </>
  );
}
