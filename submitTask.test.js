const submitTask = require('./submitTask');

test('throws error if no file is submitted', () => {
  expect(() => submitTask(null, new Date(), new Date())).toThrow('No file submitted');
});

test('throws error if deadline is passed', () => {
  const deadline = new Date('2023-12-01');
  const now = new Date('2023-12-02');
  expect(() => submitTask('task.doc', deadline, now)).toThrow('Deadline passed');
});

test('submits successfully if file is present and before deadline', () => {
  const deadline = new Date('2023-12-10');
  const now = new Date('2023-12-01');
  expect(submitTask('task.doc', deadline, now)).toBe('Task submitted successfully');
});
