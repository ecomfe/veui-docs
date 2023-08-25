export const config = {
  runtime: 'edge'
}

export default async function handler () {
  return new Response(
    JSON.stringify({
      success: true
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  )
}
