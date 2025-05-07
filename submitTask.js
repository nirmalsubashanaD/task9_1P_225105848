function submitTask(file, deadline, currentTime) {
  if (!file) throw new Error('No file submitted');
  if (currentTime > deadline) throw new Error('Deadline passed');
  return 'Task submitted successfully';
}

module.exports = submitTask;
