import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  };

  const value = searchParams.get("sort") || options[0].value;

  return (
    <div>
        <Select onChange={handleChange} options={options} value={value} type="white"/>
    </div>
  );
}

export default SortBy;
