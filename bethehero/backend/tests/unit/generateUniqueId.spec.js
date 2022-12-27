const generaUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generaUniqueId();

    expect(id).toHaveLength(8);
  })
})