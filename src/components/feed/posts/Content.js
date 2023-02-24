function Content({ content }) {
  return (
    <>
      <div className="font-16 text-dark my-3"><p className="my-1">{content}</p></div>
      <div className="file-group"></div>
      <div className="time-group"></div>
    </>
  );
}

export default Content;
