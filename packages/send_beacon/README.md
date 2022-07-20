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

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |
| Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| Desktop | Safari | 15.5 (17613.2.7.1.8) | No | Yes | No |
| Desktop | Firefox | 102.0.1 | Yes | Yes | Yes |

### Fetch

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | No | No |
| Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| Desktop | Safari | 15.5 (17613.2.7.1.8) | No | No | No |
| Desktop | Firefox | 102.0.1 | No | No | No |

### Fetch + Keep-Alive

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |
| Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| Desktop | Safari | 15.5 (17613.2.7.1.8) | No | Yes | Yes |
| Desktop | Firefox | 102.0.1 | No | No | No |

### Async XHR

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | No | No |
| Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| Desktop | Safari | 15.5 (17613.2.7.1.8) | No | No | No |
| Desktop | Firefox | 102.0.1 | No | No | No |

### Sync XHR

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | No | No |
| Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| Desktop | Safari | 15.5 (17613.2.7.1.8) | No | No | No |
| Desktop | Firefox | 102.0.1 | No | No | No |

### localStorage

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |
| Desktop | Edge | 103.0.1264.62 | Yes | Yes | Yes |
| Desktop | Safari | 15.5 (17613.2.7.1.8) | No | Yes | No |
| Desktop | Firefox | 102.0.1 | Yes | Yes | Yes |