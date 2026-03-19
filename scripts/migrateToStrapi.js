const fs = require('fs');
const path = require('path');

const STRAPI_URL = 'http://localhost:1337/api/products';
const STRAPI_TOKEN = '0313ba1b7c8164abbf779fe29d62b297a331e5ca4a52eff4df3542a8a93c4b2804043011a143b357d95df124beb1bf1449e7cf83cb078b2754639f06a3cd9d4635fe227e6135757d2e99d60d6a39df0f2f6d10948f31ba9cc37cd7c6ae90a49265f6fabfda69b329a520a14ea3bac4a3adfdbdfeb9f5912c7f769d96b8b888d2';

async function migrate() {
  const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/products.json'), 'utf8'));
  let successCount = 0;

  for (const product of products) {
    const dataPayload = {
      data: {
        name: product.name,
        slug: product.slug,
        series: product.series,
        seriesName: product.seriesName,
        model: product.model,
        category: product.category,
        shortDescription: product.shortDescription,
        description: product.description,
        features: product.features,
        applications: product.applications,
        specs: product.specs,
      }
    };

    try {
      const response = await fetch(STRAPI_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_TOKEN}`
        },
        body: JSON.stringify(dataPayload)
      });
      
      const result = await response.json();
      if (!response.ok) {
        console.error(`Failed to import ${product.name}:`, JSON.stringify(result.error));
      } else {
        console.log(`Successfully imported: ${product.name}`);
        successCount++;
      }
    } catch (err) {
      console.error(`Error importing ${product.name}:`, err.message);
    }
  }
  console.log(`Migration Complete. Imported ${successCount} out of ${products.length} products to Strapi.`);
}

migrate();
