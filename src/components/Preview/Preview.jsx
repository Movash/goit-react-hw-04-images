import React from 'react';
import {
  TbSquareRoundedLetterI,
  TbSquareRoundedLetterM,
  TbSquareRoundedLetterA,
  TbSquareRoundedLetterG,
  TbSquareRoundedLetterE,
} from 'react-icons/tb';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { TfiArrowTopRight, TfiArrowTopLeft } from 'react-icons/tfi';
import Finder from './Preview_svg/Finder.svg'

const Preview = () => (
  <div className="Preview-wrapper">
    <div className="Arrow-wrapper">
      <TfiArrowTopRight className="Arrow-icon" />
      <AiOutlineArrowUp className="Arrow-icon" />
      <TfiArrowTopLeft className="Arrow-icon" />
    </div>
    <div className="Letter-wrapper">
      <TbSquareRoundedLetterI
        style={{ color: 'red' }}
        className="Letter-icon"
      />
      <TbSquareRoundedLetterM
        style={{ color: 'green' }}
        className="Letter-icon"
      />
      <TbSquareRoundedLetterA
        style={{ color: 'blue' }}
        className="Letter-icon"
      />
      <TbSquareRoundedLetterG
        style={{ color: 'yellow' }}
        className="Letter-icon"
      />
      <TbSquareRoundedLetterE
        style={{ color: 'purple' }}
        className="Letter-icon"
      />
    </div>
    <img src={Finder} alt="My SVG" className="Finder-svg" />
  </div>
);

export default Preview;
