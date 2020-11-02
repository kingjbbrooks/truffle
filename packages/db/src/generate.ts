import { logger } from "@truffle/db/logger";
const debug = logger("db:generate");

import { Collections, definitions } from "@truffle/db/definitions";
import { forDefinitions } from "./process";

export const generate = forDefinitions<Collections>(definitions);