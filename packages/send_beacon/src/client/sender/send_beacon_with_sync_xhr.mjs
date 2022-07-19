import { shimSendBeaconWithXhrSync } from "../beacons/sync_xhr_send_beacon.mjs";
import {
  BEFORE_UNLOAD_EVENT,
  PAGEHIDE_EVENT,
  UNLOAD_EVENT,
} from "../constants/event_type.mjs";
import { ORIGIN } from "../constants/origin.mjs";
import { reportError } from "../report_error.mjs";

reportError();

window.onbeforeunload = (_event) => {
  shimSendBeaconWithXhrSync({ origin: ORIGIN, event: BEFORE_UNLOAD_EVENT });
};

window.addEventListener(PAGEHIDE_EVENT, (event) => {
  const persisted = event.persisted;

  shimSendBeaconWithXhrSync({
    origin: ORIGIN,
    event: PAGEHIDE_EVENT,
    isPersisted: persisted,
  });
});

window.addEventListener(UNLOAD_EVENT, (_event) => {
  shimSendBeaconWithXhrSync({ origin: ORIGIN, event: UNLOAD_EVENT });
});
