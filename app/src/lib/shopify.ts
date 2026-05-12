/**
 * Shopify Storefront API client for fetching meat products
 */

const SHOPIFY_STORE_DOMAIN = import.meta.env.SHOPIFY_STORE_DOMAIN || 'store.mangaroa.org';
const SHOPIFY_STOREFRONT_TOKEN = import.meta.env.SHOPIFY_STOREFRONT_TOKEN;
const USE_MOCK_DATA = import.meta.env.USE_MOCK_DATA === 'true' || !SHOPIFY_STOREFRONT_TOKEN;

interface ShopifyImage {
  url: string;
  altText: string | null;
}

interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  onlineStoreUrl: string | null;
  featuredImage: ShopifyImage | null;
  priceRange: {
    minVariantPrice: ShopifyPrice;
  };
  tags: string[];
  productType: string;
  vendor: string;
}

export interface MeatProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  descriptionHtml: string;
  image: string | null;
  imageAlt: string;
  price: number;
  currency: string;
  availableForSale: boolean;
  tags: string[];
  productType: string;
  shopifyUrl: string;
}

const MEAT_QUERY = `
  query GetMeatProducts($first: Int!) {
    collection(handle: "online-meat-deliveries") {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            descriptionHtml
            availableForSale
            onlineStoreUrl
            featuredImage {
              url
              altText
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            tags
            productType
            vendor
          }
        }
      }
    }
  }
`;

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN || '',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();

  if (json.errors) {
    console.error('Shopify GraphQL errors:', json.errors);
    throw new Error(`Shopify GraphQL error: ${json.errors[0]?.message}`);
  }

  return json.data;
}

function transformProduct(product: ShopifyProduct): MeatProduct {
  const price = parseFloat(product.priceRange.minVariantPrice.amount);

  return {
    id: product.id,
    title: product.title,
    slug: product.handle,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    image: product.featuredImage?.url || null,
    imageAlt: product.featuredImage?.altText || product.title,
    price,
    currency: product.priceRange.minVariantPrice.currencyCode,
    availableForSale: product.availableForSale,
    tags: product.tags,
    productType: product.productType,
    shopifyUrl: product.onlineStoreUrl || `https://${SHOPIFY_STORE_DOMAIN}/products/${product.handle}`,
  };
}

function getMockProducts(): MeatProduct[] {
  return [
    {
      id: 'mock-beef-mince',
      title: 'Beef Mince (500g)',
      slug: 'beef-mince-500g',
      description: 'Pasture-raised beef mince from Mangaroa Farms. Home-grown, home-processed.',
      descriptionHtml: '<p>Pasture-raised beef mince from Mangaroa Farms. Home-grown, home-processed.</p>',
      image: null,
      imageAlt: 'Beef Mince',
      price: 12.00,
      currency: 'NZD',
      availableForSale: true,
      tags: ['beef', 'mince'],
      productType: 'Meat',
      shopifyUrl: 'https://store.mangaroa.org',
    },
    {
      id: 'mock-lamb-chops',
      title: 'Lamb Chops (4 pack)',
      slug: 'lamb-chops-4-pack',
      description: 'Regenerative pasture-raised lamb chops. Home-grown, home-processed.',
      descriptionHtml: '<p>Regenerative pasture-raised lamb chops. Home-grown, home-processed.</p>',
      image: null,
      imageAlt: 'Lamb Chops',
      price: 18.00,
      currency: 'NZD',
      availableForSale: true,
      tags: ['lamb', 'chops'],
      productType: 'Meat',
      shopifyUrl: 'https://store.mangaroa.org',
    },
    {
      id: 'mock-beef-steak',
      title: 'Scotch Fillet Steak (per kg)',
      slug: 'scotch-fillet-steak',
      description: 'Premium pasture-raised scotch fillet. Home-grown, home-processed.',
      descriptionHtml: '<p>Premium pasture-raised scotch fillet. Home-grown, home-processed.</p>',
      image: null,
      imageAlt: 'Scotch Fillet Steak',
      price: 42.00,
      currency: 'NZD',
      availableForSale: true,
      tags: ['beef', 'steak'],
      productType: 'Meat',
      shopifyUrl: 'https://store.mangaroa.org',
    },
    {
      id: 'mock-beef-sausages',
      title: 'Beef Sausages (6 pack)',
      slug: 'beef-sausages-6-pack',
      description: 'Handmade beef sausages. Home-grown, home-processed.',
      descriptionHtml: '<p>Handmade beef sausages. Home-grown, home-processed.</p>',
      image: null,
      imageAlt: 'Beef Sausages',
      price: 14.00,
      currency: 'NZD',
      availableForSale: true,
      tags: ['beef', 'sausages'],
      productType: 'Meat',
      shopifyUrl: 'https://store.mangaroa.org',
    },
    {
      id: 'mock-lamb-roast',
      title: 'Lamb Leg Roast (per kg)',
      slug: 'lamb-leg-roast',
      description: 'Whole leg roast, perfect for Sunday dinner. Home-grown, home-processed.',
      descriptionHtml: '<p>Whole leg roast, perfect for Sunday dinner. Home-grown, home-processed.</p>',
      image: null,
      imageAlt: 'Lamb Leg Roast',
      price: 28.00,
      currency: 'NZD',
      availableForSale: true,
      tags: ['lamb', 'roast'],
      productType: 'Meat',
      shopifyUrl: 'https://store.mangaroa.org',
    },
    {
      id: 'mock-beef-roast',
      title: 'Beef Topside Roast (per kg)',
      slug: 'beef-topside-roast',
      description: 'Classic roasting cut. Home-grown, home-processed.',
      descriptionHtml: '<p>Classic roasting cut. Home-grown, home-processed.</p>',
      image: null,
      imageAlt: 'Beef Topside Roast',
      price: 24.00,
      currency: 'NZD',
      availableForSale: true,
      tags: ['beef', 'roast'],
      productType: 'Meat',
      shopifyUrl: 'https://store.mangaroa.org',
    },
  ];
}

export async function getMeatProducts(): Promise<MeatProduct[]> {
  if (USE_MOCK_DATA) {
    console.log('Using mock meat data (no SHOPIFY_STOREFRONT_TOKEN configured)');
    return getMockProducts();
  }

  try {
    const data = await shopifyFetch<{
      collection: {
        products: {
          edges: { node: ShopifyProduct }[];
        };
      };
    }>(MEAT_QUERY, { first: 100 });

    if (!data?.collection?.products?.edges) {
      console.warn('No meat collection found — falling back to mock data');
      return getMockProducts();
    }

    return data.collection.products.edges.map(edge => transformProduct(edge.node));
  } catch (error) {
    console.error('Error fetching meat products:', error);
    return getMockProducts();
  }
}

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency,
  }).format(price);
}
