# @shun_god/fireworks-js-setlocation

フォーク版で追加した主なオプション（角度・距離・ターゲット座標）

- `launchAngle`: 度数指定。右向き0度、上向き90度。`number` / `{ min, max }` / `'random'` を受け付け。
- `burstDistance`: 炸裂までの距離(px)。速度オプションと組み合わせて到達タイミングが決まる。
- `target`: `{ enabled, x, y }`。有効化するとマウスより低優先度、角度/距離より高優先度で炸裂位置を固定。
- 優先順位: マウス（`mouse.click` / `mouse.move` で active） > `target.enabled` が true > `launchAngle` / `burstDistance` > 従来ランダム。

シンプルな使用例:

```ts
import { Fireworks } from '@shun_god/fireworks-js-setlocation'

const fw = new Fireworks(container, {
	launchAngle: { min: 60, max: 120 },
	burstDistance: 500,
	mouse: { click: true, move: false, max: 1 },
	target: { enabled: true, x: 200, y: 150 }
})

fw.start()
```
