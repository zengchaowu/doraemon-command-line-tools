import Events, { emitter } from '~/events'

emitter.on(Events.Capture.ShouldCaptureScreen, async () => {
  const result = await globalThis.$hybrid.pipeline({
    name: 'screenshot',
    payload: {},
  })
  console.log(result)
})
