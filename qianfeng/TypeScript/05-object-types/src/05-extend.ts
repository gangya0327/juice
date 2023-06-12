interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
