import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import CryptoRow from './components/CryptoRow';
// import TradeHistory from './components/TradeHistory';
// import BtcEth from './components/BtcEth';
// import CryptotrendsToday from './components/CryptotrendsToday';
import TopTen from './components/TopTen';



const FinanceDashboard = () => {
  const { t } = useTranslation('common');

  const { rtl, topTen } = useSelector(state => ({
    rtl: state.rtl,
    topTen: state.topTen.data,
  }));

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    
  }, [topTen]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('finance_dashboard.page_title')}</h3>
        </Col>
      </Row>
      <CryptoRow />
      <Row>        
        {/* <BtcEth dir={rtl.direction} /> */}
        {/* <TradeHistory /> */}
        {/* <CryptotrendsToday dir={rtl.direction} /> */}
        <TopTen />
      </Row>
    </Container>
  );
};

export default FinanceDashboard;
