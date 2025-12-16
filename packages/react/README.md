# @fireworks-js/react

React ラッパー経由で `launchAngle`（度数, 右向き0度）, `burstDistance`（px距離）, `target`（座標指定+enabled）を `options` に渡せます。マウス挙動は従来どおり `mouse.click` / `mouse.move` で制御し、クリックが有効ならマウス位置が最優先されます。

```tsx
import { Fireworks } from '@fireworks-js/react'

<Fireworks
	options={{
		launchAngle: { min: 60, max: 120 },
		burstDistance: 500,
		mouse: { click: true, move: false, max: 1 },
		target: { enabled: true, x: 200, y: 150 }
	}}
/>
```
