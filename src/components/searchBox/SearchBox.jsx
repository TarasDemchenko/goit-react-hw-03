import { RiPhoneFindLine } from "react-icons/ri";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, handleFiltechange }) => {
  return (
    <>
      <div className={css.search_form}>
        <p>
          Find contacts by name <RiPhoneFindLine />
        </p>
        <input
          value={value}
          onChange={handleFiltechange}
          type="text"
          name=""
          id=""
          className={css.search_input}
        />
      </div>
    </>
  );
};

export default SearchBox;
