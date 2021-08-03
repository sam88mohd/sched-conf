import { useParams } from "react-router-dom";
import speakers from "../../lib/speakers.json";

const SpeakerDetail = () => {
  const { slug } = useParams();
  return (
    <section className="container w-full m-auto py-8 px-4 flex md:flex-col justify-center items-center">
      <article className="text-4xl font-bold border-b border-gray-700 my-4">
        <h1>Speaker Details</h1>
      </article>
      <section className="p-4 m-auto">
        {speakers
          .filter((speaker) => speaker.slug === slug)
          .map((speaker) => (
            <section className="shadow p-4 flex flex-col justify-center items-center" style={{width:400}}>
              <figure className="p-8">
                <img src={speaker.avatar} alt={speaker.name} />
              </figure>
              <article className="prose">
                <ul>
                  <li>Name: {speaker.full_name}</li>
                  <li>Age: {speaker.age}</li>
                  <li>Company: {speaker.company}</li>
                  <li>Job Title: {speaker.job_title}</li>
                  <li>Topic: {speaker.topic}</li>
                </ul>
              </article>
            </section>
          ))}
      </section>
    </section>
  );
};

export default SpeakerDetail;
