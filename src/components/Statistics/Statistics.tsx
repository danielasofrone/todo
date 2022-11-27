import './Statistics.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Store } from '../../redux/reducers/index';
import { Todo } from '../../redux/reducers/toDoReducer/types';

interface SatisticsProps {
  todos: Todo[];
}

const Statistics = ({ todos }: SatisticsProps) => {
  const [percentageCompleted, setPercentageCompleted] = useState<number>(0);
  const [percentageIncomplete, setPercentageIncomplete] = useState<number>(0);

  useEffect(() => {
    const totalTodos = todos.length;

    const totalCompleted = todos.filter(
      (todo) => todo.completed === true
    ).length;
    const calculatedCompletedPct = (100 * totalCompleted) / totalTodos;
    setPercentageCompleted(calculatedCompletedPct);

    const totalIncomplete = todos.filter(
      (todo) => todo.completed === false
    ).length;
    const calculatedIncompletePct = (100 * totalIncomplete) / totalTodos;
    setPercentageIncomplete(calculatedIncompletePct);
  }, [todos]);

  return (
    <>
      <div className="statistics-bar">
        <div
          className="completed-bar"
          style={{ width: `${percentageCompleted}%` }}
        >
          <div className="pct">{percentageCompleted.toFixed()}%</div>
        </div>
        <div className="pct">{percentageIncomplete.toFixed()}%</div>
      </div>
    </>
  );
};

const mapStateToProps = ({ todos }: Store) => ({
  todos,
});
export default connect(mapStateToProps)(Statistics);
