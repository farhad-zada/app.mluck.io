import Header from "./Header";

export default function Slot() {
  return (
    <>
      <Header title="Slot Purchase" />
      <main className="px-5 py-10 md:px-28 md:py-16">
        <div className="container mx-auto">
          <h1 className="text-center font-medium text-[40px] mb-12">
            Property Name
          </h1>
          <div>
            <div className="grid grid-cols-3 gap-8">
              <div className="grid grid-cols-3 gap-8 auto-rows-fr w-full h-full col-span-3">
                <img
                  src="/assets/property.webp"
                  className="aspect-[2/1] object-cover rounded-2xl col-span-3 lg:col-span-1"
                  alt="Property name"
                />
                <img
                  src="/assets/property.webp"
                  className="aspect-[2/1] object-cover rounded-2xl col-span-2 lg:col-span-1 h-full"
                  alt="Property name"
                />
                <img
                  src="/assets/property.webp"
                  className="aspect-[2/1] object-cover rounded-2xl col-span-1 lg:col-span-1 h-full"
                  alt="Property name"
                />
              </div>

              <div className="text-center bg-grey-10 rounded-2xl py-4 px-7 col-span-3 lg:col-span-1 order-2 lg:order-1">
                <div className="font-medium text-xl mb-4">Selected Slot:</div>
                <div className="font-semibold text-4xl mb-9">3 of 981</div>
                <div className="flex items-center justify-center ">
                  <div className="flex items-center justify-between w-full max-w-80">
                    <select className="bg-white border border-theme-green text-theme-green rounded-xl px-3 py-2 focus:outline-theme-green" name="currency" id="currency">
                      <option className="checked:text-theme-green text-black" value="USDT">USDT</option>
                      <option className="checked:text-theme-green text-black" value="USDC">USDC</option>
                      <option disabled value="$Mluck">
                        $MLUCK
                      </option>
                    </select>
                    <span className="font-medium text-2xl">100$</span>
                  </div>
                </div>
                <button className="bg-gradient-green hover:shadow-xl transition-all duration-300 text-white rounded-3xl py-2 px-8 mt-9">
                  Proceed
                </button>
              </div>
              <div className="col-span-3 lg:col-span-2 order-1 lg:order-2">
                <h2 className="font-medium text-2xl mb-3">Property Name</h2>
                <table className="w-full max-w-lg">
                  <tbody>
                    <tr>
                      <td className="flex items-center">
                        <img
                          src="/assets/icon-property.svg"
                          className="mr-1"
                          alt="Property icon"
                        />
                        <span>Property Type:</span>
                      </td>
                      <td className="font-medium italic">Apartment</td>
                    </tr>
                    <tr>
                      <td className="flex items-center">
                        <img
                          src="/assets/icon-stage.svg"
                          className="mr-1"
                          alt="Property icon"
                        />
                        <span>Stage:</span>
                      </td>
                      <td className="font-medium italic">Ready</td>
                    </tr>
                    <tr>
                      <td className="flex items-center">
                        <img
                          src="/assets/icon-rental.svg"
                          className="mr-1"
                          alt="Property icon"
                        />
                        <span>Rental Income:</span>
                      </td>
                      <td className="font-medium italic">Yes</td>
                    </tr>
                    <tr>
                      <td className="flex items-center">
                        <img
                          src="/assets/icon-apy.svg"
                          className="mr-1"
                          alt="Property icon"
                        />
                        <span>APY:</span>
                      </td>
                      <td className="font-medium italic">5%</td>
                    </tr>
                    <tr>
                      <td className="flex items-center">
                        <img
                          src="/assets/icon-usd.svg"
                          className="mr-1"
                          alt="Property icon"
                        />
                        <span>Slot Price:</span>
                      </td>
                      <td className="font-medium italic">$100</td>
                    </tr>
                    <tr>
                      <td className="flex items-center">
                        <img
                          src="/assets/icon-proof.svg"
                          className="mr-1"
                          alt="Property icon"
                        />
                        <span>Proof of ownership:</span>
                      </td>
                      <td className="font-medium italic"></td>
                    </tr>
                    <tr>
                      <td className="flex items-center">
                        <img
                          src="/assets/icon-another.svg"
                          className="mr-1"
                          alt="Property icon"
                        />
                        <span>Another feature:</span>
                      </td>
                      <td className="font-medium italic"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
