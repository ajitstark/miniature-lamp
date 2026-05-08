import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { PropertyUpdateManyWithoutClientsInput } from "./PropertyUpdateManyWithoutClientsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyUpdateManyWithoutClientsInput;
  property?: PropertyWhereUniqueInput | null;
};
