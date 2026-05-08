import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { PropertyCreateNestedManyWithoutClientsInput } from "./PropertyCreateNestedManyWithoutClientsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ClientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyCreateNestedManyWithoutClientsInput;
  property?: PropertyWhereUniqueInput | null;
};
