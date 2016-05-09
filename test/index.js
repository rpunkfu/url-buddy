import { describe } from 'ava-spec';
import { queryParam } from '../src';

describe('query-param =>', (it) => {
  it('is an empty constructor', async (t) => {
    t.is(typeof queryParam, 'function');
  });

  it('returns undefined when called', async (t) => {
    t.falsy(queryParam());
  });
});
