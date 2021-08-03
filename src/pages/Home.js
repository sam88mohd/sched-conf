import conf from "../images/conf.jpg";

const Home = () => {
  return (
    <main className="container py-6 px-3 m-auto">
      <section className="min-h-screen">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 uppercase flex flex-col p-4 justify-center items-center">
            <h1 className="md:text-3xl font-extrabold flex text-center my-8">
              Persidangan tahunan ahli - ahli lembaga pengarah Mutiara Holdings
            </h1>
            <h2>31 Ogos 2021</h2>
            <h3>Dataran Merdeka</h3>
            <p className="text-center">
              persidangan kali pertama untuk percubaan
            </p>
          </div>
          <figure className="">
            <img src={conf} alt="conf" className="w-screen md:h-96" />
          </figure>
        </div>
        <section>
          <h4>Speakers</h4>
        </section>
      </section>
    </main>
  );
};

export default Home;
