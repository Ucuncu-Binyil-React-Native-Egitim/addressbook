export type CreatedAddress = {
  addressTitle: String;
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
