export function shimSendBeaconWithXhrSync({ origin, event, isPersisted }) {
  const uri =
    `${origin}/compat_xhr_sync/?event=${event}&t=${Date.now()}` +
    (isPersisted !== undefined ? `&persisted=${isPersisted}` : "");

  const xhr = new XMLHttpRequest();
  xhr.open("POST", uri, true);
  xhr.send();
}
