import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Mahenoor Salat | AI Creative Developer & Product Engineer';
    const tag = searchParams.get('tag') || 'Next.js 15 • Agentic AI • 5.0★ Top Rated';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a2e 2%, transparent 0%), radial-gradient(circle at 75px 75px, #16213e 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '60px 80px',
            fontFamily: 'sans-serif',
            color: '#ffffff',
            position: 'relative',
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(51, 153, 204, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
            }}
          />

          {/* Top Brand Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#3399cc',
                boxShadow: '0 0 12px #3399cc',
              }}
            />
            <span style={{ fontSize: '24px', fontWeight: 600, color: '#e0e0e0', letterSpacing: '-0.02em' }}>
              Mahenoor Salat — AI Product Manager &amp; Senior Product Engineer
            </span>
          </div>

          {/* Main Title Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1000px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(51, 153, 204, 0.15)',
                border: '1px solid rgba(51, 153, 204, 0.3)',
                borderRadius: '20px',
                padding: '6px 16px',
                width: 'fit-content',
              }}
            >
              <span style={{ fontSize: '18px', color: '#66ccff', fontWeight: 500 }}>
                {tag}
              </span>
            </div>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              {title}
            </h1>
          </div>

          {/* Footer Metadata Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '30px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span style={{ fontSize: '20px', color: '#a0a0a0' }}>Turing (SF) LLM Evaluator</span>
              <span style={{ fontSize: '20px', color: '#404040' }}>•</span>
              <span style={{ fontSize: '20px', color: '#a0a0a0' }}>Upwork 100% JSS</span>
              <span style={{ fontSize: '20px', color: '#404040' }}>•</span>
              <span style={{ fontSize: '20px', color: '#a0a0a0' }}>Fiverr 5.0★</span>
            </div>
            <span style={{ fontSize: '22px', fontWeight: 700, color: '#3399cc' }}>
              salat-mahenoor-ai-creative-developer.vercel.app
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate OG image`, { status: 500 });
  }
}
