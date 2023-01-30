import { FC } from 'react';
import {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  TypographyTypes,
} from '../tokens/typography';
import { Text } from './text';
import '../../index';

const order = [
  'head-1',
  'head-2',
  'head-3',
  'head-4',
  'head-5',
  'head-6',
  'default',
  'sm',
  'xs',
  'caption',
];

export const Typography: FC = () => {
  return (
    <>
      {order.map((key, index) => {
        return (
          <div key={index} className="mb-8">
            <Text type={key as TypographyTypes}>Lorem ipsum</Text>
            <hr className="w-24" />
            <div className="flex">
              <div className="pt-3 pr-8 w-32 text-sm">
                <p className="text-gray-400 font-semibold">Name</p>
                <p className="text-gray-300 italic">{key}</p>
              </div>
              <div className="pt-3 pr-8 w-32 text-sm">
                <p className="text-gray-400 font-semibold">Family</p>
                <p className="text-gray-300 italic">
                  {fontFamily[key as TypographyTypes]}
                </p>
              </div>
              <div className="pt-3 pr-8 w-32 text-sm">
                <p className="text-gray-400 font-semibold">Size</p>
                <p className="text-gray-300 italic">
                  {fontSize[key as TypographyTypes]}
                </p>
              </div>
              <div className="pt-3 pr-8 w-32 text-sm">
                <p className="text-gray-400 font-semibold">Line height</p>
                <p className="text-gray-300 italic">
                  {lineHeight[key as TypographyTypes]}
                </p>
              </div>
              <div className="pt-3 pr-8 w-38 text-sm">
                <p className="text-gray-400 font-semibold">Letter spacing</p>
                <p className="text-gray-300 italic">
                  {letterSpacing[key as TypographyTypes]}
                </p>
              </div>
              <div className="pt-3 pr-8 w-32 text-sm">
                <p className="text-gray-400 font-semibold">Weight</p>
                <p className="text-gray-300 italic">
                  {fontWeight[`${key as TypographyTypes}-weight`]}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Typography;
