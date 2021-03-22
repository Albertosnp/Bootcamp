export const Note = ({content, date}) => {
  console.log(content);
    return (
      <li>{content}
        <p>{date}</p>
      </li>
    );
};
// export default Note;
