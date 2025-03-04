type AuthAnswer = AuthErrorAnswer | AuthSuccessAnswer;

interface AuthErrorAnswer {
  message: string;
}

interface AuthSuccessAnswer {
  name: string;
  email: string;
  avatarUrl: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
}

interface GetMeData {
  _id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface GetUsers {
  users: Array<GetUser>;
}

type GetUser = {
  name: string;
  avatarUrl: string;
  _id: string;
};

interface GetChat {
  name: string;
  avatarUrl: string;
  chatId: string;
}

type GetChats = Array<GetChat>;

type GetChatMessages = Array<MessgaeType>;

type MessgaeType = {
  sendId: string;
  message: string;
};
