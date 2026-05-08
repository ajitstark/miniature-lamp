import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agent?: AgentWhereUniqueInput;
  assignments?: AssignmentListRelationFilter;
  client?: ClientWhereUniqueInput;
  clients?: ClientListRelationFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
};
