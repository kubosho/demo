export async function shimSendBeaconWithFetch({
  origin,
  event,
  isPersisted,
  keepalive = false,
}) {
  const uri =
    `${origin}/compat_fetch/?event=${event}&t=${Date.now()}` +
    (isPersisted !== undefined ? `&persisted=${isPersisted}` : "") +
    (keepalive ? `&keepalive=${keepalive}` : "");

  await fetch(uri, {
    method: "POST",
    keepalive,
  });
}
