import LevelPage from "@/app/ui/levelPage/LevelPage";

const Level = async ({ params }: { params: { level: number } }) => {
  return (
    <div>
      <div>
        <LevelPage level={params.level} />
      </div>
    </div>
  );
};

export default Level;
// app/levels/[level]/page.tsx
