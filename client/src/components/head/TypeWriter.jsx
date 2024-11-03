import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "We produce food for Mice",
        1000,
        "We produce food for Hamsters",
        1000,
        "We produce food for Guinea Pigs",
        1000,
        "We produce food for Chinchillas",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-2xl font-semibold inline-block"
      repeat={Infinity}
    />
  );
};

export default TypeWriter;
