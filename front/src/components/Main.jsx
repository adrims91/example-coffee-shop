const Main = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 items-center p-8">
        <div className="flex justify-center">
          <img
            className="w-50 rounded-xl shadow-lg"
            src="hero.jpg"
            alt="Café Latte"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-brown-900">
            Disfruta el mejor café de la ciudad ☕
          </h2>
          <p className="text-lg text-brown-700 mt-4">
            Elaborado con los mejores granos, en un ambiente acogedor.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
