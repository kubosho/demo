export async function shimSendBeaconWithLocalStorage({
  origin,
  event,
  isPersisted,
}) {
  const uri =
    `${origin}/compat_localstorage/?event=${event}&t=${Date.now()}` +
    (isPersisted !== undefined ? `&persisted=${isPersisted}` : "");

  try {
    localStorage.setItem(`test_beacon_${event}`, uri);
  } catch (error) {
    console.error(error);
  }
}
