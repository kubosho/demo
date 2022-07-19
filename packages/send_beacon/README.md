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

### Async XHR

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | No | No |

### Sync XHR

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | No | No |

### Fetch

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | No | No |

### Fetch + Keep-Alive

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |

### navigator.sendBeacon

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |

### localStorage

| device | browser | version | beforeunload | pagehide | unload |
| --- | --- | --- | --- | --- | --- |
| Desktop | Chrome | 103.0.5060.114 | Yes | Yes | Yes |
