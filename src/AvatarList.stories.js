import React from 'react';
import PropTypes from 'prop-types';

import { sizes } from './Avatar';
import { AvatarList } from './AvatarList';

export default {
  title: 'Design System/AvatarList',
};

const userdata = [
  {
    id: '1',
    name: 'Dominic Nguyen',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
  },
  {
    id: '2',
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
  },
];

const moreuserdata = [
  {
    id: '3',
    name: 'Zoltan Olah',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/81672',
  },
  {
    id: '4',
    name: 'Tim Hingston',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
  },
];

AvatarList.propTypes = {
  /**
   * Are we loading avatar data from the network?
   */
  loading: PropTypes.bool,
  /**
   * A (sub)-list of the users whose avatars we have data for. Note: only 3 will be displayed.
   */
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    })
  ),
  /**
   * The total number of users, if a subset is passed to `users`.
   */
  userCount: PropTypes.number,
  /**
   * AvatarList comes in four sizes. In most cases, you’ll be fine with `medium`.
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
};

const Template = (args) => <AvatarList {...args} />;

export const Short = Template.bind({});
Short.args = {
  users: userdata
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  users: userdata,
  size: 'small',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Ellipsized = Template.bind({});
Ellipsized.args = {
  users: [
    ...userdata,
    ...moreuserdata
  ],
};

export const BigUserCount = Template.bind({});
BigUserCount.args = {
  loading: false,
  users: [
    ...userdata,
    ...moreuserdata
  ],
  userCount: 100,
  size: 'small'
};

export const Empty = Template.bind({});
Empty.args = {
  users: [],
};
