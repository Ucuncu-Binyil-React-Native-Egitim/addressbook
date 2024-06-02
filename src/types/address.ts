export type CreatedAddress = {
  addressTitle: string;
  district: string;
  city: string;
  addressDetails: string;
};

export type AddressType = {
  id: string;
} & CreatedAddress;

export interface initialStateType {
  addresses: AddressType[];
}
