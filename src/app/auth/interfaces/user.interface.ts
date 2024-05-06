export interface User {
  _id:      string;
  name:     string;
  lastname: string;
  username: string;
  email:    string;
  phone:    string;
  ced:      string;
  roles:    string[];
  isActive: boolean;
}
