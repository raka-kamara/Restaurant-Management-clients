const EatEnjoy = () => {
  return (
    <div className="py-10">
        <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"> Eat And Enjoy In Our Restaurant!</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/54bvHDN/louis-hansel-w-W37-D0-W8wg0-unsplash.jpg" alt="" />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
              Enjoy With Your Family and Friends
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                We Offer Nice Environment and Spacious Space For Our Customer. Enjoy Our Food With Green Everywhere
              </p>
            </div>
          </div>

          <div>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/VpzXb0Z/edward-howell-SIrh-MCze-Qa-U-unsplash.jpg" alt="" />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                Explore Your Desired Cuisine With US
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              Explore Various Cuisines with fine dinning
                The freshest Fish, meat, and Veggies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default EatEnjoy;
