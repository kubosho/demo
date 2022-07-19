import { shimSendBeaconWithXhr } from "../beacons/async_xhr_send_beacon.mjs";
import {
  BEFORE_UNLOAD_EVENT,
  PAGEHIDE_EVENT,
  UNLOAD_EVENT,
} from "../constants/event_type.mjs";
import { ORIGIN } from "../constants/origin.mjs";
import { reportError } from "../report_error.mjs";

reportError();

window.onbeforeunload = (_event) => {
  shimSendBeaconWithXhr({ origin: ORIGIN, event: BEFORE_UNLOAD_EVENT });
};

window.addEventListener(PAGEHIDE_EVENT, (event) => {
  const persisted = event.persisted;

  shimSendBeaconWithXhr({
    origin: ORIGIN,
    event: PAGEHIDE_EVENT,
    isPersisted: persisted,
  });
});

window.addEventListener(UNLOAD_EVENT, (_event) => {
  shimSendBeaconWithXhr({ origin: ORIGIN, event: UNLOAD_EVENT });
});
