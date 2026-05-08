import { Assignment } from "../assignment/Assignment";
import { Property } from "../property/Property";

export type Agent = {
  assignments?: Array<Assignment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
};
