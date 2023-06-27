import CpButton from '../components/atoms/CpButton';
import RecommendPost from "../components/organisms/RecommendPost";
// @ts-ignore
import {FormControl, InputLabel, MenuItem, SelectChangeEvent} from "@mui/material";
import DropDown from "../components/molecules/DropDown";

export default () => {


  return (
    <>
      <div>main page</div>
      <RecommendPost></RecommendPost>
      <DropDown></DropDown>
      <div>
        <CpButton />
      </div>
    </>
  );
};
