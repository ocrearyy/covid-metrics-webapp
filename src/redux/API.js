const fetchData = async () => {
  const response = await
  fetch('https://api.covid19tracking.narrativa.com/api/2020-03-10');
  let data = await response.json();
  data = data.dates['2020-03-10'];
  return data;
};

export default fetchData;
