interface TicketProps {
  name: string;
  github: string;
  ticketId: string;
  photo: string | null;
}

export default function Ticket({ name, github, ticketId, photo }: TicketProps) {
  return (
    <div className="w-full px-4 flex justify-center items-center mb-20">
      <div
        className="relative w-full sm:max-w-[600px] aspect-[600/280] bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "url('/images/pattern-ticket.svg')" }}
      >
        <div className="absolute inset-0 flex">
          <div className="flex-[485] shrink-0 flex flex-col items-stretch justify-between overflow-hidden">
            <div className="w-full p-4 sm:p-6 pb-0 pr-0 overflow-hidden">
              <img src="/images/logo-full.svg" alt="Coding Conf Logo" className="h-6 xs:h-8 md:h-10" />
              <p className="ml-9 xs:ml-12 md:ml-16 md:mt-2 lg:mt-4 text-[14px] xs:text-[20px] text-natural-300 whitespace-nowrap">
                Jan 31, 2025 / Austin, TX
              </p>
            </div>
            <div className="w-full p-4 sm:p-6 pt-0 pr-2 overflow-hidden flex items-center gap-4 sm:gap-6">
              <div>
                {photo && (
                  <img
                    src={photo}
                    alt="Ticket Photo"
                    className="w-12 h-12 xs:w-18 xs:h-18 sm:w-24 sm:h-24 object-cover rounded-xl"
                  />
                )}
              </div>
              <div className="">
                <p className="text-[16px] xs:text-[20px] sm:text-[28px] font-semibold text-natural-0">{name}</p>

                <p className="text-[14px] xs:text-[18px] sm:text-[22px] text-natural-300 whitespace-nowrap">
                  <img src="/images/icon-github.svg" alt="Github Logo" className="inline-block h-4 w-4 sm:h-6 sm:w-6" />{' '}
                  @{github}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[115] shrink-0 flex items-center justify-center">
            <div className="w-0 h-0 flex items-center justify-center">
              <p className="text-[20px] xs:text-[24px] xs:text-[26px] text-natural-500 font-semibold rotate-90">
                #{ticketId}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
