import { levelData } from "@/app/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";

const tiger = <FontAwesomeIcon icon={faGithubAlt} color="orange" height={80} />;
const box = <FontAwesomeIcon icon={faBox} height={100} />;

const Field = ({ level }: { level: number }) => {
  return (
    <div className={`flex w-full`}>
      <div className="flex justify-center w-full">
        {new Array(levelData[level].tigerCount)
          .fill(tiger)
          .map((tiger, key) => tiger)}
      </div>
      <div className="flex w-full">
        {new Array(levelData[level].tigerCount)
          .fill(box)
          .map((box, key) => box)}
      </div>
    </div>
  );
};

export default Field;
