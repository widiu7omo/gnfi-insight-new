import { describe, it, expect } from 'vitest';
import { getAllPostsHandler } from './post';

describe('getAllPostsHandler', () => {
    it('should filter unfinished posts and sort by date', async () => {
        const result = await getAllPostsHandler({ data: { offset: 0, limit: 100 } });
        const posts = result.posts;

        // Check filtering
        const unfinishedPosts = posts.filter(p => p.finished === false);
        expect(unfinishedPosts.length).toBe(0);

        // Check sorting
        for (let i = 0; i < posts.length - 1; i++) {
            const current = posts[i];
            const next = posts[i + 1];

            // Featured posts come first
            if (current.featured && !next.featured) {
                continue;
            }
            if (!current.featured && next.featured) {
                expect(true).toBe(false); // Should not happen
            }

            // Then sorted by date
            const currentDate = new Date(current.publishedAt || 0).getTime();
            const nextDate = new Date(next.publishedAt || 0).getTime();
            expect(currentDate).toBeGreaterThanOrEqual(nextDate);
        }
    });
});
