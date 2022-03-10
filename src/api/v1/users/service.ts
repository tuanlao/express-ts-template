import { UserModel } from 'models';
import { User } from 'models/types';
import { DEFAULT_PAGING } from 'utils/constants';

const getUsers = async (query: any) => {
  const { ids, search } = query;
  const queryParams: any = {};
  if (ids && ids.length) {
    queryParams._id = { $in: ids };
  }

  if (search) {
    queryParams.$or = [{ name: { $regex: search, $options: 'i' } }, { nickname: { $regex: search, $options: 'i' } }];
  }
  const skip = Number(query.skip) || DEFAULT_PAGING.skip;
  const limit = Number(query.limit) || DEFAULT_PAGING.limit;

  const [count, users] = await Promise.all([
    UserModel.count(queryParams),
    UserModel.find(queryParams).skip(skip).limit(limit),
  ]);

  return {
    total: count,
    skip,
    data: users,
  };
};

const createUser = async (user: User) => {
  const data = await UserModel.create(user);
  return data;
};

export { getUsers, createUser };
