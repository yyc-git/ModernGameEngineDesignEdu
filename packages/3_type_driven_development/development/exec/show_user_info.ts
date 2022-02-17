interface User {
    userName: string;
    nickName: string;

    email: string;
    isEmailVerified: boolean;

    address: string;
    city: string;
    isAddressValid: boolean;
}


/*
validate rule:
- userName.length should <= 100
- nickName.length should <= 50
- email should match /^.+\@.+$/
- isEmailVerified should be true
- city should be "chengdu" or "beijing"
- isAddressValid should be true
*/

declare function getUser(): User;
