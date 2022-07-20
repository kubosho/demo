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

### Fetch

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | No | No |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | No | No |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | No | No | No |

### Fetch + Keep-Alive

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | Yes | Yes |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | No | No | No |

### Async XHR

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | No | No |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | No | No |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | No | No | No |

### Sync XHR

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | No | No |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | No | No |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | No | No | No |

### localStorage

| OS | device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- | --- |
| macOS 12.4 | Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| macOS 12.4 | Desktop | Safari | 15.5 (17613.2.7.1.8) | No | Yes | No |
| macOS 12.4 | Desktop | Firefox | 102.0.1 | Yes | Yes | Yes |
