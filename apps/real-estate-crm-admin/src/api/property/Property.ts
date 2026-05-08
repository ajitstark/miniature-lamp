import { Agent } from "../agent/Agent";
import { Assignment } from "../assignment/Assignment";
import { Client } from "../client/Client";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  assignments?: Array<Assignment>;
  client?: Client | null;
  clients?: Array<Client>;
  createdAt: Date;
  id: string;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
