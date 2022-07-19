export function nativeSendBeacon({ origin, event, isPersisted }) {
  const uri =
    `${origin}/sendbeacon/?event=${event}&t=${Date.now()}` +
    (isPersisted !== undefined ? `&persisted=${isPersisted}` : "");

  window.navigator.sendBeacon(uri);
}
