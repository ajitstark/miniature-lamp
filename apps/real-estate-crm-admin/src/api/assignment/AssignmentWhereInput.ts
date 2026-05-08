import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AssignmentWhereInput = {
  agent?: AgentWhereUniqueInput;
  dateAssigned?: DateTimeNullableFilter;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
};
