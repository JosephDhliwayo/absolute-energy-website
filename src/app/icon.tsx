import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

const ORANGE = '#e8791e'

export default function Icon() {
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
        <div style={{ position: 'relative', width: 24, height: 24, display: 'flex' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 3,
                height: 8,
                borderRadius: 2,
                background: ORANGE,
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-10px)`,
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 13,
              height: 13,
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
