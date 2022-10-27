import counter from '../modules/counter.js';

test('Should return an array length', () => {
  const arrayComments = [
    {
      comment: 'This is nice!',
      creation_date: '2021-01-10',
      username: 'John',
    },
    {
      comment: 'Great content!',
      creation_date: '2021-02-10',
      username: 'Jane',
    },
  ];

  const result = counter(arrayComments);
  expect(result).toBeDefined();
  expect(result).toBe(2);
});
