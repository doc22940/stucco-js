import { execFileSync } from 'child_process';
import { stucco } from '../../src/stucco/run';
import { version } from '../../src/stucco/version';

describe('stucco', () => {
  // file downlaod, be a bit more permissive
  jest.setTimeout(10000);
  test('fetch correct version', async () => {
    const bin = await stucco();
    expect(
      execFileSync(bin.path(), ['-version'])
        .toString()
        .trim(),
    ).toEqual(version);
  });
});
