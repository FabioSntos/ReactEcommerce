import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { api } from "../../services/api";

import { Container } from "./styles";

interface Props {
  evaluation: number;
}

const Evaluation: React.FC<Props> = ({ evaluation }) => {
  return (
    <Container>
      {evaluation <= 0 ? (
        <>
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
        </>
      ) : evaluation <= 0.5 ? (
        <>
          <FaStarHalfAlt />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
        </>
      ) : evaluation <= 1 ? (
        <>
          <FaStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
        </>
      ) : evaluation <= 1.5 ? (
        <>
          <FaStar />
          <FaStarHalfAlt />
          <FiStar />
          <FiStar />
          <FiStar />
        </>
      ) : evaluation <= 2 ? (
        <>
          <FaStar />
          <FaStar />
          <FiStar />
          <FiStar />
          <FiStar />
        </>
      ) : evaluation <= 2.5 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FiStar />
          <FiStar />
        </>
      ) : evaluation <= 3 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FiStar />
          <FiStar />
        </>
      ) : evaluation <= 3.5 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FiStar />
        </>
      ) : evaluation <= 4 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FiStar />
        </>
      ) : evaluation <= 4.5 ? (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      ) : (
        evaluation >= 5 && (
          <>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </>
        )
      )}
    </Container>
  );
};

export default Evaluation;
