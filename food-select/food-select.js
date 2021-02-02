import { displayUserInfo } from '../display-user-info.js';
import { getUserStorage } from '../localStorage-utils.js';

const user = getUserStorage();

displayUserInfo(user);