import { AssignmentCreateNestedManyWithoutAgentsInput } from "./AssignmentCreateNestedManyWithoutAgentsInput";
import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
};
