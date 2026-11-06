import { expect, test } from '@playwright/test'

const primaryRoutes = [
  '/',
  '/instituicao',
  '/infancia',
  '/area-senior',
  '/projectos-parcerias',
  '/documentos',
  '/organograma',
  '/contato',
]

for (const route of primaryRoutes) {
  test(`${route} responds with HTTP 200`, async ({ request }) => {
    const response = await request.get(route)

    expect(response.status()).toBe(200)
  })
}

test('internal links on primary routes are not broken', async ({
  page,
  request,
}) => {
  const internalPaths = new Set<string>()

  for (const route of primaryRoutes) {
    await page.goto(route, { waitUntil: 'domcontentloaded' })

    const origin = new URL(page.url()).origin
    const hrefs = await page
      .locator('a[href]')
      .evaluateAll((anchors) =>
        anchors.map((anchor) => (anchor as HTMLAnchorElement).href)
      )

    for (const href of hrefs) {
      const url = new URL(href)

      if (!['http:', 'https:'].includes(url.protocol)) continue
      if (url.origin !== origin) continue
      if (url.pathname === '/' || url.pathname === '') continue

      internalPaths.add(url.pathname)
    }
  }

  expect(internalPaths.size).toBeGreaterThan(0)

  for (const path of internalPaths) {
    const response = await request.get(path)

    expect(response.status(), `Broken internal link: ${path}`).toBeLessThan(400)
  }
})
