export function shimSendBeaconWithXhr({ origin, event, isPersisted }) {
  return new Promise((resolve, reject) => {
    const async = true;
    const uri =
      `${origin}/compat_xhr/?event=${event}&t=${Date.now()}&async=${async}` +
      (isPersisted !== undefined ? `&persisted=${isPersisted}` : "");
    const xhr = new XMLHttpRequest();

    xhr.open("POST", uri, async);
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send();
  });
}
