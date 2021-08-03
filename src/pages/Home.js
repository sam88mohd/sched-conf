import Speaker from "../components/Speaker";
import conf from "../images/conf.jpg";
import speakers from "../lib/speakers.json";

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
        <section className="container my-8">
          <section className="text-center border-b border-gray-500 py-4 w-max m-auto md:text-4xl font-extrabold">
            <h2>Speakers</h2>
          </section>
          <section className="grid md:grid-flow-col md:gap-4 text-center">
            {speakers.map((speaker) => (
              <Speaker data={speaker} key={speaker.id} />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
};

export default Home;
