import { Appointment } from "../appointment/Appointment";
import { Property } from "../property/Property";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  properties?: Array<Property>;
  property?: Property | null;
  updatedAt: Date;
};
