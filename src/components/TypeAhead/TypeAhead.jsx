import { useEffect, useState } from "react";

const options = [
  "apple",
  "banana",
  "cat",
  "dog",
  "egg",
  "fight",
  "Ice",
  "Height",
];

const TypeAhead = () => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(options);
  const [suggestionsVisible, setSuggestionsVisible] = useState(true);

  const filterOptions = (input) => {
    const cleanValue = input.toLowerCase().replace(/[^a-zA-Z\s]/g, "");
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(cleanValue)
    );

    setFiltered(filteredOptions);
    setSuggestionsVisible(true);
  };

  useEffect(() => {
    filterOptions(inputValue);
  }, [inputValue]);

  const handleButtonClick = (value) => {
    setFiltered([]);
    setInputValue(value);
    setSuggestionsVisible(false);
  };

  return (
    <div>
      <h2>TypeAhead</h2>
      <div style={{ width: "100%" }}>
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          style={{ width: "200px" }}
        />
      </div>

      {inputValue && suggestionsVisible && (
        <div
          style={{
            background: "black",
            color: "white",
            width: "200px",
            marginTop: "5px",
          }}
        >
          {filtered.map((value) => (
            <div
              key={value}
              style={{
                display: "flex",
                padding: "8px",
                borderBottom: "1px solid white",
              }}
            >
              <button onClick={() => handleButtonClick(value)}>{value}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeAhead;
