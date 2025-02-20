"use client";

import Link from "next/link";
import { useState } from "react";

type Property = {
  id: number;
  name: string;
  type?: string;
  stage?: string;
  rentalIncome?: string;
  apy?: string;
  slotPrice?: string;
  image: string;
  availableSoon: boolean;
};

const properties: { [key: string]: Property[] } = {
  all: [
    {
      id: 1,
      name: "Property Name",
      type: "Apartment",
      stage: "Ready",
      rentalIncome: "Yes",
      apy: "5%",
      slotPrice: "$100",
      image: "/assets/property.webp",
      availableSoon: false,
    },
    {
      id: 2,
      name: "Property Name",
      type: "Apartment",
      stage: "Ready",
      rentalIncome: "Yes",
      apy: "5%",
      slotPrice: "$100",
      image: "/assets/property.webp",
      availableSoon: false,
    },
    {
      id: 3,
      name: "Available Soon...",
      availableSoon: true,
      image: "/assets/property.webp",
    },
  ],
  baku: [
    {
      id: 4,
      name: "Property Name",
      type: "Apartment",
      stage: "Ready",
      rentalIncome: "Yes",
      apy: "5%",
      slotPrice: "$100",
      image: "/assets/property.webp",
      availableSoon: false,
    },
    {
      id: 5,
      name: "Available Soon...",
      availableSoon: true,
      image: "/assets/property.webp",
    },
  ],
  dubai: [
    {
      id: 6,
      name: "Property Name",
      type: "Apartment",
      stage: "Ready",
      rentalIncome: "Yes",
      apy: "5%",
      slotPrice: "$100",
      image: "/assets/property.webp",
      availableSoon: false,
    },
    {
      id: 7,
      name: "Available Soon...",
      availableSoon: true,
      image: "/assets/property.webp",
    },
  ],
  budapest: [
    {
      id: 8,
      name: "Property Name",
      type: "Apartment",
      stage: "Ready",
      rentalIncome: "Yes",
      apy: "5%",
      slotPrice: "$100",
      image: "/assets/property.webp",
      availableSoon: false,
    },
    {
      id: 9,
      name: "Available Soon...",
      availableSoon: true,
      image: "/assets/property.webp",
    },
  ],
};

export default function PropertyTabs() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="px-5 py-10 md:px-28 md:py-16">
      <div className="container mx-auto">
        <div className="flex justify-center items-start">
          <ul className="flex items-center gap-2 justify-center border border-[#D5D5D675] rounded-2xl mb-8 md:mb-20 py-2 px-4 md:w-fit w-[330px] flex-wrap md:flex-nowrap">
            {Object.keys(properties).map((city) => (
              <li key={city}>
                <button
                  onClick={() => setActiveTab(city)}
                  className={`w-36 py-2 rounded-xl text-black bg-[#ECECEC4B] text-center font-medium ${
                    activeTab === city ? "bg-theme-green text-white" : ""
                  }`}
                >
                  {city.charAt(0).toUpperCase() + city.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="gap-6 md:gap-14 flex flex-wrap justify-center lg:justify-start tabcontent">
          {properties[activeTab].map((property) => (
            <li
              key={property.id}
              className="bg-grey-10 rounded-2xl px-7 py-6 w-fit"
            >
              {property.availableSoon ? (
                <>
                  <div className="size-[290px] md:size-[310px] bg-green-800 mb-3 rounded-2xl overflow-hidden bg-cover bg-center bg-[url('/assets/property.webp')]">
                    <div className="size-full bg-theme-green bg-opacity-95 flex items-center justify-center">
                      <img src="/assets/icon-prosessing.svg" alt="Available soon icon" />
                    </div>
                  </div>
                  <h2 className="font-bold text-center text-2xl mt-20 mb-[154px]">
                    Available Soon...
                  </h2>
                </>
              ) : (
                <>
                  <img
                    src={property.image}
                    alt="Property Name"
                    className="size-[290px] md:size-[310px] bg-green-800 mb-3 rounded-2xl"
                  />
                  <h2 className="font-medium text-2xl mb-3">{property.name}</h2>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="flex items-center">
                          <img
                            src="./assets/icon-property.svg"
                            className="mr-1"
                            alt="Property icon"
                          />
                          <span>Property Type:</span>
                        </td>
                        <td className="font-medium italic">{property.type}</td>
                      </tr>
                      <tr>
                        <td className="flex items-center">
                          <img
                            src="./assets/icon-stage.svg"
                            className="mr-1"
                            alt="Property icon"
                          />
                          <span>Stage:</span>
                        </td>
                        <td className="font-medium italic">{property.stage}</td>
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
                        <td className="font-medium italic">
                          {property.rentalIncome}
                        </td>
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
                        <td className="font-medium italic">{property.apy}</td>
                      </tr>
                      <tr>
                        <td className="flex items-center">
                          <img
                            src="./assets/icon-usd.svg"
                            className="mr-1"
                            alt="Property icon"
                          />
                          <span>Slot Price:</span>
                        </td>
                        <td className="font-medium italic">
                          {property.slotPrice}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-center">
                    <Link
                      href={`/slot/${property.id}`}
                      className="text-white hover:animate-hover-move bg-gradient-green py-3 px-8 font-semibold inline-block rounded-3xl mt-8"
                    >
                      Purchase Now
                    </Link>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
