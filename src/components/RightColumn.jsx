import ListDown from "./ListDown";
import TotalBalance from "./TotalBalance";

export default function RightColumn() {
  return (
    <div className="lg:col-span-2">
      <TotalBalance />
      <ListDown />
    </div>
  );
}
