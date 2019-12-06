import React from 'react'
import { Card } from 'antd';
import { Cover } from '../Cover';
const { Meta } = Card;

interface Props {
  entry: {
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
}

export const GameCard: React.FC<Props> = (props: Props) => {
  const { name, narrator: { displayName }, thumbnailUrl } = props.entry;
  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      cover={<Cover image={thumbnailUrl} width={'100%'} height={'240px'}/>}
    >
      <Meta title={name} description={displayName} style={{textAlign: "left"}} />
    </Card>
  )
}
