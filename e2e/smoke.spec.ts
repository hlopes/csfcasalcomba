import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'

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

type InternalLink = {
  hash: string
  path: string
}

async function collectInternalLinks(page: Page) {
  const origin = new URL(page.url()).origin
  const hrefs = await page
    .locator('a[href]')
    .evaluateAll((anchors) =>
      anchors.map((anchor) => (anchor as HTMLAnchorElement).href)
    )

  return hrefs
    .map((href) => new URL(href))
    .filter(
      (url) =>
        ['http:', 'https:'].includes(url.protocol) && url.origin === origin
    )
    .map<InternalLink>((url) => ({
      hash: url.hash,
      path: url.pathname || '/',
    }))
}

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
  const links: InternalLink[] = []

  for (const route of primaryRoutes) {
    await page.goto(route, { waitUntil: 'domcontentloaded' })
    links.push(...(await collectInternalLinks(page)))
  }

  const paths = [...new Set(links.map((link) => link.path))]

  expect(paths.length).toBeGreaterThan(0)

  for (const path of paths) {
    const response = await request.get(path)

    expect(response.status(), `Broken internal link: ${path}`).toBe(200)
  }

  const hashesByPath = new Map<string, Set<string>>()

  for (const { hash, path } of links) {
    if (!hash) continue

    const hashes = hashesByPath.get(path) ?? new Set<string>()
    hashes.add(hash.slice(1))
    hashesByPath.set(path, hashes)
  }

  for (const [path, hashes] of hashesByPath) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })

    for (const id of hashes) {
      expect(
        await page.evaluate(
          (anchorId) => document.getElementById(anchorId) !== null,
          id
        ),
        `Missing anchor #${id} on ${path}`
      ).toBe(true)
    }
  }
})
