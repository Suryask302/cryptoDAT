import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Panel from '@/shared/components/Panel';
import { Table } from '@/shared/components/TableElements';
import axios from 'axios';
import ErrorAlert from '@/shared/components/ErrorAlert';
import TopTenRow from './TopTenRow';

const TopTen = () => {
  const { t } = useTranslation('common');
  useEffect(() => {
    const fetchData = async() => {
      let data = await axios.get('http://localhost:5000/binanceApi');
    };
    fetchData()

  }, []);

  const refreshRequest = () => {

  };

  return (
    <Panel
      lg={12}
      title={t('finance_dashboard.top_cryptocurrencies')}
      isLoading={isHistoryLoading || isTopTenLoading}
      refreshRequest={refreshRequest}
    >
      {(errorTopTen || errorHistory) ? (
        <>
          <ErrorAlert subTitle="Quotes" error={errorTopTen} />
          <ErrorAlert subTitle="Charts" error={errorHistory} />
        </>
      ) : (
        <DashboardTableCrypto responsive bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Circulating Supply</th>
              <th>Change 24h</th>
              <th>Change 7d</th>
              <th dir="ltr">Graph (7 days)</th>
            </tr>
          </thead>
          <tbody>
            {topTen.length > 0 && topTen.map((crypto, index) => (
              <TopTenRow
                key={crypto.id}
                crypto={crypto}
                index={index}
                chartData={chartData?.[crypto.symbol]}
              />
            ))}
          </tbody>
        </DashboardTableCrypto>
      )}
    </Panel>
  );
};

export default TopTen;

// region STYLES

const DashboardTableCrypto = styled(Table)`

  tbody td {
    padding: 10px;
    white-space: nowrap;
  }
`;

// endregion
