import { shimSendBeaconWithFetch } from "../beacons/fetch_send_beacon.mjs";
import {
  BEFORE_UNLOAD_EVENT,
  PAGEHIDE_EVENT,
  UNLOAD_EVENT,
} from "../constants/event_type.mjs";
import { ORIGIN } from "../constants/origin.mjs";
import { reportError } from "../report_error.mjs";

reportError();

window.onbeforeunload = (_event) => {
  shimSendBeaconWithFetch({
    origin: ORIGIN,
    event: BEFORE_UNLOAD_EVENT,
    keepalive: true,
  });
};

window.addEventListener(PAGEHIDE_EVENT, (event) => {
  const persisted = event.persisted;

  shimSendBeaconWithFetch({
    origin: ORIGIN,
    event: PAGEHIDE_EVENT,
    isPersisted: persisted,
    keepalive: true,
  });
});

window.addEventListener(UNLOAD_EVENT, (_event) => {
  shimSendBeaconWithFetch({
    origin: ORIGIN,
    event: UNLOAD_EVENT,
    keepalive: true,
  });
});
