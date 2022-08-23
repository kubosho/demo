export function shimSendBeaconWithXhrSync({ origin, event, isPersisted }) {
  const async = false;
  const uri =
    `${origin}/compat_xhr_sync/?event=${event}&t=${Date.now()}&async=${async}` +
    (isPersisted !== undefined ? `&persisted=${isPersisted}` : "");

  const xhr = new XMLHttpRequest();
  xhr.open("POST", uri, async);
  xhr.send();
}
