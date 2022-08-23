"use strict";

import http from "http";

export function createServer() {
  const server = http.createServer((req, res) => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = `${date.getMinutes()}`.padStart(2, "0");
    const seconds = `${date.getSeconds()}`.padStart(2, "0");

    const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
    const userAgent = req.headers["user-agent"];

    console.log(`[${formattedDate}] ${req.method}: ${req.url}`);
    console.log(` > ${userAgent}`);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "no-cache");
    res.statusCode = 200;
    res.end("");
  });

  return server;
}
