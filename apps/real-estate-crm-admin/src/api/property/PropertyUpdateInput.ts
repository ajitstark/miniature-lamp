import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AssignmentUpdateManyWithoutPropertiesInput } from "./AssignmentUpdateManyWithoutPropertiesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientUpdateManyWithoutPropertiesInput } from "./ClientUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  assignments?: AssignmentUpdateManyWithoutPropertiesInput;
  client?: ClientWhereUniqueInput | null;
  clients?: ClientUpdateManyWithoutPropertiesInput;
  price?: number | null;
  status?: "Option1" | null;
};
