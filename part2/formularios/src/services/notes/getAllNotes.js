export const getAllNotes = async () => {
  try {
    const response = await fetch('https://dry-bastion-41251.herokuapp.com/api/notes');
    const notas = await response.json();
    return notas;
  } catch (error) {
    console.log(error);
  }
  };