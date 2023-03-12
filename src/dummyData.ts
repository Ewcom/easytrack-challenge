import { ITruckInfo } from "./interfaces";

export const truckInfoArray: ITruckInfo[] = [
  {
    currentKG: 250,
    maxKG: 250,
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
