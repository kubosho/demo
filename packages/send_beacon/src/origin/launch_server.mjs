"use strict";

import { SERVER_PORT } from "../isomorphic/server_port.mjs";
import { createServer } from "./create_server.mjs";

const server = createServer();
server.listen(SERVER_PORT);
console.log("server started");
