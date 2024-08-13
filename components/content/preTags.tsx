const TextList = ({ array } :any ) => {

  console.log(array);

  return array.map((textLine: string) => (
        <pre className="text-2xl whitespace-pre-line">{textLine}</pre>
      ));
};

export default TextList;