import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import {
  Card, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
  DashboardWidgetCard,
  DashboardWidgetChartContainer,
  DashboardWidgetTotal,
  DashboardWidgetTotalWrap, DashboardWidgetTrendingIconUp,
} from '../../BasicDashboardComponents';

const data = [
  { id: 0, name: 'Page A', pv: 25 },
  { id: 1, name: 'Page B', pv: 30 },
  { id: 2, name: 'Page C', pv: 55 },
  { id: 3, name: 'Page D', pv: 42 },
  { id: 4, name: 'Page E', pv: 85 },
  { id: 5, name: 'Page F', pv: 45 },
  { id: 6, name: 'Page G', pv: 21 },
  { id: 7, name: 'Page H', pv: 56 },
  { id: 8, name: 'Page I', pv: 68 },
  { id: 9, name: 'Page J', pv: 32 },
];

const BounceRate = () => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = (item) => {
    const index = data.indexOf(item.payload);
    setActiveIndex(index);
  };

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <DashboardWidgetCard>
          <CardTitleWrap>
            <CardTitle>{t('online_marketing_dashboard.bounce_rate')}</CardTitle>
          </CardTitleWrap>
          <DashboardWidgetTotalWrap>
            <DashboardWidgetTrendingIconUp />
            <DashboardWidgetTotal>
              {(activeItem.pv)}%
            </DashboardWidgetTotal>
            <DashboardWidgetChartContainer>
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  <Bar dataKey="pv" onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        key={entry.id}
                        cursor="pointer"
                        fill={index === activeIndex ? '#4ce1b6' : '#f6da6e'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </DashboardWidgetChartContainer>
          </DashboardWidgetTotalWrap>
        </DashboardWidgetCard>
      </Card>
    </Col>
  );
};

export default BounceRate;
