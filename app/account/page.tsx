import Header from "../components/Header";

const data = {
    items: [
        {
          id: 1,
          name: "Property Name",
          image: "./assets/property.webp",
          valuation: 100,
          slots: 1,
          income: 2.87,
        },
        {
          id: 2,
          name: "Property Name",
          image: "./assets/property.webp",
          valuation: 100,
          slots: 1,
          income: 2.87,
        },
        {
          id: 3,
          name: "Property Name",
          image: "./assets/property.webp",
          valuation: 100,
          slots: 1,
          income: 2.87,
        },
    ],
    totalIncome: 9,
};

export default function Account() {
  return (
    <>
      <Header title="Account" />
      <main className="px-5 py-10 md:px-28 md:py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="w-60 text-center py-3 border border-theme-green rounded-xl inline-block bg-white">
              Total Number of Slots: {data.items.length}
            </div>
          </div>
          <div className="my-6 lg:my-12 flex flex-col gap-2 lg:gap-4">
            {data.items.map((item) => (
              <div
                key={item.id}
                className="flex bg-grey-10 p-4 rounded-2xl flex-col lg:flex-row"
              >
                <div className="py-4 px-6 lg:border-r border-theme-green lg:w-1/3">
                  <h3 className="font-medium text-2xl mb-4">{item.name}</h3>
                  <img
                    src={item.image}
                    className="aspect-[2/1] object-cover rounded-2xl w-full"
                    alt={item.name}
                  />
                </div>
                <div className="lg:w-1/3 flex items-center justify-center py-4 px-6 lg:border-r border-theme-green">
                  <table className="lg:w-80 w-full">
                    <tbody>
                      <tr className="w-40">
                        <td className="pb-4">Asset valuation:</td>
                        <td className="italic font-semibold text-right lg:text-left">
                          ${item.valuation}
                        </td>
                      </tr>
                      <tr className="w-40">
                        <td className="">Number of slots:</td>
                        <td className="italic font-semibold text-right lg:text-left">
                          {item.slots}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="lg:w-1/3 flex justify-center items-center pt-0 lg:pt-4 py-4 px-6">
                  <div className="flex flex-col lg:w-fit w-full">
                    <div className="mb-4 flex justify-between flex-wrap">
                      <span className="mr-5 text-nowrap">
                        Accumulated income:
                      </span>
                      <span className="font-semibold italic text-nowrap">
                        {item.income} USDT
                      </span>
                    </div>
                    <button className="bg-gradient-green hover:shadow-xl transition-all duration-300 py-2 text-white rounded-3xl">
                      Claim
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-stretch lg:w-fit">
              <div className="text-2xl flex justify-between">
                <span>Total income:</span>
                <b className="font-semibold italic ml-4">{data.totalIncome} USDT</b>
              </div>
              <button className="bg-gradient-green hover:shadow-xl transition-all duration-300 rounded-3xl text-white py-1 mt-3 font-semibold text-base md:text-2xl">
                Claim All
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
