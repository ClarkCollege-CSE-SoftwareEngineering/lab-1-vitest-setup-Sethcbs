export async function fetchArticle(id: string): Promise<Article> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return { title: 'Fetched Article', body: 'Content', author: 'API' };
}
