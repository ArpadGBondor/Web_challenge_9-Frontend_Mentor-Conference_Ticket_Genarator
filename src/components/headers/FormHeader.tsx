export default function FormHeader() {
  return (
    <header className="text-center mb-4 px-6 max-w-4xl">
      <img
        src="/images/logo-full.svg"
        alt="Coding Conf Logo"
        className="mx-auto h-6 lg:h-8 mt-8 lg:mt-10 mb-10 lg:mb-16"
      />
      <h1 className="font-bold text-natural-0 text-[26px] md:text-[40px] lg:text-[60px] leading-none md:leading-16 mb-4 lg:mb-8">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-[20px] md:text-[24px] leading-none md:leading-8 text-natural-300">
        Secure your spot at next year's biggest coding conference.
      </p>
    </header>
  );
}
