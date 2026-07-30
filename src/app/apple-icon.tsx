import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const ORANGE = '#e8791e'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
        }}
      >
        <div style={{ position: 'relative', width: 130, height: 130, display: 'flex' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 16,
                height: 44,
                borderRadius: 8,
                background: ORANGE,
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-53px)`,
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 70,
              height: 70,
              borderRadius: '50%',
              background: ORANGE,
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
