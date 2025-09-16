interface TicketHeaderProps {
  name: string;
  email: string;
}

export default function TicketHeader({ name, email }: TicketHeaderProps) {
  return (
    <header className="text-center mb-16 px-6 max-w-4xl">
      <img
        src="/images/logo-full.svg"
        alt="Coding Conf Logo"
        className="mx-auto h-6 lg:h-8 mt-8 lg:mt-10 mb-10 lg:mb-16"
      />

      <h1 className="font-bold text-natural-0 text-[26px] md:text-[40px] lg:text-[60px] leading-none md:leading-16 mb-4 lg:mb-8">
        Congrats, <span className="text-gradient-orange-white">{name}</span>! Your ticket is ready.
      </h1>

      <p className="max-w-sm mx-auto text-[16px] md:text-[20px] leading-none  text-natural-300">
        We've emailed your ticket to <span className="text-orange-500">{email}</span> and will send updates in the run
        up to the event.
      </p>
    </header>
  );
}
