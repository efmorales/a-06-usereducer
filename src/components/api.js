export async function fetchData(route, number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${route}/${number}`);
    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    } else {
      return [data];
    }
  }