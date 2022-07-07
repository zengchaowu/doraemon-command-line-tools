import EventEmitter from 'events'
export const emitter = new EventEmitter()
export default {
  Application: { DidFinishLaunching: 'application/didFinishLaunching' },
}
