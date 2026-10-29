export async function GET(request, { params }) {
  const { id } = params
  if (!id) {
    return new Response('Missing video ID', { status: 400 })
  }

  const range = request.headers.get('range')
  const driveUrl = `https://drive.google.com/uc?export=download&id=${id}`

  const fetchHeaders = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  }
  if (range) {
    fetchHeaders['Range'] = range
  }

  try {
    const upstream = await fetch(driveUrl, {
      headers: fetchHeaders,
      redirect: 'follow',
    })

    const headers = new Headers()
    headers.set('Content-Type', 'video/mp4')
    headers.set('Accept-Ranges', 'bytes')

    const contentRange = upstream.headers.get('content-range')
    if (contentRange) {
      headers.set('Content-Range', contentRange)
    }

    const contentLength = upstream.headers.get('content-length')
    if (contentLength) {
      headers.set('Content-Length', contentLength)
    }

    headers.set('Cache-Control', 'public, max-age=7200')

    return new Response(upstream.body, {
      status: upstream.status === 206 ? 206 : 200,
      headers,
    })
  } catch (error) {
    return new Response('Error streaming video', { status: 502 })
  }
}
