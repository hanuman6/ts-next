import React, { FC } from 'react';

import { User } from '../interfaces';

type ListDetailProps = {
  item: User
};

const ListDetail: FC<ListDetailProps> = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>
      Detail for
      {user.name}
    </h1>
    <p>
      ID:
      {user.id}
    </p>
  </div>
);

export default ListDetail;
