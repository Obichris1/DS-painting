export default async function sitemap() {
    const baseUrl = "https://www.dspaintingservices.com";
  
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/services/interior-services`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/services/exterior-services`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/services/furniture-staining`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
      },
    ];
  }
  