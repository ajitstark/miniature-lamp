import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AssignmentUpdateInput = {
  agent?: AgentWhereUniqueInput | null;
  dateAssigned?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
