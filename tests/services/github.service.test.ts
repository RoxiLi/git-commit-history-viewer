import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import githubService from '../../src/services/github.service';

// Mockear las llamadas de axios
const mock = new MockAdapter(axios);

describe('Github Service', () => {
  afterEach(() => {
    // Clean mock after each test
    mock.reset();
  });

  it('should fetch commits successfully', async () => {
    const mockData = [
      {
        sha: 'sampleSha1',
        commit: {
          message: 'sample commit message 1',
        },
      },
    ];
    mock.onGet('https://api.github.com/repos/sampleOwner/sampleRepo/commits').reply(200, [
      mockData
    ]);

    const commits = await githubService.getCommits('sampleOwner', 'sampleRepo');
    expect(commits).toBeDefined();
    expect(commits.length).toBeGreaterThan(0);
  });

  it('should handle errors', async () => {
    // Mocckear bad response
    mock.onGet('https://api.github.com/repos/sampleOwner/sampleRepo/commits').reply(500);

    await expect(githubService.getCommits('sampleOwner', 'sampleRepo')).rejects.toThrow();
  });
});
