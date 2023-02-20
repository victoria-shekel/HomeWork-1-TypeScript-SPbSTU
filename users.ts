export interface IUsersId {
    userid: string
}

export interface IUsersName {
    name: string
}

export interface IUsersGender {
    gender: string
}

//Creating a new interface by inheriting the properties of three other interfaces
//Final interface IUsersArray
export interface IUsersArray extends IUsersId, IUsersName, IUsersGender {
}

export const usersArray: IUsersArray[] = [
    {
        userid: '127e4567-e89b-12d3-a458-426614174000',
        name: 'John',
        gender: 'man'
    },

    {
        userid: '127e4567-e89a-12f3-a458-327395154000',
        name: 'Anna',
        gender: 'woman'
    }
];