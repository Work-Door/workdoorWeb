import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import styles from './DashBoard.module.css';

const data = [
  { name: 'Jan', sales: 30 },
  { name: 'Fev', sales: 20 },
  { name: 'Mar', sales: 25 },
  { name: 'Abr', sales: 35 },
  { name: 'Mai', sales: 30 },
  { name: 'Jun', sales: 50 },
  { name: 'Jul', sales: 40 },
  { name: 'Ago', sales: 35 },
  { name: 'Set', sales: 20 },
  { name: 'Out', sales: 40 },
  { name: 'Nov', sales: 30 },
  { name: 'Dez', sales: 20 },
];

const Dashboard = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2>Vendas</h2>
      <p>Confira suas melhores vendas do ano</p>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
