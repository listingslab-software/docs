## Socket Viewer

Socket Viewer is a React component designed to make websockets communication more transparent for development and debugging. It is not a standalone app, but rather is intended to be added as a kind of module to a project when needed.

### poker/webclient integration

To quickly expose all the places in the webclient which are touched by adding the socketViewer, do a project wide search for the string 'enable/disable SocketViewer'

1. yarn the extra deps
   `yarn add @material-ui/core @material-ui/icons @material-ui/lab classnames`

2. Attach the component to the DOM in `~/src/views/appView.coffee`

- Import __SocketViewer__

```javascript
import SocketViewer from '~/src/socketViewer/SocketViewer'
```

- create the React View (line 41)

```javascript
socketViewerContainer: createReactView(SocketViewer)
```

- Add to the render method (line 133)
```javascript
@dom.append @components.socketViewerContainer.render()
```

3. Hook up the redux in `~/src/reducer.js`

We're going to create a new store section for the component

- Import the reducer (line 8)

```javascript
import socketViewer from './socketViewer/redux'
```

- Add to the array of reducers (line 16)

```javascript
export default combineReducers({
  ...,
  socketViewer,
})
```

- Dispatch to store on incoming message in `~/src/communicator/index.coffee` (line 26)

```javascript
window.services.store.dispatch({type:'SOCKETVIEWER/RECEIVE/MESSAGE', message})
```

