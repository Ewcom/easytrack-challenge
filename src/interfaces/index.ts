export interface ITruckInfo {
  currentKG: number;
  maxKG: number;
  truckName: string;
  shipmentNumber: number;
  percentage: number;
  trip: string;
  deliveryDate: Date;
}

export interface IPackageInfo {
  parcelNumber: string;
  packageWeight: number;
  admisionDate: Date;
}
