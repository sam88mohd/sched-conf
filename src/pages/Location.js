import Map from "../components/Map";

const Location = () => {
  const location = [3.148786, 101.6914686];
  return (
    <section className="container md:px-6 md:py-4 m-auto">
      <div className="text-4xl border-b border-gray-400 font-extrabold text-center py-4 w-min m-auto">
        <h1 className="">Location</h1>
      </div>
      <div className="py-8">
        <Map location={location} />
      </div>
      <address className="prose m-auto text-center">
        Conference location address:
        <br />
        Jalan Raja, City Centre,
        <br /> 50050 Kuala Lumpur,
        <br /> Wilayah Persekutuan Kuala Lumpur
      </address>
    </section>
  );
};

export default Location;
