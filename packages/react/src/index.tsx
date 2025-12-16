import React, { useEffect, useImperativeHandle, useRef } from 'react'
import { Fireworks as FireworksJs } from '@shun_god/fireworks-js-setlocation'
import type { FireworksHandlers, FireworksOptions } from '@shun_god/fireworks-js-setlocation'

type LaunchCount = Parameters<FireworksJs['launch']>[0]
type SizeArgs = Parameters<FireworksJs['updateSize']>[0]
type BoundariesArgs = Parameters<FireworksJs['updateBoundaries']>[0]
type OptionsArgs = Parameters<FireworksJs['updateOptions']>[0]

interface FireworksProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  options?: FireworksOptions
  autostart?: boolean
}

const Fireworks = React.forwardRef<FireworksHandlers, FireworksProps>(
  ({ children, options, autostart = true, ...rest }, ref) => {
    const container = useRef<HTMLDivElement>(null)
    const fireworks = useRef<FireworksJs | null>(null)

    useImperativeHandle(ref, () => ({
      get isRunning() {
        return fireworks.current!.isRunning
      },
      get currentOptions() {
        return fireworks.current!.currentOptions
      },
      start() {
        fireworks.current!.start()
      },
      launch(count?: LaunchCount) {
        fireworks.current!.launch(count)
      },
      stop() {
        fireworks.current!.stop()
      },
      async waitStop() {
        await fireworks.current!.waitStop()
      },
      pause() {
        fireworks.current!.pause()
      },
      clear() {
        fireworks.current!.clear()
      },
      updateOptions(options: OptionsArgs) {
        fireworks.current!.updateOptions(options)
      },
      updateSize(size: SizeArgs) {
        fireworks.current!.updateSize(size)
      },
      updateBoundaries(boundaries: BoundariesArgs) {
        fireworks.current!.updateBoundaries(boundaries)
      }
    }))

    useEffect(() => {
      if (!fireworks.current) {
        fireworks.current = new FireworksJs(container.current!, options)
      }

      if (autostart) {
        fireworks.current.start()
      }

      return () => {
        fireworks.current!.stop()
      }
    }, [])

    return (
      <div
        ref={container}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

export { Fireworks }
export default Fireworks
export type { FireworksProps, FireworksHandlers, FireworksOptions }
