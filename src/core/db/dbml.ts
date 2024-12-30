import * as schema from "@/core/db/schema";
import { pgGenerate } from "drizzle-dbml-generator";

pgGenerate({
  schema,
  out: "./src/core/db/schema.dbml",
  relational: true,
});
console.log("✅ Created the schema.dbml file");
