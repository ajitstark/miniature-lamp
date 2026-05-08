import { Agent } from "../agent/Agent";
import { Property } from "../property/Property";

export type Assignment = {
  agent?: Agent | null;
  createdAt: Date;
  dateAssigned: Date | null;
  id: string;
  property?: Property | null;
  updatedAt: Date;
};
