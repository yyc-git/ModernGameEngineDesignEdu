interface User {
    userName: string;
    nickName: string;

    email: string ;
    isEmailVerified: boolean;

    address: string;
    city: string;
    isAddressValid: boolean;
}

declare function getUser(): User;




declare function showUserName(userName: string): void;
declare function showNickName(nickName: string): void;
declare function showEmail(email: string): void;
declare function showAddress(address: string): void;
declare function showCity(city: string): void;

declare function isUserNameValid(userName: string): boolean;
// // function isUserNameValid(userName: string): boolean {
// //     return userName.length <= 100;
// // }

let { userName, nickName, email, isEmailVerified, address, city, isAddressValid } = getUser();

if (isUserNameValid(userName)) {
    showUserName(userName);
}

// ...
