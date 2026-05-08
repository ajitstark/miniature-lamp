import { SortOrder } from "../../util/SortOrder";

export type AssignmentOrderByInput = {
  agentId?: SortOrder;
  createdAt?: SortOrder;
  dateAssigned?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
