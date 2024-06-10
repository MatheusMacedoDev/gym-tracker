import React from 'react';
import Gradient from '../components/Gradient';
import LineChartComponent from '../components/Grafic';
import ProfileBoxInput from '../components/ProfileBoxInput';
import ContainerBoxIput from '../components/ProfileBoxInput/Container/style';
import { Button } from '../components/Button';

const Joao = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(251, 102, 20, ${opacity})`,
        strokeWidth: 2 // Largura da linha
      }
    ],
    legend: ["Progresso"] // Legenda
  };

  return (
    <Gradient>
      <LineChartComponent data={data} />
  <Button/>
    </Gradient>
  );
};

export default Joao;
