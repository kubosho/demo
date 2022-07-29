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
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | ✅ | ✅ | ✅ |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | ✅ | ✅ | ✅ |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | - | ✅ | - |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | ✅ | ✅ | ✅ |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | ✅ | ✅ | ✅ |
| Android 13 | Mobile | WebView | 101.0.4951.74 | ✅ | ✅ | ✅ |
| iOS 13.7 | Mobile | Safari | 13.1.2 | - | ✅ | - |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | - | ✅ | - |
| iOS 14.5 | Mobile | Safari | 14.1 | - | ✅ | ✅ |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | - | ✅ | - |
| iOS 15.5 | Mobile | Safari | 15.5 | - | ✅ | - |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | - | ✅ | - |
| iOS 15.5 | Mobile | WKWebView | 15.5 | - | ✅ | - |

### Fetch

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | ✅ | - | - |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | ✅ | ✅ | ✅ |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | - | - | - |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | - | - | - |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | ✅ | ✅ | - |
| Android 13 | Mobile | WebView | 101.0.4951.74 | ✅ | - | - |
| iOS 13.7 | Mobile | Safari | 13.1.2 | - | - | - |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | - | ✅ | - |
| iOS 14.5 | Mobile | Safari | 14.1 | - | - | - |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | - | ✅ | - |
| iOS 15.5 | Mobile | Safari | 15.5 | - | - | - |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | - | - | - |
| iOS 15.5 | Mobile | WKWebView | 15.5 | - | - | - |

### Fetch + Keep-Alive

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | ✅ | ✅ | ✅ |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | ✅ | ✅ | ✅ |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | - | ✅ | ✅ |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | - | - | - |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | ✅ | ✅ | ✅ |
| Android 13 | Mobile | WebView | 101.0.4951.74 | ✅ | ✅ | ✅ |
| iOS 13.7 | Mobile | Safari | 13.1.2 | - | - | - |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | - | - | - |
| iOS 14.5 | Mobile | Safari | 14.1 | - | ✅ | ✅ |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | - | ✅ | - |
| iOS 15.5 | Mobile | Safari | 15.5 | - | ✅ | - |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | - | ✅ | - |
| iOS 15.5 | Mobile | WKWebView | 15.5 | - | ✅ | - |

### Async XHR

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | ✅ | - | - |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | ✅ | ✅ | ✅ |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | - | - | - |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | - | - | - |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | ✅ | ✅ | ✅ |
| Android 13 | Mobile | WebView | 101.0.4951.74 | ✅ | - | - |
| iOS 13.7 | Mobile | Safari | 13.1.2 | - | - | - |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | - | - | - |
| iOS 14.5 | Mobile | Safari | 14.1 | - | ✅ | - |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | - | - | - |
| iOS 15.5 | Mobile | Safari | 15.5 | - | - | - |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | - | - | - |
| iOS 15.5 | Mobile | WKWebView | 15.5 | - | - | - |

### Sync XHR

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | ✅ | - | - |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | ✅ | ✅ | ✅ |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | - | - | - |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | - | - | - |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | ✅ | ✅ | ✅ |
| Android 13 | Mobile | WebView | 101.0.4951.74 | ✅ | - | - |
| iOS 13.7 | Mobile | Safari | 13.1.2 | - | - | - |
| iOS 13.7 | Mobile | SFSafariViewController | 13.1.2 | - | - | - |
| iOS 14.5 | Mobile | Safari | 14.1 | - | - | - |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | - | - | - |
| iOS 15.5 | Mobile | Safari | 15.5 | - | - | - |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | - | - | - |
| iOS 15.5 | Mobile | WKWebView | 15.5 | - | - | - |

### localStorage

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | ✅ | ✅ | ✅ |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | ✅ | ✅ | ✅ |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | - | ✅ | - |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | ✅ | ✅ | ✅ |
| Android 12 | Mobile | Chrome | 103.0.5060.71 | ✅ | ✅ | ✅ |
| Android 13 | Mobile | WebView | 101.0.4951.74 | ✅ | ✅ | ✅ |
| iOS 13.7 | Mobile | Safari | 13.1.2 | - | ✅ | ✅ |
| iOS 14.5 | Mobile | Safari | 14.1 | - | ✅ | ✅ |
| iOS 14.5 | Mobile | SFSafariViewController | 14.1 | - | ✅ | ✅ |
| iOS 15.5 | Mobile | Safari | 15.5 | - | ✅ | ✅ |
| iOS 15.5 | Mobile | SFSafariViewController | 15.5 | - | ✅ | ✅ |
