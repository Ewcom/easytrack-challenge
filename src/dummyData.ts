import { IPackageInfo, ITruckInfo } from "./interfaces";

export const truckInfoArray: ITruckInfo[] = [
  {
    currentKG: 250,
    maxKG: 1250,
    truckName: "Truck A",
    shipmentNumber: 1234,
    percentage: 25,
    trip: "Paris - Berlin",
    deliveryDate: new Date("2023-06-30"),
  },
  {
    currentKG: 750,
    maxKG: 1500,
    truckName: "Truck B",
    shipmentNumber: 5678,
    percentage: 50,
    trip: "Madrid - Lisbon",
    deliveryDate: new Date("2023-07-15"),
  },
  {
    currentKG: 800,
    maxKG: 1200,
    truckName: "Truck C",
    shipmentNumber: 9012,
    percentage: 66.67,
    trip: "Amsterdam - Brussels",
    deliveryDate: new Date("2023-07-01"),
  },
  {
    currentKG: 1100,
    maxKG: 1200,
    truckName: "Truck D",
    shipmentNumber: 9014,
    percentage: 91,
    trip: "Amsterdam - Barcelona",
    deliveryDate: new Date("2023-07-01"),
  },
];

export const packageInfoArray: IPackageInfo[] = [
  {
    parcelNumber: "PA-0",
    packageWeight: 30,
    admisionDate: new Date("2023-03-10"),
  },
  {
    parcelNumber: "PA-1",
    packageWeight: 50,
    admisionDate: new Date("2023-03-10"),
  },
  {
    parcelNumber: "PA-2",
    packageWeight: 20,
    admisionDate: new Date("2023-03-11"),
  },
  {
    parcelNumber: "PA-3",
    packageWeight: 70,
    admisionDate: new Date("2023-03-11"),
  },
  {
    parcelNumber: "PA-4",
    packageWeight: 60,
    admisionDate: new Date("2023-03-12"),
  },
  {
    parcelNumber: "PA-5",
    packageWeight: 10,
    admisionDate: new Date("2023-03-12"),
  },
  {
    parcelNumber: "PA-6",
    packageWeight: 40,
    admisionDate: new Date("2023-03-12"),
  },
  {
    parcelNumber: "PA-7",
    packageWeight: 80,
    admisionDate: new Date("2023-03-12"),
  },
  {
    parcelNumber: "PA-8",
    packageWeight: 90,
    admisionDate: new Date("2023-03-12"),
  },
  {
    parcelNumber: "PA-9",
    packageWeight: 20,
    admisionDate: new Date("2023-03-12"),
  },
];
