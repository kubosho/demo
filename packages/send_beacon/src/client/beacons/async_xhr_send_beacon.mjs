export function shimSendBeaconWithXhr({ origin, event, isPersisted }) {
  return new Promise((resolve, reject) => {
    const uri =
      `${origin}/compat_xhr/?event=${event}&t=${Date.now()}` +
      (isPersisted !== undefined ? `&persisted=${isPersisted}` : "");
    const xhr = new XMLHttpRequest();

    xhr.open("POST", uri, true);
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send();
  });
}
