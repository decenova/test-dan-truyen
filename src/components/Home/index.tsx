import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks';

import { Row, Col, Pagination, Menu } from 'antd';


import { GAME } from '../../common/query';
import { GameCard } from '../GameCard';
import { ListGame } from '../ListGame';

interface Props {

}

interface Entry {
  __typename: string,
  id: number,
  name: string,
  narrator: {
    __typename: string,
    displayName: string,
    id: string,
    username: string
  },
  slug: string,
  thumbnailUrl: string
}

export const Home: React.FC<Props> = (props: Props) => {

  const [order, setOrder] = useState('NEWEST');
  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(GAME, { variables: { page: page, order: order } });




  const renderListGame = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { entries } = data.gamesByOrder;
    return <ListGame entries={entries} />;
  }
  const renderPaging = () => {
    if (loading || error) return <Pagination defaultCurrent={page} total={0} onChange={handleSelectPage} />;
    const { totalEntries } = data.gamesByOrder;
    return <Pagination defaultCurrent={page} total={totalEntries} onChange={handleSelectPage} />;
  }

  const handleMenuClick = (e: any) => {
    setPage(1);
    setOrder(e.key);
  };
  const handleSelectPage = (e: any) => {
    setPage(e);
  };
  return (
    <Row>
      <Col xs={0} sm={6} md={4} lg={4} xl={4}>
        <Menu
          onClick={handleMenuClick}
          style={{ width: '100%' }}
          defaultSelectedKeys={[order]}
          mode="inline"
        >
          <Menu.Item key="NEWEST">NEWEST</Menu.Item>
          <Menu.Item key="POPULAR">POPULAR</Menu.Item>
          <Menu.Item key="PREPARE">PREPARE</Menu.Item>
        </Menu>
      </Col>
      <Col xs={24} sm={18} md={16} lg={16} xl={16}>
        {renderListGame()}
        <br></br>
        <Row type="flex" justify="center">
          {renderPaging()}
        </Row>
      </Col>
    </Row>
  )
}
