import foods from "../lib/food.json";

const FoodInfo = () => {
  return (
    <section className="container py-8 px-6 m-auto">
      <div className="w-max text-4xl border-b border-gray-400 font-extrabold text-center py-4 m-auto mb-6">
        <h1>Food Info</h1>
      </div>
      <section className="prose grid md:grid-flow-col gap-4 m-auto justify-center items-center">
        {foods.map((food) => (
          <article
            className="shadow-md rounded-md overflow-hidden"
            style={{ width: 300 }}
            key={food.id}
          >
            <div className="py-1 px-5 bg-gray-400 text-center">
              <h2>{food.meal}</h2>
            </div>
            <div className="p-5">
              <ul>
                <li>{food.fruits}</li>
                <li>{food.breads}</li>
                <li>{food.cocktails}</li>
                <li>{food.tea}</li>
              </ul>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default FoodInfo;
