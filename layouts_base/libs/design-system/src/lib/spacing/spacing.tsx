import { FC } from 'react';
import { spacing, SpacingKeys } from '../tokens/spacing';

interface RowProps {
  spacingKey: SpacingKeys;
}

const Row: FC<RowProps> = ({ spacingKey }) => {
  const value = spacing[spacingKey];
  const style = { width: value, height: value };
  return (
    <div className="flex mb-8 items-center text-gray-500 text-sm">
      <div className="w-20 flex justify-end mr-20">
        <div className="bg-gray-800" style={style} />
      </div>
      <div className="w-32 mr-10">{spacingKey}</div>
      <div>{value}</div>
    </div>
  );
};

export const Spacing = () => {
  return (
    <div className="flex flex-col mt-10">
      {Object.keys(spacing).map((key) => {
        return <Row spacingKey={key as SpacingKeys} />;
      })}
    </div>
  );
};

export default Spacing;
