# send_beacon

## Requirements

* Node.js
* Python 3

Run it in the root directory of the `send_beacon` package:

```
python -m http.server 9000
node ./src/origin/launch_server.mjs
```

## Compatibility table

### navigator.sendBeacon

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | Yes | No |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | Yes | Yes | Yes |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | Yes | Yes | Yes |
| Android 13 | Mobile | WebView | 101.0.4951.74 | Yes | Yes | Yes |
| iOS 13.7 | Mobile | Safari | 13.1.2 | No | Yes | No |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | No | Yes | No |
| iOS 14.5 | Mobile | Safari | 14.1 | No | Yes | Yes |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | No | Yes | No |
| iOS 15.5 | Mobile | Safari | 15.5 | No | Yes | No |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | No | Yes | No |
| iOS 15.5 | Mobile | WKWebView | 15.5 | No | Yes | No |

### Fetch

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | No | No |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | No | No |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | No | No | No |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | Yes | Yes | No |
| Android 13 | Mobile | WebView | 101.0.4951.74 | Yes | No | No |
| iOS 13.7 | Mobile | Safari | 13.1.2 | No | No | No |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | No | Yes | No |
| iOS 14.5 | Mobile | Safari | 14.1 | No | No | No |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | No | Yes | No |
| iOS 15.5 | Mobile | Safari | 15.5 | No | No | No |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | No | No | No |
| iOS 15.5 | Mobile | WKWebView | 15.5 | No | No | No |

### Fetch + Keep-Alive

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | Yes | Yes |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | No | No | No |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | Yes | Yes | Yes |
| Android 13 | Mobile | WebView | 101.0.4951.74 | Yes | Yes | Yes |
| iOS 13.7 | Mobile | Safari | 13.1.2 | No | No | No |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | No | No | No |
| iOS 14.5 | Mobile | Safari | 14.1 | No | Yes | Yes |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | No | Yes | No |
| iOS 15.5 | Mobile | Safari | 15.5 | No | Yes | No |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | No | Yes | No |
| iOS 15.5 | Mobile | WKWebView | 15.5 | No | Yes | No |

### Async XHR

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | No | No |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | No | No |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | No | No | No |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | Yes | Yes | Yes |
| Android 13 | Mobile | WebView | 101.0.4951.74 | Yes | No | No |
| iOS 13.7 | Mobile | Safari | 13.1.2 | No | No | No |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | No | No | No |
| iOS 14.5 | Mobile | Safari | 14.1 | No | Yes | No |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | No | No | No |
| iOS 15.5 | Mobile | Safari | 15.5 | No | No | No |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | No | No | No |
| iOS 15.5 | Mobile | WKWebView | 15.5 | No | No | No |

### Sync XHR

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | No | No |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | No | No |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | No | No | No |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | Yes | Yes | Yes |
| Android 13 | Mobile | WebView | 101.0.4951.74 | Yes | No | No |
| iOS 13.7 | Mobile | Safari | 13.1.2 | No | No | No |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | No | No | No |
| iOS 14.5 | Mobile | Safari | 14.1 | No | No | No |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | No | No | No |
| iOS 15.5 | Mobile | Safari | 15.5 | No | No | No |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | No | No | No |
| iOS 15.5 | Mobile | WKWebView | 15.5 | No | No | No |

### localStorage

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | Yes | No |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | Yes | Yes | Yes |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | Yes | Yes | Yes |
| Android 13 | Mobile | WebView | 101.0.4951.74 | Yes | Yes | Yes |
| iOS 13.7 | Mobile | Safari | 13.1.2 | No | Yes | Yes |
| iOS 14.5 | Mobile | Safari | 14.1 | No | Yes | Yes |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | No | Yes | Yes |
| iOS 15.5 | Mobile | Safari | 15.5 | No | Yes | Yes |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | No | Yes | Yes |
