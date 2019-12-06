import React from 'react'

import { Row, Col} from 'antd';

import { GameCard } from '../GameCard';

interface Props {
  entries: Array<Entry>;
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

export const ListGame: React.FC<Props> = (props: Props) => {
  const { entries } = props
  return (
    <div>
      <Row gutter={[16, 16]} type="flex" justify="start" align="middle">
        {entries.map((entry: Entry) => {
          return (
            <Col key={entry.id} xs={24} sm={24} md={12} lg={8} xl={6}>
              <GameCard entry={entry} />
            </Col>
          );
        })}
      </Row>
    </div>
  )
}
