"use strict";

import http from "http";

export function createServer() {
  const server = http.createServer((req, res) => {
    console.log(`[${new Date()}] ${req.method}: ${req.url}`);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "no-cache");
    res.statusCode = 200;
    res.end("");
  });

  return server;
}
