import { Link } from "react-router-dom";

const Speaker = ({ data }) => {
  return (
    <article className="container flex flex-col md:px-4 md:py-8 justify-center items-center">
      <figure className="rounded-full overflow-hidden my-4">
        <img src={data.avatar} alt={data.full_name} />
      </figure>
      <h3 className="font-bold text-lg">{data.full_name}</h3>
      <h4 className="font-light italic">{data.company}</h4>
      <div className="my-8">
        <Link
          to={`/speaker/${data.slug}`}
          className="border px-4 py-1 rounded hover:bg-blue-400 bg-blue-600 font-semibold"
        >
          Details
        </Link>
      </div>
    </article>
  );
};

export default Speaker;
