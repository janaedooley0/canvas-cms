import "dotenv/config";
import { reset } from "drizzle-seed";
import { db } from "./db";
import * as schema from "./src/index";

async function main() {
  await reset(db, schema);
  await db.$client.end();
}

main();
