import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AssignmentCreateNestedManyWithoutPropertiesInput } from "./AssignmentCreateNestedManyWithoutPropertiesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientCreateNestedManyWithoutPropertiesInput } from "./ClientCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  assignments?: AssignmentCreateNestedManyWithoutPropertiesInput;
  client?: ClientWhereUniqueInput | null;
  clients?: ClientCreateNestedManyWithoutPropertiesInput;
  price?: number | null;
  status?: "Option1" | null;
};
