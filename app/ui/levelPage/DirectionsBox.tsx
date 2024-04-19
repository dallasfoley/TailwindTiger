import { levelData } from "@/app/lib/data";

const DirectionsBox = ({ level }: { level: number }) => {
  return (
    <div>
      <div className="rounded-3xl m-10 text-white bg-slate-600">
        <p className="m-10 text-2xl">{levelData[level].directions}</p>
      </div>
      {levelData[level].key && <p>{levelData[level].key}</p>}
    </div>
  );
};

export default DirectionsBox;
