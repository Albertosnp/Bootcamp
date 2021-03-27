export const getAllNotes = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const notas = await response.json();
    return notas;
  } catch (error) {
    console.log(error);
  }
  };