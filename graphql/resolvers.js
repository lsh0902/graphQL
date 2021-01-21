import { getById, SH } from "./db";

const resolvers = {
  Query: {
    name : () => "seunghwan",
    people : () => SH,
    person : () => getById()
  }
};

export default resolvers;