export function reportError() {
  window.onerror = (event) => {
    window.alert(event);
  };
}
