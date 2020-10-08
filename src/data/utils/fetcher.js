const fetcher = x =>
  window
    .fetch(x)
    .then(r => r.json())
    .catch(e => e);

export default fetcher;
